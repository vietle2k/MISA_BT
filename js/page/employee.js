$(document).ready(function() {
    var mapDepartment = new Map();
    var mapPosition = new Map();
    getData();
    // console.table(data);
    // buildDataEmployees(data);
    mapDepartment = getInforDepartment();
    mapPosition = getInforPosition();
    console.log(mapDepartment);
    console.log(mapPosition);
    loadData();

    // Hiển thị form nhập liệu thêm nhân viên
    $('.btn-add-employee').click(function() {
        $('.m-dialog').removeClass('dialog-hidden');
        $('.employeecode').focus();
        $.ajax({
            method: "GET",
            url: "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode",
            data: "null",
            async: false,
            contentType: "application/json"
        }).done(function(response) {
            $('.employeecode').val(response);
        }).fail(function(respone) {
            alert("bi loi roi");
        });
    });
    //Đóng form nhập liệu thêm nhân viên
    $('.btn-close').click(function() {
        $('.m-dialog').addClass('dialog-hidden');
    });
    $('.btn-destroy').click(function() {
        $('.m-dialog').addClass('dialog-hidden');
    });
    // xác nhận thêm nhân viên
    $('.btn-save').click(function() {
        $('.m-dialog').addClass('dialog-hidden');
        //build data
        var a = $('.workstatus input').val();
        // a.split('.');
        console.log(a);
        var checkGenderId;
        if ($('.gendername input').val() == "Nam") checkGenderId = 1;
        else if ($('.gendername input').val() == "Nữ") checkGenderId = 0;
        else checkGenderId = 2;

        var checkDepartmentId;
        for (var key of mapDepartment.keys()) {
            if (key == $('.departmentname input').val()) checkDepartmentId = mapDepartment.get(key);
        }

        var checkPositionId;
        for (var key of mapPosition.keys()) {
            if (key == $('.positionname input').val()) checkPositionId = mapPosition.get(key);
        }
        var employee = {

            "EmployeeCode": $('.employeecode').val(),
            "FullName": $('.fullname').val(),
            // "GenderName": $('.gendername input').val(),
            "Gender": checkGenderId,
            "DateOfBirth": $('.date_box').val(),
            // "IdentityNumber": 
            // "IdentityDate":
            // "IdentityPlace":
            "Email": $('.email').val(),
            "PhoneNumber": $('.phonenumber').val(),
            // "PositionName": $('.positionname input').val(),
            "PositionId": checkPositionId,
            "DepartmentId": checkDepartmentId,
            // "DepartmentName": $('.departmentname input').val(),
            // "PersonalTaxCode":
            "Salary": $('.salary_employee').val().toString().replaceAll('.', '')
                // "JoinDate":

            // "WorkStatus": $('.workstatus input').val().toString()

        }
        setTimeout(function() {
            console.log(JSON.stringify(employee))
            $.ajax({
                url: "http://cukcuk.manhnv.net/v1/Employees",
                method: "POST",
                data: JSON.stringify(employee),
                contentType: 'application/json'
            }).done(function(res) {
                // alert("Them duoc roi");
                console.log(employee);
                getData();
            }).fail(function(res) {

            })
        }, 0)

    });

    // Đóng form cảnh báo xóa nhân viên
    $('.btn-warning-close').click(function() {
        $('.dialog-warning').addClass('warning-hidden');
    });
    $('.btn-warning-destroy').click(function() {
        $('.dialog-warning').addClass('warning-hidden');

    });
    // xác nhận xóa nhân viên
    $('.btn-warning-save').click(function() {
        $('.dialog-warning').addClass('warning-hidden');
        $.ajax({
            method: "DELETE",
            url: "http://cukcuk.manhnv.net/v1/Employees/" + employeeCodeDelete,
            data: "null",
            async: false,
            contentType: "application/json"
        }).done(function(response) {

            console.log("Thanh cong");
            getData();
        }).fail(function(respone) {
            alert("bi loi roi");
        });


    });
    var employeeCodeSelected;
    var employeeCodeDelete;
    $('.tblEmployee tbody').on('click', '.btn-deleteEmployee', function() {

            $('.m-warning').removeClass('warning-hidden');
            // $('.dialog-detail').removeClass('dialog-hidden');
            $(this).find('td').attr("fieldname");
            employeeCodeSelected = ($(this).parent().parent().find('td').first().text());
            // console.log(employeeCodeSelected);
            $.ajax({
                method: "GET",
                url: "http://cukcuk.manhnv.net/v1/Employees/Filter?pageSize=1&employeeCode=" + employeeCodeSelected,
                data: "null",
                async: false,
                contentType: "application/json"
            }).done(function(response) {
                employeeCodeDelete = response.Data[0].EmployeeId;
                console.log(employeeCodeDelete);
                // console.log(response);
            }).fail(function(respone) {
                alert("bi loi roi");
            });


        })
        //sua thog tin nhan vien
    $('.tblEmployee tbody').on('click', '.btn-editEmployee', function() {

            // $('.m-warning').removeClass('warning-hidden');
            $('.dialog-detail').removeClass('dialog-hidden');
            // $(this).find('td').attr("fieldname");
            employeeCodeSelected = ($(this).parent().parent().find('td').first().text());
            $.ajax({
                method: "GET",
                url: "http://cukcuk.manhnv.net/v1/Employees/Filter?pageSize=1&employeeCode=" + employeeCodeSelected,
                data: "null",
                async: false,
                contentType: "application/json"
            }).done(function(response) {
                // console.log(employeeCodeDelete);
                $('.employeecode').val(response.Data[0].EmployeeCode);
                $('.fullname').val(response.Data[0].FullName);
                $('.gendername input').val(response.Data[0].GenderName);
                $('.date_box').val(response.Data[0].DateOfBirth);
                $('.email').val(response.Data[0].Email);
                $('.phonenumber').val(response.Data[0].PhoneNumber);
                $('.positionname input').val(response.Data[0].PositionName);
                $('.departmentname input').val(response.Data[0].DepartmentName);
                $('.salary_employee').val(formatMoney(response.Data[0].Salary));

            }).fail(function(respone) {
                alert("bi loi roi");
            });


        })
        // config navbar-item
    $('.nav-item').click(function() {
            $('.nav-item').removeClass('editNavbar');
            $(this).addClass('editNavbar');
            //e.target.parentElement.classList.add('editNavbar');
        })
        // css dropdown customer select vị trí và phòng ban
        // $('.content-one').click(function() {

    //     $('.content-one').removeClass('clickdropdown');
    //     $(this).addClass('clickdropdown');
    // })
    $('.content-one').click(function() {

        $('.content-one').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.content-one').find('.dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dropdown-content-icon').css('display', 'block');
        $('.dropdown-header-icon').toggleClass('dropup-header-icon');
    })
    $('.content-two').click(function() {

        $('.content-two').removeClass('clickdropdown');
        $(this).addClass('clickdropdown');
        $('.content-two').find('.dropdown-content-icon').css('display', 'none');
        $('.clickdropdown').find('.dropdown-content-icon').css('display', 'block');
        $('.dropdown-icon').toggleClass('dropup-icon');
    })
    $('.btn-dropdown').click(function() {
        $('.dropdown-content').removeClass('hidden');
        $('.dropdown-header-icon').toggleClass('dropup-header-icon');

        $(this).parent().parent().find('.dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })
    $('.btn-dropdown2').click(function() {
        $('.dropdown-content').removeClass('hidden');
        $('.dropdown-icon').toggleClass('dropup-icon');

        $(this).parent().parent().find('.dropdown-content').toggle();
        // $('.btn-dropdown').toggleClass('btn-dropup');
    })
    $('.content-one').click(function() {
        $(this).parent().toggle();
        $('.dropdown-header-text').text($(this).first().text());


    })
    $('.content-two').click(function() {
            $(this).parent().toggle();
            $('.dropdown-text').text($(this).first().text());


        })
        // format mức lương cơ bản đúng chuẩn trong form nhập thêm thông tin nhân viên
    $('.salary_employee').on("keyup", function(event) {


            // When user select text in the document, also abort.
            var selection = window.getSelection().toString();
            if (selection !== '') {
                return;
            }

            // When the arrow keys are pressed, abort.
            if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
                return;
            }


            var $this = $(this);

            // Get the value.
            var input = $this.val();

            var input = input.replace(/[\D\s\._\-]+/g, "");
            input = input ? parseInt(input, 10) : 0;

            $this.val(function() {
                return (input === 0) ? "" : input.toLocaleString("it-IT");
            });
        })
        /**
         * edit narbar shortcut
         * by mf920-lxviet
         */
    var checkShortcut = 0;
    $('.shortcut-icon').click(function() {
        ++checkShortcut;
        $('.shortcut-icon').toggleClass('shortcut-icon2');
        $('.nav-item-text').toggle();
        if (checkShortcut % 2 != 0) {
            // $('.nav-item-text').css('display', 'none');
            //$('.nav-item').width(36);
            $('.content-page').css('left', 50);
            $('.content-page').css('width', 'calc(100% - 50px)');
            $('.navbar-content').css('width', '57');
        } else {
            // $('.nav-item-text').css('display', 'none');
            //$('.nav-item').width(226);
            $('.content-page').css('left', 226);
            $('.content-page').css('width', 'calc(100% - 226px)');
            $('.navbar-content').css('width', '226');
        }

        // $('.navbar-content').css('border-right', 'none');
        // $('.nav-item').css('border-right', '1px solid #e5e5e5');
    })
})

function loadData() {

}

// Định dạng ngày tháng năm
function formatDate(date) {
    if (date == null) return "";
    var date = new Date(date);
    var date_fm = date.getDate();
    var month_fm = date.getMonth() + 1;
    var year_fm = date.getFullYear();
    if (date_fm < 10) date_fm = '0' + date_fm;
    if (month_fm < 10) month_fm = '0' + month_fm;
    return date_fm + '/' + month_fm + '/' + year_fm;
}

// Định dạng money
function formatMoney(money) {
    if (money == null) return 0;
    if (money != null && money != 0) {
        return money.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

}

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}

function warning() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}

function deleted() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}

//get data
function getData() {
    var employees = null;
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Employees",
        data: "null",
        async: false,
        contentType: "application/json"
    }).done(function(response) {
        employees = response;
        buildDataEmployees(employees);
    }).fail(function(respone) {
        alert("bi loi roi");
    });
    return employees;
}
//build data
function buildDataEmployees(data) {
    $('.tblEmployee tbody').empty();
    var temp = 0;
    $.each(data, function(index, employee) {
        // console.log(index);
        // if (index % 2 == 0) {
        //     console.log('xam');
        //     $('.btn-editEmployee').css('background-color', '#E9EBEE');
        //     $('.btn-deleteEmployee').css('background-color', '#E9EBEE');
        // } else {
        //     console.log('trang')
        //     $('.btn-editEmployee').css('background-color', '#ffffff');
        //     $('.btn-deleteEmployee').css('background-color', '#ffffff');
        // }
        var trHTML = $(`<tr>
                                <td fieldname = "EmployeeCode">${employee.EmployeeCode}</td>
                                <td fieldname = "FullName">${employee.FullName}</td>
                                <td fieldname = "GenderName">${employee.GenderName}</td>
                                <td fieldname = "DateOfBirth">${formatDate(employee.DateOfBirth)}</td>
                                <td fieldname = "PhoneNumber">${employee.PhoneNumber}</td>
                                <td fieldname = "Email">${employee.Email}</td>
                                <td fieldname = "PositionName">${employee.PositionName}</td>
                                <td fieldname = "DepartmentName">${employee.DepartmentName}</td>
                                <td fieldname = "Salary" style="text-align: right;">${formatMoney(employee.Salary)}</td>
                                <td fieldname = "MartialStatusName">${employee.MartialStatusName}</td>
                                <td class="ed"><button class="btn-editEmployee"></button><button class="btn-deleteEmployee"></button></td>
                        </tr>`);
        // trHTML.data('recodeId', employee.EmployeeId);
        $('.tblEmployee tbody').append(trHTML);

    });


}

function getInforDepartment() {
    var mapTempDepartment = new Map();
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/api/Department",
        data: "null",
        async: false,
        contentType: "application/json"
    }).done(function(response) {
        // console.log(response);
        for (var i = 0; i < response.length; i++) {
            mapTempDepartment.set(response[i].DepartmentName, response[i].DepartmentId);
        }
        // console.log(mapDepartment);
    }).fail(function(respone) {
        alert("bi loi roi");
    });
    return mapTempDepartment;
}

function getInforPosition() {
    var mapTempPosition = new Map();
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Positions",
        data: "null",
        async: false,
        contentType: "application/json"
    }).done(function(response) {
        // console.log(response);
        for (var i = 0; i < response.length; i++) {
            mapTempPosition.set(response[i].PositionName, response[i].PositionId);
        }
        // console.log(mapDepartment);
    }).fail(function(respone) {
        alert("bi loi roi");
    });
    return mapTempPosition;
}
class Customer {
    constructor() {

    }
}