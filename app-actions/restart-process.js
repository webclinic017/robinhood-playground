const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async () => {
  await log('restarting process');
  console.log('restarting robinhood-playground');
  await exec('pm2 restart robinhood-playground');
};