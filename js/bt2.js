/**
 * Author: To Minh Y
 * Function: Xuất 3 số theo thứ tự tăng dần
 * Release : 5/7/2022
 */

/**
 * Khối 1: input
 * * bo
 * * me
 * * anhTrai
 * * emGai
 * 
 * Khối 2: Các bước xử lý
 * B1: tạo biến cho người dùng chọn và gán lại giá trị
 * B2: tạo hàm truy xuất id từ select lấy giá trị 
 * B3: In kết quả ra màn hình
 * 
 * Khối 3: output
 * ketQua
 */

function hello(){
    var choose = document.getElementById('choose').value;
    var ketQua = '';
    switch (choose) {
        case 'B':{
             ketQua = 'Xin chào Bố!';
        }break;
        case 'M':{
            ketQua = 'Xin chào Mẹ!';
        }break;
        case 'A':{
            ketQua = 'Xin chào Anh Trai!';
        }break;
        case 'E':{
            ketQua = 'Xin chào Em Gái!';
        }break;

        default:{
            alert('Vui lòng chọn thành viên');
        }break;
    }
    document.getElementById('ketQua2').innerHTML = ketQua;
}
document.getElementById('btnHi').onclick = hello;

