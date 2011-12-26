/*!
 * List Select jQuery plugin v0.1
 *
 * Copyright 2011-2010 by Andrew Miller <andrewontour@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
/* Changelog:
 *
 * 0.1    2012-12-26  Initial release
 */

 (function($) {

     $.fn.listSelect = function(config) {

         var defaults = {
             "highlightClass": 'selected',
             "initCallback": undefined,
             "losingRowCallback": undefined,
             "gainingRowCallback": undefined
         };

         if (config) $.extend(defaults, config);

         this.each(function(){
             var me = $(this),
                 row,
                 input;

             // find the currently selected row
             input = me.find(':checked');

             // check the first input if none are selected
             if( input.length === 0 ) {
                 input = me.find('input:first');
                 input.prop('checked', true);
             }

             // find the row to highlight
             row = input.closest('li');

             // run the initialise callback
             if( typeof defaults.initCallback === 'function' ) {
                 defaults.initCallback.call(row);
             }

             // add the highlight class to the selected row
             row.addClass(defaults.highlightClass);

             // run the gaining row callback against the row that's been selected
             if( typeof defaults.gainingRowCallback === 'function' ) {
                 defaults.gainingRowCallback.call(row);
             }

             // delegate the click handlers
             me.delegate('li', 'click', function(e) {
                 e.stopPropagation();

                 var gainingRow = $(e.currentTarget),
                     losingRow = gainingRow.closest('ul').find('.' + defaults.highlightClass);

                 if( !gainingRow.hasClass(defaults.highlightClass) ) {
                     // find selected row
                     losingRow.removeClass(defaults.highlightClass);
                     gainingRow.addClass(defaults.highlightClass).find('input').prop('checked', true);

                     if( typeof defaults.losingRowCallback === 'function' ) {
                         defaults.losingRowCallback.call(losingRow);
                     }

                     if( typeof defaults.gainingRowCallback === 'function' ) {
                         defaults.gainingRowCallback.call(gainingRow);
                     }
                 }
             });

         });

         return this;
     };

 })(jQuery);
