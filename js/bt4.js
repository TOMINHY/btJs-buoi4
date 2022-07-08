/**
 * Author: To Minh Y
 * Function: Dự đoán hình tam giác
 * Release: 6/7/2022
 */

/**
 * Khối 1: input
 * + canh1
 * + canh2
 * + canh3
 * 
 * Khối 2:các bước cần xử lý
 * B1: tạo các biến để người dùng nhập vào và gán giá trị
 * B2: 
 * 
 * Khối 3: ouput
 * + ketQua
 */

function loaiTamGiac(){
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);
    var tamGiac = '';

    if(canh1 < canh2 + canh3 || canh2 < canh1 + canh3 || canh3 < canh1 + canh2){
        if(canh1*canh1 == canh2*canh2 + canh3*canh3 || canh2*canh2 == canh1*canh1 + canh3*canh3 || canh3*canh3 == canh1*canh1 + canh2*canh2){
            tamGiac = 'Hình tam giác vuông';
        }else if(canh1 == canh2 && canh2 == canh3){
            tamGiac = 'Hình tam giác đều';
        }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
            tamGiac = 'Hình tam giác cân';
    }
    else
        tamGiac = 'Một loại tam giác nào đó';
    }

    document.getElementById('ketQua4').innerHTML = tamGiac;
}
document.getElementById('btnDuDoan').onclick = loaiTamGiac;