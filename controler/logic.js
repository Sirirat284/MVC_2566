const { Operator } = require('./operator');

class Logic {

    showInfoLogic = (res) => {
        new Operator().showInfoOperator(res);
    }
}
module.exports = {
    Logic
}