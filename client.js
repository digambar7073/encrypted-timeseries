const WebSocket = require('ws');
const { encryptData, getSumCheckMessage, getRandomValue } = require('./services');

const ws = new WebSocket('ws://localhost:3000');
// console.log('@@@@', ws)

ws.on('open', function open() {
  setInterval(function(){    
    //generate series of data by passing min & max value
    let limit = getRandomValue(1, 5);
    console.log('@@@@', limit)
    let serializeData = [];
    for(let i = 0; i< limit; i++) {
      serializeData.push(encryptData(JSON.stringify(getSumCheckMessage())));
    }
    console.log("serializeData: ", serializeData.join('|'))
    ws.send(
      serializeData.join('|')
    );
  }, 10000)

});