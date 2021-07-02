$(document).ready(function(){
    loadData();
    $('.btn-add-employee').click(function(){
        $('.m-dialog').removeClass('dialog-hidden');
        $('.employeecode').focus();
    });
    $('.btn-close').click(function(){
        $('.m-dialog').addClass('dialog-hidden');
    });
    $('.btn-destroy').click(function(){
        $('.m-dialog').addClass('dialog-hidden');
    });
    $('.btn-save').click(function(){
        $('.m-dialog').addClass('dialog-hidden');
    });
    $('.btn-warning-close').click(function(){
        $('.dialog-warning').addClass('warning-hidden');
    });
    $('.btn-warning-destroy').click(function(){
        $('.dialog-warning').addClass('warning-hidden');
    });
    $('.btn-warning-save').click(function(){
        $('.dialog-warning').addClass('warning-hidden');
    });
    // $('.tblEmployee tbody tr td').click(function(){
    //     $('.dialog-warning').removeClass('warning-hidden');
    // })
    $('.tblEmployee tbody tr ').on('click', function(){
        
        $('.m-warning').removeClass('warning-hidden');
        // $('.dialog-detail').removeClass('dialog-hidden');
    })
    $('.salary_employee').on( "keyup", function( event ) {
      
      
        // When user select text in the document, also abort.
        var selection = window.getSelection().toString();
        if ( selection !== '' ) {
          return;
        }
        
        // When the arrow keys are pressed, abort.
        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
          return;
        }
        
        
        var $this = $( this );
        
        // Get the value.
        var input = $this.val();
        
        var input = input.replace(/[\D\s\._\-]+/g, "");
            input = input ? parseInt( input, 10 ) : 0;
  
            $this.val( function() {
              return ( input === 0 ) ? "" : input.toLocaleString( "it-IT" );
            } );
    })
})

function loadData(){
    
    var trHTML=`<tr>
                    <td>NV00001</td>
                    <td>Lê Xuân Việt </td>
                    <td>Nam</td>
                    <td>`+formatDate('8/9/2000')+`</td>
                    <td>0123456789</td>
                    <td>vietbadao2k@gmail.com</td>
                    <td>Fresher Web</td>
                    <td>Phòng thực tập sinh</td>
                    <td>`+formatMoney('100000000')+`</td>
                    <td>Đang thực tập</td>
            </tr>`;
    for(var i = 0; i<18; ++i){
        $('.tblEmployee tbody').append(trHTML);
    }
}

// Định dạng ngày tháng năm
function formatDate(date){
    var date = new Date(date);
    var date_fm = date.getDate();
    var month_fm = date.getMonth() +1;
    var year_fm = date.getFullYear();
    if (date_fm<10) date_fm = '0'+ date_fm;
    if (month_fm<10) month_fm = '0' + month_fm;
    return date_fm+'/'+month_fm+'/'+year_fm;
}

// Định dạng money
function formatMoney(money){
    return  money.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    }) + ' VNĐ'
}
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
function warning() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function deleted() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

