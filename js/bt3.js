/**
 * Author: To Minh Y
 * Function: Xuất 3 số theo thứ tự tăng dần
 * Release : 6/7/2022
 */


/**
 * 
 * Khối 1: input
 * + num1
 * + num2
 * + num3
 * + tongSoDem
 * 
 * Khối 2: các bước xử lý
 * B1: tạo các biến cho người dùng nhập vào và gán giá trị
 * B2: sau mỗi một biến num tạo biến đếm số count và tạo một biến chứa tổng số đếm
 * B3: Lập công thức đếm số 
 * + dem = tongSoDem - soChan = soLe;
 * B4: in kết quả ra màn hình
 * 
 * Khối 3: output
 * ketQua
 */

function demSo() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = Number(document.getElementById('num3').value);
    var tongSoDem = 3;
    var soLe = 0;
    var soChan = 0;
    var count = 0;
    var dem = 0;

   if (num1 % 2 === 0) {
        count++;
        soChan = count;
   } else {
       count;
   }
   if (num2 % 2 === 0) {
        count++;
        soChan = count;
   } else {
        count;
   }
   if (num3 % 2 === 0) {
        count++;
        soChan = count;
   } else {
        count;
   }
   soLe = tongSoDem - soChan;
   dem = 'Có '+ soChan + ' số chẵn ,' + soLe +' số lẻ';
   document.getElementById('ketQua3').innerHTML = dem;
  
}
document.getElementById('btnDem').onclick = demSo;