import Ember from 'ember';

export function formatText(input) {

    if (!input)
        return '';

    var escaped = Ember.Handlebars.Utils.escapeExpression(input);
    return new Ember.Handlebars.SafeString(escaped.replace(/\r?\n/g, '<br />'));
}

export default Ember.Handlebars.makeBoundHelper(formatText);