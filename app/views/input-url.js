import Ember from 'ember';

export default Ember.TextField.extend({

    type: 'url',

    didInsertElement: function() {
        this._super.apply(this, arguments);
        this.formatValue();
    },

    onValueChange: function() {
        this.formatValue();
    }.observes('value'),

    formatValue: function() {
        var pattern = /^https{0,1}:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+/g;
        if (pattern.test(this.get('value')))
          return;

        if (!pattern.test('http://' + this.get('value')))
          return;

        this.set('value', 'http://' + this.get('value'));
    }

});
