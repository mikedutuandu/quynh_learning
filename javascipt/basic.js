//1. Variables: Bien====================================
//Bien dung de luu tru data
let bien_a = 1;
let bien_b = "hhhh";

//Bien thi co the thay doi lai gia tri cua no
bien_a = 2;
console.log(bien_a);


//2. Const: Hang=========================================
// Tuong tu bien va no khong the thay doi gia tri cua no
const hang_a = 123;
console.log(hang_a);

//3. Operators===========================================

//3.1 Assignment( = ): Phep gan
let bien_c;
bien_c = 20;
console.log(bien_c);

//3.2 Arithmetic Operators: Toan tu

//Adding( + ): Phep cong
let bien_d = 1;
let bien_e = 2;
let bien_f = bien_d + bien_e;
console.log(bien_f);

//Subtraction( - ): Phep tru
bien_f = bien_d - bien_e;
console.log(bien_f);

//Multiplication( * ): Phep nhan
bien_f = bien_d * bien_e;
console.log(bien_f);

//Division( / ): Phep chia
bien_f = bien_d / bien_e;
console.log(bien_f);

//3.3  Comparison Operators: So sanh
let bien_m = 10;
let bien_n = 11;
let bien_kq;
//So sanh bang( === )
bien_kq = (bien_m === bien_n); //true/false
console.log(bien_kq);

//So sanh khac ( !== )
bien_kq = (bien_m !== bien_n); //true/false
console.log(bien_kq);

//So sanh lon hon bang ( >= )
bien_kq = (bien_m >= bien_n); //true/false
console.log(bien_kq);

//So sanh lon hon ( > )
bien_kq = (bien_m > bien_n); //true/false
console.log(bien_kq);

//So sanh nho hon bang ( <= )
bien_kq = (bien_m <= bien_n); //true/false
console.log(bien_kq);

//So sanh nho hon ( < )
bien_kq = (bien_m < bien_n); //true/false
console.log(bien_kq);

//3.4 Logical Operators: hanh dong logic

let bien_s = 10;
let bien_x = 11;

// Phep and( && ): phep va
bien_kq = (bien_s > 5 && bien_x > 6) // true && true = true
console.log(bien_kq);

bien_kq = (bien_s > 5 && bien_x > 60) // true && false =false
console.log(bien_kq);

bien_kq = (bien_s > 50 && bien_x > 60) // false && false =false
console.log(bien_kq);

// Phep or( || ): phep hoac
bien_kq = (bien_s > 5 || bien_x > 6) // true || true = true
console.log(bien_kq);

bien_kq = (bien_s > 5 || bien_x > 60) // true || false = true
console.log(bien_kq);

bien_kq = (bien_s > 50 || bien_x > 60) // false && false = false
console.log(bien_kq);

// Phep or( ! ): phep phu dinh
let dung = true;
bien_kq = !dung;
console.log(bien_kq); // !true = false

let sai = false;
bien_kq = !sai;
console.log(bien_kq); // !false = true

//4. Data Types: Kieu du lieu======================================
// string
// number
// boolean
// undefined

//Kieu so(so nguyen, so thuc)
let kieu_so = 1;

//Kieu chuoi
let kieu_chuoi = "hhh dhdh";

//Kieu Booleans: kieu gia tri true/false
let kieu_bool = true;
kieu_bool = false;

//kieu Underfined
let kieu_undefined;
console.log(kieu_undefined);

console.log(typeof kieu_bool);

//5. Objects: =======================================================
// Doi tuong - mot vat hoac la mot nguoi
// Doi tuong co nhieu thuoc tinh

let doituong_xemay = {
    loai_xe: "xe 50 phan khoi",
    ten_xe: "xe way",
    mau_xe: "mau xanh",
    so_nam_su_dung: 5
}
console.log(doituong_xemay)

//Truy xuat thuoc tinh cua doi tuong
console.log(doituong_xemay.mau_xe);

//Thay doi thuoc tinh cua doi tuong
doituong_xemay.mau_xe = "mau do";
console.log(doituong_xemay.mau_xe);

//6. Array: danh sach ===============================================

let danh_sach_xe = ["xe may", "xe dap", "xe oto"]; // danh so thu tu phan tu bat dau tu 0

//lay gia tri cua 1 phan tu
console.log(danh_sach_xe[2])
console.log(danh_sach_xe[1])
console.log(danh_sach_xe[0])

//thay doi gia tri cua 1 phan tu nao do
danh_sach_xe[0] = "may bay"
console.log(danh_sach_xe)

//Add them gia tri cho danh sach
danh_sach_xe.push("tau dien");
console.log(danh_sach_xe);

//Xem so phan tu cua danh sach
console.log(danh_sach_xe.length);

//7. Conditional statements: mo ta co dieu kien=========================
//dieu kieu if

let condition_a = 12;
if (condition_a > 9 && condition_a < 20) {
    console.log("ok");
}

//dieu kien if else

if (condition_a > 11 && condition_a < 20) {
    console.log("ok");
} else {
    console.log("not ok");
}

//dieu kien if else if ... else

if (condition_a < 1) {
    console.log("<1");
} else if (condition_a < 4) {
    console.log("<4");
} else if (condition_a < 11) {
    console.log("<11");
} else {
    console.log("khong biet");
}

//8.  Loops: lap
// Lam viec gi do lap di lap lai mot so n lan

console.log("in so 1");
console.log("in so 2");
console.log("in so 3");
console.log("in so 4");

for(let i = 0; i < 4; i++){
    console.log(i);
}
for(let i = 0; i < 4; i++){
    console.log("in so ",i);
}
// Duyet gia tri cua 1 danh sach

let danh_sach_hoc_sinh = ['hs1',"hs2",'hs3'];
console.log(danh_sach_hoc_sinh[0]);
console.log(danh_sach_hoc_sinh[1]);
console.log(danh_sach_hoc_sinh[2]);

for(let i = 0;i < danh_sach_hoc_sinh.length; i++){
    console.log(danh_sach_hoc_sinh[i]);
}
