$(document).ready(function() {
    $('.dialog-content-one').click(function() {

        $('.dialog-content-one').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-one').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().toggle();
        $('.dialog-dropdown-header-text').text($(this).first().text());
    });
    $('.dialog-btn-dropdown').click(function() {
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })

    $('.dialog-content-two').click(function() {

        $('.dialog-content-two').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-two').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-vt').text($(this).first().text());
    });
    $('.btn-dropdown3').click(function() {
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })

    $('.dialog-content-three').click(function() {

        $('.dialog-content-three').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-three').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-pb').text($(this).first().text());
    });

    $('.dialog-content-four').click(function() {

        $('.dialog-content-four').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-four').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-ttcv').text($(this).first().text());
    });
})