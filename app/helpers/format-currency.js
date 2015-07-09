import Ember from 'ember';

export function formatCurrency(input) {
  if (!input){
    return '';
  }

  // http://stackoverflow.com/a/24030936/188740
  return '$' + input.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export default Ember.Handlebars.makeBoundHelper(formatCurrency);
