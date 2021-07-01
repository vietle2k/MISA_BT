$(document).ready(function(){
    loadData();
    $('.btn-add-employee').click(function(){
        $('.m-dialog').removeClass('dialog-hidden');
    });
    $('.btn-close').click(function(){
        $('.m-dialog').addClass('dialog-hidden');
    });
    $('.btn-destroy').click(function(){
        $('.m-dialog').addClass('dialog-hidden');
    });
    
    $('.btn-warning-close').click(function(){
        $('.dialog-warning').addClass('warning-hidden');
    });
    $('.btn-warning-destroy').click(function(){
        $('.dialog-warning').addClass('warning-hidden');
    });
    // $('.tblEmployee tbody tr td').click(function(){
    //     $('.dialog-warning').removeClass('warning-hidden');
    // })
    $('.tblEmployee tbody tr ').on('click', function(){
        
        $('.m-warning').removeClass('warning-hidden');
        // $('.dialog-detail').removeClass('dialog-hidden');
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
    for(var i = 0; i<10; ++i){
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

//