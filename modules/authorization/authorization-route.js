var Series = require('hapi-next'),
    Validator = require('modules/authorization/authorization-validator'),
    Controller = require('modules/authorization/authorization-controller');

module.exports = {
	post : {
		method : 'POST',
		path : '/login',
		config : {
			validate : Validator.validateReqLogin(),
			handler : function(request,reply) {

				var series = new Series([
					Validator.login,
					Controller.login
				]);
				
				series.execute(request,reply);
			}
		}
	}
}