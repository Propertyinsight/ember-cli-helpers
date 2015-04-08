import Ember from 'ember';

export default Ember.Controller.extend({

    now: new Date(),

    text: 'line1\nline2',

    price: 12345.67,

    focus: 'i should be in focus',

    url: 'foo.com'

});
