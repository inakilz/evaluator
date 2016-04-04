import poultry from '../../utils/poultry';
import {assign} from 'lodash';

export default class formPartsBuilderService {

  constructor($translate) {
    assign(this, {$translate});
  };

  buildSelectorFor(labelReferenceBase, key, animal, state) {
    this.labelReferenceBase = labelReferenceBase;
    return [
      {
        key: key,
        type: 'select',
        defaultValue: 'default',
        templateOptions: {
          onChange: function () {
            state.onSelectorChange();
          },
          label: this.$translate.instant(this.labelReferenceBase + 'selector.title'),
          options: this.buildChoiceListFor(animal),
          valueProp: 'id',
          labelProp: 'label'
        }
      }];
  }

  buildWrapperFor(labelReferenceBase, key, fieldList) {
    this.labelReferenceBase = labelReferenceBase;
    return {
      key: key,
      wrapper: 'panel',
      templateOptions: {label: this.$translate.instant(this.labelReferenceBase + key + '.title')},
      fieldGroup: this.buildFieldGroupFor(fieldList, key + '.fields.')
    };
  }

  buildChoiceListFor(animal) {
    return _.map(animal, (type) => {
      return {
        label: this.$translate.instant(this.labelReferenceBase + 'selector.fields.' + type),
        id: type
      };
    });
  }

  buildFieldGroupFor(fieldsList, fieldGroup) {
    return _.map(fieldsList, (field, value) => {
      return this.buildCheckboxFor(value, fieldGroup);
    });
  }

  buildCheckboxFor(field, fieldGroup) {
    return {
      type: 'checkbox',
      key: field,
      templateOptions: {
        label: this.$translate.instant(this.labelReferenceBase + fieldGroup + field)
      }
    };
  }
}
