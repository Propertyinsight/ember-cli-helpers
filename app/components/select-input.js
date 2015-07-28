import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  tagName: 'select',
  options: [],
  selected: null,
  labelAttribute: 'label',
  valueAttribute: 'value',

  change(){
    this.sendAction('changeSelect', this.$().val() );
  }
});
