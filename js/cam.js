/*-- CUSTOM JS --*/

//A HREF ANIMATION
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            $('html, body').animate({
                scrollTop: target.offset().top -120
            }, 1000);
            return false;
        }
    });
});

//TABS
//COMMON TABS
$('.common_tabs_selector li').click(function () {
    var index = $(this).parents('.common_tabs_wrapper:eq(0)').find('.common_tabs_selector li').index(this);

    $(this).parents('.common_tabs_wrapper:eq(0)').find('.common_tabs_selector li').removeClass('active');
    $(this).addClass('active');
    /* show results */
    $(this).parents('.common_tabs_wrapper:eq(0)').find('.common_tabs_results li.tab_container').addClass('dnone');
    $(this).parents('.common_tabs_wrapper:eq(0)').find('.common_tabs_results li.tab_container').eq(index).removeClass('dnone');
});


/*MATERIALIZE*/
//SELECT
$('select').material_select();
//DATEPICKER
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});
