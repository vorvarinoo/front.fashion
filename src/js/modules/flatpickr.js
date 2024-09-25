import {
  appendBtnReset,
}
from './input-date.js';


flatpickr( '[data-id="birthday"]', {
  dateFormat: "m.d.Y",
  "locale": "ru",
  allowInput: true,
  wrap: true,

  onReady: function( selectedDates, dateStr, instance ) {
    appendBtnReset();
  },

} );
