const PlaceHolder = require('./placeHolder');
const binding = require('./binding');
const {
  compose,
  pipe
} = require('./compose');
const m2f = require('./m2f');
const deepCopy = require('./deep-copy');
const constant = require('./constant');
const Pipeable = require('./pipeable');
const not = require('./not');
const { selectWith, rejectWith } = require('./array');

/**
 * The idempotent function.
 * @param {any} v 
 * @return {any} v.
 */
const id = v => v;
/**
 * Convert `fun` to an unary function.
 * @param {Function} fun 
 * @return {Function}
 */
const unary = fun => arg => fun(arg);

module.exports = {
  PlaceHolder,
  binding,
  compose,
  pipe,
  Pipeable,
  m2f,
  deepCopy,
  constant,
  not,
  selectWith,
  rejectWith,
  id,
  unary,
}
