import Ember from 'ember';
const {TextField, observer} = Ember;

export default TextField.extend({
  type: 'url',

  didInsertElement() {
    this._super(...arguments);
    this.formatValue();
  },

  onValueChange: observer('value', function(){
    this.formatValue();
  }),

  formatValue() {
    var pattern = /^https{0,1}:\/\/[A-Za-z0-9-]+\.[A-Za-z0-9-]+/g;
    if (pattern.test(this.get('value'))) {
      return;
    }

    if (!pattern.test('http://' + this.get('value'))){
      return;
    }
    this.set('value', 'http://' + this.get('value'));
  }
});
