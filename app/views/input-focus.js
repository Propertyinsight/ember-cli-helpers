import Ember from 'ember';

export default Ember.TextField.extend({

    didInsertElement: function() {
        this._super.apply(this, arguments);
        this.$().focus()
    }

});
