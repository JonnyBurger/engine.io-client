/**
 * Module dependencies
 */

var websocket = require('./websocket');

/**
 * Export transports.
 */

exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */
