/**
 * Author: To Minh Y
 * Function: Xuất 3 số theo thứ tự tăng dần
 * Release : 5/7/2022
 */


/**
 * Khối 1:input
 * number1
 * number2
 * number3
 * 
 * Khối 2:Các bước xử lý
 * B1: tạo biến cho người dùng nhập vào và gán giá trị lại cho biến
 * B2: xét điều kiện nếu a > b && b > c => (nếu b > c) c < b < a
 *      ngược lại =>  b < c < a
 *      nếu b > a && c > a => (nếu b > c) => a < c < b
 *      ngược lại => c < a < b
 *      nếu c > a && b > a => (nếu c > b) => a < b < c
 *      ngược lại => b < a < c
 * B3: In thông báo kết quả ra màn hình
 * Khối 3:output
 * ketQua
 */
function sortNumber() {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var number3 = Number(document.getElementById('number3').value);
    var sortSmallToBig = '';

    if(number1 < number2){
        if(number2 < number3)
        sortSmallToBig = number1 + '<' + number2 + '<' + number3;
        else
            if(number3 > number1)
            sortSmallToBig = number1 + '<' + number3 + '<' + number2;
            else
            sortSmallToBig = number3 + '<' + number1 + '<' + number2; 
    }
    else{ 
        if( number1 < number3)
        sortSmallToBig = number2 + '<' + number1 + '<' + number3;
        else
            if(number2 < number3)
            sortSmallToBig = number2 + '<' + number3 + '<' + number1;
            else
            sortSmallToBig = number3 + '<' + number2 + '<' + number1
    }
    document.getElementById('ketQua').innerHTML = sortSmallToBig;
}
document.getElementById('btnTinh').onclick = sortNumber;