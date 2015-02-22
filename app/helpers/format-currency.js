import Ember from 'ember';

export function formatCurrency(input) {

    if (!input)
        return '';

    return '$' + input.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export default Ember.Handlebars.makeBoundHelper(formatCurrency);