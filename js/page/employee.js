$(document).ready(function(){
    var data = getData();
    // console.table(data);
    buildDataEmployees(data);
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
    $('.nav-item').click(function(e){
        $('.nav-item').removeClass('editNavbar');
        e.target.parentElement.classList.add('editNavbar');
    })
    $('.content-one').click(function(){
        
        $('.content-one').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
    })
    $('.btn-dropdown').click(function(){
        $('.dropdown-content').removeClass('hidden');
        
        $(this).parent().parent().find('.dropdown-content').toggle();
    })
    $('.content-one').click(function(){
        var a = this;
        // $(this).parent().removeClass('hidden');
        // $(this).parent().removeClass('hide');
        // $(this).parent().addClass('hidden');
        $(this).parent().toggle();
        console.log($(this).first());
    })
    $('.content-one').hover(function(){
        document.getElementById('cmm').setAttribute("background-image", "url('../../Resource/icon/check.svg');");
        console.log("a");
        // console.log(document.getElementsByClassName('dropdown-content-icon')[0]);
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
    for(var i = 0; i<3; ++i){
        $('.tblEmployee tbody').append(trHTML);
    }
}

// Định dạng ngày tháng năm
function formatDate(date){
    if(date==null) return "";
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
    if(money==null) return 0;
    if(money!=null && money!= 0){
        return  money.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        }) + ' VNĐ'
    }
    
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

//get data
function getData(){
    var employees = null;
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Employees",
        data: "null",
        async: false,
        contentType: "application/json"
    }).done(function(response){
        employees = response;
    }).fail(function(respone){
        alert("bi loi roi");
    });
    return employees;
}
//build data
function buildDataEmployees(data){
        $.each(data, function (index, employee) { 
            var trHTML=$(`<tr>
                                <td>${employee.EmployeeCode}</td>
                                <td>${employee.FullName}</td>
                                <td>${employee.GenderName}</td>
                                <td>${formatDate(employee.DateOfBirth)}</td>
                                <td>${employee.PhoneNumber}</td>
                                <td>${employee.Email}</td>
                                <td>${employee.PositionName}</td>
                                <td>${employee.DepartmentName}</td>
                                <td>${formatMoney(employee.Salary)}</td>
                                <td>${employee.MartialStatusName}</td>
                        </tr>`);
                        trHTML.data('recodeId', employee.EmployeeId);
             $('.tblEmployee tbody').append(trHTML);
        });
        
}

