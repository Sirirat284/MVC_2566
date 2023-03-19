const { Logic } = require('../controler/logic.js')
const model = require('./model')

class Endpoint {

    constructor() {
        this.employee = model.employee;
    }

    showInfoEndpoint = (req, res) => {
        new Logic().showInfoLogic(res);
    }

}
module.exports = {
    Endpoint
}
