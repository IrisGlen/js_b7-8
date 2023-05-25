// input : người dùng nhập số
// xử lý: thêm vào mảng
// output: xuất mảng

var arrSoNguyen =[];
var arrSoThuc =[];
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
        if (arrSoNguyen[i]<trungGian) {
            trungGian = arrSoNguyen[i];
        }
    }
    document.querySelector(".timSoMin").innerHTML = "Số nhỏ nhất: " + trungGian;
}
function timSoDuongNhoNhat() {
    var trungGian = arrSoNguyen[0];
    for(var i = 1; i < arrSoNguyen.length; i++) {
        if ((arrSoNguyen[i] >= 0) && (arrSoNguyen[i]<trungGian)) {
            trungGian = arrSoNguyen[i];
        }
    }
    document.querySelector(".timSoDuongMin").innerHTML = "Số dương nhỏ nhất: " + trungGian;
}
function timSoChan() {
    var soChan = -1;
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] % 2 == 0) {
            soChan = arrSoNguyen[i];
        }
    }
    document.querySelector(".timSoChan").innerHTML = "Số chẵn cuối cùng: " + soChan;
}
function doiChoViTri() {
    var viTri1 = document.getElementById("viTri1").value *1; 
    var viTri2 = document.getElementById("viTri2").value *1; 
    var newArr =[];
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (i == viTri1) {
            newArr[i] = arrSoNguyen[viTri2];
        } else if (i == viTri2) {
            newArr[i] = arrSoNguyen[viTri1];
        } else {
            newArr[i] = arrSoNguyen[i];
        }
        console.log(newArr[i]);
    }
    document.querySelector(".doiViTri").innerHTML = "Mảng cuối cùng: " + newArr;
}
function sapXepTangDan() {
    function compareNumbers(a, b) {
        return a - b;
      }
      arrSoNguyen.sort(compareNumbers)
    document.querySelector(".sapXep").innerHTML = "Mảng cuối cùng: " + arrSoNguyen;
}
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
}
function timSoNguyenTo() {
    var soNgTo = -1;
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (kiem_tra_snt(arrSoNguyen[i]) == true) {
            soNgTo = arrSoNguyen[i];
            break;
        }
        console.log(soNgTo);
        console.log(arrSoNguyen[i]);
    }
    document.querySelector(".soNgTo").innerHTML = "Số nguyên tố đầu tiên: " + soNgTo;
}
function themVaoMangSoThuc() {
    //lấy dữ liệu từ người dùng
    var soThuc = document.getElementById("soThuc").value;  
    //xử lý
    arrSoThuc.push(soThuc);
    //xuất ra màn hình
    document.querySelector(".hienThiMangSoThuc").innerHTML = "Phần tử mảng: " + arrSoThuc;
}
function demSoNguyen() {
    var count = 0;
    for(var i = 0; i < arrSoThuc.length; i++) {
        // console.log(Number.isFinite(arrSoThuc[i]*1));
        if (Number.isInteger(arrSoThuc[i]*1) == true) {
            count ++;
            console.log(typeof arrSoThuc[i]*1);
        }
    }
    document.querySelector(".demSoNguyen").innerHTML = "Đếm số nguyên: " + count;
}
function soSanhSoAmDuong() {
    var countSoAm = 0;
    var countSoDuong = 0;
    var result = "";
    for(var i = 0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] > 0) {
            countSoDuong++;
        } else if (arrSoNguyen[i] < 0) {
            countSoAm++;
        } 
    }
    if (countSoAm == countSoDuong) {
        result = "Số Âm = Số Dương";
    } else if (countSoAm > countSoDuong) {
        result = "Số Âm > Số Dương";
    } else {
        result = "Số Âm < Số Dương";
    }

    document.querySelector(".soSanh").innerHTML = result;
}
