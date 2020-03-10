'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.15): popovers.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

(0, _jquery2.default)('[data-toggle="popover"]').popover();
(0, _jquery2.default)('.popover-dismiss').popover({
  trigger: 'focus'
});