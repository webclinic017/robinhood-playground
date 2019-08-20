import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import ReactModal from 'react-modal';
import PickGraphs from '../components/PickGraphs';


import { pick } from 'underscore';

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

// import getTrend from '../utils/get-trend';
import { avgArray } from '../utils/array-math';

// import Pick from '../components/Pick';
// import TrendPerc from '../components/TrendPerc';

class Scan extends Component {
  state = { 
    loading: {},
    stSent: {},
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log({
      nextProps,
      CUR: this.props
    });

    return JSON.stringify(this.state) != JSON.stringify(nextState);
  }
  selectPick = pick => {
    console.log({ pick });
    this.setState({
      displayingPick: pick
    })
  }

  getSingleSt = ticker => {
    return new Promise(resolve => {
      this.props.socket.emit('getStScore', ticker, data => resolve(data.bullBearScore));
    });
  }
  getAllStSent = async tickers => {
    for (let ticker of tickers) {
      const score = await this.getSingleSt(ticker);
      this.setState(({ stSent }) => ({
        stSent: {
          ...stSent,
          [ticker]: score
        }
      }));
    }
  }

  componentDidMount() {
  }

  scan = () => {
    console.log(
      'SCAN',
      this.selectRef.value
    );
    const period = this.selectRef ? this.selectRef.value : undefined;
    if (period === 'penny') {
      return this.pennyScan();
    }
    this.props.socket.on('server:scan-results', ({ results }) => {
      console.log('scan results', results)
      const allTickers = [...new Set(results.map(result => result.ticker))];
      console.log({ allTickers });
      this.getAllStSent(allTickers);

      this.setState(({ loading }) => ({
        loading: {
          ...loading,
          [period]: false
        },
        results: results
          .map(pick => ({
            details: <button onClick={() => this.selectPick(pick)}>details</button>,
            ticker: pick.ticker,
            strategyName: pick.strategyName,
            keys: pick.keys,
            // k: Object.keys(pick)
          }))
      }));
    });
    this.setState(({ loading }) => ({
      loading: {
        ...loading,
        [period]: true
      }
    }))
    this.props.socket.emit(
      'client:run-scan', 
      { period }
    );
  };

  pennyScan = () => {
    console.log(
      'PENNY SCAN',
      this.selectRef.value
    );
    this.props.socket.on('server:penny-results', ({ results }) => {
      console.log('penny results', results)
      

      this.setState(({ loading }) => ({
        loading: {
          ...loading,
          penny: false
        },
        results: results
          .map(pick => ({
            details: <button onClick={() => this.selectPick(pick)}>details</button>,
            // ticker: pick.ticker,
            ...pick,
          }))
      }));
    });
    this.setState(({ loading }) => ({
      loading: {
        ...loading,
        penny: true
      }
    }))
    this.props.socket.emit('client:run-penny');
  };
  render() {
    const { loading, results = [], stSent, displayingPick } = this.state;


    const period = this.selectRef ? this.selectRef.value : undefined;
    const isLoading = !!loading[period];
    const withStSent = (results || []).map(row => ({
      ...row,
      stSent: row.stSent || stSent[row.ticker] || '...'
    }));


    const columns = results[0] && !results[0].percMaxVol ? [
      'Details',
      'Ticker',
      'Strategy Name',
      'Keys',
      'Stocktwits Sentiment',
    ] : Object.keys(results[0] || {});
    return (
      <div>
        <h2>Scan</h2>
        <select ref={ref => { this.selectRef = ref }}>
          {
            [5, 10, 30, 'd', 'penny'].map(value => (
              <option value={value}>{value}</option>
            ))
          }
        </select>
        <button onClick={this.scan}>Scan</button>
        {
          isLoading && (
            <div>
              Loading
            </div>
          )
        }
        {
          results && (
            // <code>
            //   { JSON.stringify({rows: this.state.results}, null, 2)}
            // </code>
            <MDBDataTable data={{
              columns: columns.map(label => ({ label })),
              rows: withStSent
            }} />
          )
        }

        <ReactModal isOpen={!!displayingPick}>
          <button
            onClick={() => this.selectPick(null)}
            style={{
                position: 'fixed',
                zoom: '250%',
                top: '1vh',
                left: '1vh',
            }}>
              Close Modal
          </button>
          {displayingPick && <PickGraphs pick={displayingPick} socket={this.props.socket} /> }
        </ReactModal>
      </div>
    );
      
  }
}

export default Scan;