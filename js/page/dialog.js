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
        $(this).parent().parent().find('.gender-text').focus();
        $('.dialog-dropdown-content').removeClass('hidden');
        $('.dialog-dropdown-header-icon').toggleClass('dialog-dropup-header-icon');
        $(this).parent().parent().find('.dialog-dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })
    var InputVal2;
    var item2;
    var currentFocus2 = -1;
    $('.gender-text').focus(function() {
        $(this).val('');
        $(this).parent().parent().parent().find('.dialog-dropdown-content').css('display', 'block !important');
    })
    $('.gender-text').keyup(function(e) {
        InputVal2 = $(this).val().toLowerCase();


        if (InputVal2) {
            $(this).parent().parent().parent().find('.dialog-dropdown-content').show()
            item2 = $('.dialog-content-one').find('.dialog-dropdown-content-text');
            // console.log(item[0]);
            $.each(item2, function() {
                if ($(this).text().toString().toLowerCase().search(InputVal2) > -1) {
                    // $(this).parent().show();
                    // console.log($(this).parent())
                    $(this).addClass('match');
                    $(this).parent().parent().removeClass('hide');
                    // $(this).parent().parent().find('.content-two').addClass('hide');
                    $(this).parent().show();
                    // $(this).parent().removeClass('hide');
                } else {
                    $(this).parent().parent().removeClass('hide');
                    $(this).parent().hide();
                    $(this).removeClass('match');

                }
            })
            item2 = item2.filter(function() {
                return $(this).hasClass('match');
            })
            if (e.keyCode == 38) {
                currentFocus2--;
                for (var i = 0; i < item.length; i++) {
                    $(item2[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus2 >= item2.length) currentFocus2 = 0;
                if (currentFocus2 < 0) currentFocus2 = (item2.length - 1);
                /*add class "autocomplete-active":*/
                $(item2[currentFocus2]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 40) {
                currentFocus2++;
                for (var i = 0; i < item2.length; i++) {
                    console.log($(item2[i]).parent());
                    $(item2[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus2 >= item2.length) currentFocus2 = 0;
                if (currentFocus2 < 0) currentFocus2 = (item2.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus2);
                $(item2[currentFocus2]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());
                $('.gender-text').blur();
                if (currentFocus2 > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item2) $(item2[currentFocus2]).parent().click();
                }

            }
        } else {
            item2 = $('.dialog-content-one').find('.dialog-dropdown-content-text');

            $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();
            if (e.keyCode == 40) {
                $(this).parent().parent().parent().find('.dialog-dropdown-content').show();
                currentFocus2++;
                for (var i = 0; i < item2.length; i++) {
                    console.log($(item2[i]).parent());
                    $(item2[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus2 >= item2.length) currentFocus2 = 0;
                if (currentFocus2 < 0) currentFocus2 = (item2.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus2);
                $(item2[currentFocus2]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());

                //e.preventDefault();
                $('.gender-text').blur();

                if (currentFocus2 > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item2) $(item2[currentFocus2]).parent().click();
                }
                $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();

            }

        }

        // console.log(item);


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
        $(this).parent().parent().find('.dialog-text').focus();
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
        $(this).parent().parent().find('.dialog-pb-text').focus();
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
    var InputVal;
    var item;
    var currentFocus = -1;
    $('.dialog-text').focus(function() {
        $(this).val('');
        $(this).parent().parent().parent().find('.dialog-dropdown-content').css('display', 'block !important');
    })
    $('.dialog-text').keyup(function(e) {
        InputVal = $(this).val().toLowerCase();


        if (InputVal) {
            $(this).parent().parent().parent().find('.dialog-dropdown-content').show()
            item = $('.dialog-content-two').find('.dialog-dropdown-content-text');
            // console.log(item[0]);
            $.each(item, function() {
                if ($(this).text().toString().toLowerCase().search(InputVal) > -1) {
                    // $(this).parent().show();
                    // console.log($(this).parent())
                    $(this).addClass('match');
                    $(this).parent().parent().removeClass('hide');
                    // $(this).parent().parent().find('.content-two').addClass('hide');
                    $(this).parent().show();
                    // $(this).parent().removeClass('hide');
                } else {
                    $(this).parent().parent().removeClass('hide');
                    $(this).parent().hide();
                    $(this).removeClass('match');

                }
            })
            item = item.filter(function() {
                return $(this).hasClass('match');
            })
            if (e.keyCode == 38) {
                currentFocus--;
                for (var i = 0; i < item.length; i++) {
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 40) {
                currentFocus++;
                for (var i = 0; i < item.length; i++) {
                    console.log($(item[i]).parent());
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus);
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());
                $('.dialog-text').blur();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item) $(item[currentFocus]).parent().click();
                }

            }
        } else {
            item = $('.dialog-content-two').find('.dialog-dropdown-content-text');

            $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();
            if (e.keyCode == 40) {
                $(this).parent().parent().parent().find('.dialog-dropdown-content').show();
                currentFocus++;
                for (var i = 0; i < item.length; i++) {
                    console.log($(item[i]).parent());
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus);
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());

                //e.preventDefault();
                $('.dialog-text').blur();

                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item) $(item[currentFocus]).parent().click();
                }
                $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();

            }

        }

        // console.log(item);


    })
    $('.dialog-pb-text').focus(function() {
        $(this).val('');
        $(this).parent().parent().parent().find('.dialog-dropdown-content').css('display', 'block !important');
    })
    $('.dialog-pb-text').keyup(function(e) {
        InputVal = $(this).val().toLowerCase();


        if (InputVal) {
            $(this).parent().parent().parent().find('.dialog-dropdown-content').show()
            item = $('.dialog-content-three').find('.dialog-dropdown-content-text');
            // console.log(item[0]);
            $.each(item, function() {
                if ($(this).text().toString().toLowerCase().search(InputVal) > -1) {
                    // $(this).parent().show();
                    // console.log($(this).parent())
                    $(this).addClass('match');
                    $(this).parent().parent().removeClass('hide');
                    // $(this).parent().parent().find('.content-two').addClass('hide');
                    $(this).parent().show();
                    // $(this).parent().removeClass('hide');
                } else {
                    $(this).parent().parent().removeClass('hide');
                    $(this).parent().hide();
                    $(this).removeClass('match');

                }
            })
            item = item.filter(function() {
                return $(this).hasClass('match');
            })
            if (e.keyCode == 38) {
                currentFocus--;
                for (var i = 0; i < item.length; i++) {
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 40) {
                currentFocus++;
                for (var i = 0; i < item.length; i++) {
                    console.log($(item[i]).parent());
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus);
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());
                $('.dialog-pb-text').blur();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item) $(item[currentFocus]).parent().click();
                }

            }
        } else {
            item = $('.dialog-content-three').find('.dialog-dropdown-content-text');

            // $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();
            if (e.keyCode == 40) {
                $(this).parent().parent().parent().find('.dialog-dropdown-content').show();
                currentFocus++;
                for (var i = 0; i < item.length; i++) {
                    console.log($(item[i]).parent());
                    $(item[i]).parent().removeClass("autocomplete-active");
                }
                if (currentFocus >= item.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (item.length - 1);
                /*add class "autocomplete-active":*/
                console.log(currentFocus);
                $(item[currentFocus]).parent().addClass("autocomplete-active");
            } else if (e.keyCode == 13) {
                // $(item[itemFocus]).parent().siblings().css('background', '#fff');
                // $(item[itemFocus]).parent().css('background-color', '#019160');
                // console.log($(item[itemFocus]).parent());

                //e.preventDefault();
                $('.dialog-pb-text').blur();

                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (item) $(item[currentFocus]).parent().click();
                }
                $(this).parent().parent().parent().find('.dialog-dropdown-content').hide();

            }

        }

        // console.log(item);


    })
})