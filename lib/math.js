'use strict'


module.exports.randoNum = {
    random : (low,high) => {
        low = Math.ceil(low);
        high = Math.floor(high);
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }
}