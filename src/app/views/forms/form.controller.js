import { assign } from 'lodash';

export default class formController {
  /*@ngInject*/
  constructor(formService) {
    assign(this, {
      formService
    });
    this.model = {};
    this.fields = this.formService.getFormFields(this);
  }

  onFormBaseChange(){
    this.fields = this.formService.changeFormFieldsForValues(this, this.model.typeSelector);
  }
}
