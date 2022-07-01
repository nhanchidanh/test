const fakeLogin = [
  {
    username: "username1",
    password: "password1"
  },
  {
    username: "username2",
    password: "password2"
  }
]

// Tim tài khoản
function findAccount(usernameInput, pwInput) {
  return fakeLogin.find(function (item) {
    return item.username === usernameInput && item.password === pwInput;
  });
}

function logged(form) {
  if (form) {
    const username = form.taikhoan;
    const pw = form.matkhau;

    // * username.value <==> giá trị input username
    // * username.value.length <==> giá trị độ dài input username
    // * username.focus() <=> trỏ vào ô input username.
    // * !username.value <==> không có giá trị == rỗng

    if (!username.value) {
      alert('Vui long nhap Tai khoan');
    } else {
      // Tim kiếm theo username.
      const account = findAccount(username.value, pw.value);

      if (account) {
        window.location.href = "check.html";
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
      }
    }

    return true;
  }
}

// So sanh ngay gio hien tai
function compareWithNowDate(date) {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + "/" + month + "/" + day;
  const d1 = Date.parse(newdate);
  const d2 = Date.parse(date);
  return (d1 > d2);
}

// Check du lieu so dien thoai = bieu thuc chinh qui
function regexPhoneNumber(str) {
  const regexPhoneNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;

  if (!regexPhoneNumber.test(str)) {
      alert('Số điện thoại của bạn không đúng định dạng!');
      return false;
  } else {
      return true;
  }
}

function xuLyDangKy(form) {
  if(form){

  
  const mssv = form.mssv
  const hoten = form.hoten
  const gioitinh = form.gioitinh
  const date = form.ngaysinh
  const quequan = form.quequan
  const sdt = form.sdt
  const email = form.email
  const anhdaidien = form.anhdaidien
  const matkhau = form.matkhau
  const nhaplaimatkhau = form.nhaplai;

  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!mssv.value) {
      alert("khong duoc bo trong mssv")
      mssv.focus()
      return false
  }
  else if (mssv.value.length > 8) {
      alert("Phai nhap dung 8 ky tu")
      mssv.focus()
      return false
  }

  if (!hoten.value) {
      alert("khong duoc bo trong ho ten")
      hoten.focus()
      return false
  }

  if (!quequan.value) {
      alert("khong duoc bo trong que quan")
      quequan.focus()
      return false
  }

  if (!gioitinh.value) {
      alert("khong duoc bo trong gioi tinh")
      gioitinh.focus()
      return false
  }

  if (!anhdaidien.value) {
      alert("hay them anh dai dien")
      anhdaidien.focus()
      return false
  }



  if (!date.value) {
      alert("khong duoc bo trong ngay sinh")
      date.focus()
      return false
  } else if (!compareWithNowDate(date.value)) {
      alert("Đã vượt quá ngày hiện tại")
  }

  // Kiem tra dinh dang so dien thoai
  regexPhoneNumber(sdt.value)

  if (!emailReg.test(email.value)) {
      alert("Email không hợp lệ");
      email.focus();
      return false;
  }

  if (matkhau.value.length < 8) {
      alert("Mật khẩu ít nhất 8 kí tự!");
      matkhau.focus();
      return false;
  }

  if (nhaplaimatkhau.value.length < 8) {
      alert("Mật khẩu ít nhất 8 kí tự!");
      nhaplaimatkhau.focus();
      return false;
  }

  if (nhaplaimatkhau.value !== matkhau.value) {
      alert("Mat khau nhap lai khong giong!");
      nhaplaimatkhau.focus();
      return false;
  }

  return true;
}
}