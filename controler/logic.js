const { Operator } = require('./operator');

class Logic {

    showInfoLogic = (req,res) => {
        new Operator().showInfoOperator(req,res);
    }
}
module.exports = {
    Logic
}