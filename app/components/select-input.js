import Ember from 'ember';
const {Component, computed} = Ember;
const alias = computed.alias;

export default Component.extend({
  tagName: 'select',
  currentSelection: null,
  labelAttribute: 'label',
  options: [],
  optionsKey: alias('valueAttribute'),
  valueAttribute: 'value',

  change(){
    this.sendAction('changeSelect', this.$().val() );
  }
});
