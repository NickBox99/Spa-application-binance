const axios = require("axios");
//Допустимые значения для limit: 5, 10, 20, 50, 100, 500, 1000, 5000
export default {
  get: async (symbol, limit = 500) => {
    let basaData = await axios.get(`https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=${limit}`);
    return basaData.data;
  },
  subscribe: function(symbol) {
    let webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
    return webSocket; 
  },
};
