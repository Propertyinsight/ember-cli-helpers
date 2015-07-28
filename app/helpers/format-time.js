import Ember from 'ember';
import {formatTime} from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(date){
  if (!date) {
    return '';
  }
  return formatTime(date);
});
