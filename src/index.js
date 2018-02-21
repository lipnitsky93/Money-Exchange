// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency < 0) {
        return {}
    }
    var purse = {};
    purse.H = Math.floor(currency / 50);
    purse.Q = Math.floor((currency - purse.H * 50) / 25);
    purse.D = Math.floor((currency - purse.H * 50 - purse.Q * 25) / 10);
    purse.N = Math.floor((currency - purse.H * 50 - purse.Q * 25 - purse.D * 10) / 5);
    purse.P = currency - purse.H * 50 - purse.Q * 25 - purse.D * 10 - purse.N * 5;
    if (purse.H == 0) {
        delete purse.H;
    }
    if (purse.Q == 0) {
        delete purse.Q;
    }
    if (purse.D == 0) {
        delete purse.D;
    }
    if (purse.N == 0) {
        delete purse.N;
    }
    if (purse.P == 0) {
        delete purse.P;
    }
    return purse;
    
}
