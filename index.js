// input : người dùng nhập số
// xử lý: thêm vào mảng
// output: xuất mảng

var arrSoNguyen =[];
function themVaoMang() {
    //lấy dữ liệu từ người dùng
    var soNguyen = document.getElementById("soNguyen").value *1;  
    //xử lý
    arrSoNguyen.push(soNguyen);
    //xuất ra màn hình
    document.querySelector(".hienThiMang").innerHTML = "Phần tử mảng: " + arrSoNguyen;
}
function tinhTong() {
    var sum = 0;
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] >= 0) {
            sum += arrSoNguyen[i];
            console.log(typeof arrSoNguyen[i]);
        }
    }
    document.querySelector(".tinhTong").innerHTML = "Tổng số dương: " + sum;
}
function demSoDuong() {
    var count = 0;
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] >= 0) {
            count ++;
            console.log(typeof arrSoNguyen[i]);
        }
    }
    document.querySelector(".demSoDuong").innerHTML = "Đếm số dương: " + count;
}
function timSoNhoNhat() {
    var trungGian = arrSoNguyen[0];
    for(var i = 1; i < arrSoNguyen.length; i++) {
        if ((arrSoNguyen[i] >= 0) && (arrSoNguyen[i]<trungGian)) {
            trungGian = arrSoNguyen[i];
        }
    }
    document.querySelector(".timSoMin").innerHTML = "Số nhỏ nhất: " + trungGian;
}