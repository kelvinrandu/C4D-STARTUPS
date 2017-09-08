/**
 * @Package: Crest Admin Responsive Theme
 * @Since: Crest Admin 1.0
 * This file is part of Crest Admin Responsive Theme.
 */


jQuery(function($) {

    'use strict';

    var CRESTADMIN_SETTINGS = window.CRESTADMIN_SETTINGS || {};

    /*--------------------------------
        Easypie Chart
     --------------------------------*/
    CRESTADMIN_SETTINGS.chartEasypie = function() {




        if ($.isFunction($.fn.easyPieChart)) {

            $('.easypiechart1').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#565090',
                trackColor: '#eaeaea',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 10,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.easypiechart2').easyPieChart({
                easing: 'easeInBounce',
                barColor: '#4bb5ff',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 20,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });



            $('.easypiechart3').easyPieChart({
                easing: 'easeInOut',
                barColor: '#ff5f74',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 30,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart4').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#ffd014',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 40,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart5').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#565090',
                trackColor: '#eaeaea',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 2,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.easypiechart6').easyPieChart({
                easing: 'easeInBounce',
                barColor: '#4bb5ff',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 5,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });



            $('.easypiechart7').easyPieChart({
                easing: 'easeInOut',
                barColor: '#ff5f74',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 10,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart8').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#ffd014',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 15,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.easypiechart9').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#565090',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 10,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart10').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#4bb5ff',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 5,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.easypiechart11').easyPieChart({
                easing: 'easeInOut',
                barColor: '#ff5f74',
                trackColor: '#eaeaea',
                scaleColor: '#ffffff',
                lineCap: 'square',
                lineWidth: 7,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


            $('.easypiechart12').easyPieChart({
                easing: 'easeOutCirc',
                barColor: '#eaeaea',
                trackColor: '#ffd014',
                scaleColor: '#cccccc',
                lineCap: 'square',
                lineWidth: 4,
                size: 200,
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });




        }



    };






    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRESTADMIN_SETTINGS.chartEasypie();
    });

    $(window).resize(function() {});

    $(window).load(function() {});

});
