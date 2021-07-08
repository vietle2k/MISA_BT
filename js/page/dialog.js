$(document).ready(function() {
    $('.dialog-content-one').click(function() {

        $('.dialog-content-one').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-one').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().toggle();
        console.log($(this).find('.dialog-dropdown-content-text').text());
        $('.dialog-dropdown-header-text input').val($(this).find('.dialog-dropdown-content-text').text());
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
        $('.dialog-dropdown-icon-vt').toggleClass('dialog-dropup-icon-vt');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-vt input').val($(this).find('.dialog-dropdown-content-text').text());
    });
    $('.btn-dropdown3').click(function() {
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-icon-vt').toggleClass('dialog-dropup-icon-vt');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })

    $('.dialog-content-three').click(function() {

        $('.dialog-content-three').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-three').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-icon-pb').toggleClass('dialog-dropup-icon-pb');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-pb input').val($(this).find('.dialog-dropdown-content-text').text());
    });
    $('.btn-dropdown4').click(function() {
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-icon-pb').toggleClass('dialog-dropup-icon-pb');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })

    $('.dialog-content-four').click(function() {

        $('.dialog-content-four').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.dialog-content-four').find('.dialog-dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dialog-dropdown-content-icon').css('display', 'block');
        $('.dialog-dropdown-icon-ttcv').toggleClass('dialog-dropup-icon-ttcv');
        $(this).parent().toggle();
        $('.dialog-dropdown-text-ttcv input').val($(this).find('.dialog-dropdown-content-text').text());
    });
    $('.btn-dropdown5').click(function() {
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-icon-ttcv').toggleClass('dialog-dropup-icon-ttcv');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })
})