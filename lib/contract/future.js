/*
 * lib/contract/future.js
 */

'use strict';

var assert = require('assert');

var _ = require('lodash');

function future(symbol, expiry, currency, exchange) {
  assert(_.isString(symbol), 'Symbol must be a string.');
  assert(_.isString(expiry), 'Expiry must be a string.');

  return {
    currency: currency || 'USD',
    exchange: exchange,  // originaly this was 'ONE'
    expiry: expiry,
    secType: 'FUT',
    symbol: symbol
  };
}

// Public API
module.exports = exports = future;
