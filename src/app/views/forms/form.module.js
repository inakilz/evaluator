import formConfig from './form.config.js';
import formControllers from './form.controllers.js';
import formServices from './../../services/formService/form.services.js';
import formSubmitService from './../../services/formSubmitService/formSubmit.services';

const formModule = angular
    .module('olmixEvaluator.form', [
      formControllers.name,
      formServices.name,
      formSubmitService.name
    ])
    .config(formConfig);

export default formModule;
