var fs = require("fs");

var funcs = {
  prepLogs:function (logs) {
    return logs.toString().split(/\n/g);
  },
  getDates:function (logs) {
    logs = this.prepLogs(logs);
    var dates = logs.map(function (logs) {
      return logs.split('[')[1].split('T')[0];
    })
    return dates.filter(function (date, i) {
      return dates.indexOf(date)==i;
    })
  },
  showDates:function (logs) {
    var ans = '* What are all the dates the log covers?\n'
    for(var i = 0; i < logs.length; i++){
      ans +=(logs[i]+"\n")
    }
    return ans;
  }
}
function equalOther(ind, arr) {
  for(var i = 0; i < arr.length; arr++){
    if(ind === arr[i]){
      return true;
    }
  }
  return false;
}

function getDate(logs) {
  var arr = logs.toString().split(/\n/g);
  var ans = [arr[0].split(",")[1].substr(2,10)];
  for(var i = 1; i < arr.length; i++){
    if(!equalOther(arr[i].split(",")[1].substr(2,10), ans)){
      ans.push(arr[i].split(",")[1].substr(2,10));
    }
  }
  return ans;
}

fs.readFile('./data/log.log', function(err, data) {
  if (err) throw err;
  var logs = data.toString();
  // When your tests are passing, uncomment this code and run `node lib/log_parser.js` from command line to confirm success.
  // var dates = funcs.getDates(logs);
  // console.log(funcs.showDates(dates));
});

module.exports = funcs;
