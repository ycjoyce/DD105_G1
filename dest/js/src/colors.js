/* global rgbToHex */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.15): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

$('.theme-color').each(function () {
  const Color = $(this).css('backgroundColor')
  $(this).parent().append(`
    <table class="w-100">
      <tr>
        <td class="text-muted">HEX:</td>
        <td class="font-weight-bold">${rgbToHex(Color)}</td>
      </tr>
      <tr>
        <td class="text-muted">RGB:</td>
        <td class="font-weight-bold">${Color}</td>
      </tr>
    </table>
  `)
})
>\n        <td class="font-weight-bold">' + rgbToHex(Color) + '</td>\n      </tr>\n      <tr>\n        <td class="text-muted">RGB:</td>\n        <td class="font-weight-bold">' + Color + '</td>\n      </tr>\n    </table>\n  ');
}); /* global rgbToHex */