import Ember from 'ember';

import { formatDate } from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(date){

    if (!date)
        return '';

    return formatDate(date, 'MMMM D, YYYY');
});