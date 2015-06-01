import Ember from 'ember';

export function truncateText(params, hash) {
  var postFix = hash.postfix || '...';

  if (!hash.value)
    return '';

  if (!hash.length)
    throw new Error('Length missing from truncate-text');

  if (hash.value.length < hash.length)
    return hash.value;

  return hash.value.substr(0, hash.length - postFix.length) + postFix;
  
}

export default Ember.HTMLBars.makeBoundHelper(truncateText);
