import {
  formatCurrency
} from '../../../helpers/format-currency';
import { module, test } from 'qunit';

module('FormatCurrencyHelper');

test('it works', function(assert) {
  var result = formatCurrency(42.12);
  assert.ok(result, '$42.12');
});

test('comma separators', function(assert) {
  var result = formatCurrency(123123.12);
  assert.ok(result, '$123,123.12');
});

test('appends zeroes', function(assert) {
  var result = formatCurrency(42);
  assert.equal(result, '$42.00');
});

test('appends zeroes 2', function(assert) {
  var result = formatCurrency(42.2);
  assert.equal(result, '$42.20');
});