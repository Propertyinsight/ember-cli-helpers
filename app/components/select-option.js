import Ember from 'ember';
const {Component, computed} = Ember;
const {alias} = computed;

export default Component.extend({
  tagName: 'option',
  attributeBindings: ['value', 'selected'],

  option: null,
  labelAttribute: 'label',
  valueAttribute: 'value',

  label: computed('option', 'labelAttribute', function(){
    return this.getOptionValue('labelAttribute');
  }),

  value: computed('option', 'valueAttribute', function(){
    return this.getOptionValue('valueAttribute');
  }),

  getOptionValue(attribute){
    let attributeName = 'option';
    if (typeof(this.get('option')) === 'object'){
      attributeName += '.' + this.get(attribute);
    }
    return this.get(attributeName);
  },

  selected: computed('value', 'currentSelection', function(){
    return this.get('value') === this.get('currentSelection');
  })
});
