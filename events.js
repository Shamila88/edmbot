var config = require('./config');
var Commands = [];

function cmd(info, func) {
   var infos = {
          name : info['name'] ,
          desc: info['desc'] === undefined ? '' : info['desc'],
          dontAddCommandList: info['dontAddCommandList'] === undefined ? false : info['dontAddCommandList'],
          function: func
    };


    Commands.push(infos);
    return infos;
}

module.exports = {
    cmd: cmd ,
    commands: Commands
}
