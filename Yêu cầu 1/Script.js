// Nguyễn Đức Trình

// Check User name

let userID = document.getElementById("txtUserID");
let statusOfUserID = document.getElementById("statusOfUserID");

userID.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

userID.addEventListener("focusout", leaveUserId);

function leaveUserId() {
  // Cách 02: dùng BTCQ: [1, +duongvocung]
  var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
  if (userIDRegex.test(userID.value)) {
    statusOfUserID.textContent = "UserID hợp lệ";
    statusOfUserID.style.color = "blue";
  } else {
    statusOfUserID.textContent = "UserID không hợp lệ. Độ dài từ 5 - 12";
    statusOfUserID.style.color = "red";
  }
}

// Check Password

let Password = document.getElementById("txtPassword");
let statusOfPassword = document.getElementById("statusOfPassword");

Password.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

Password.addEventListener("focusout", leavePassword);

function leavePassword() {
  // Cách 02: dùng BTCQ: [1, +duongvocung]
  var PasswordRegex = /^[a-zA-Z0-9]{5,12}$/;
  if (PasswordRegex.test(Password.value)) {
    statusOfPassword.textContent = "Password hợp lệ";
    statusOfPassword.style.color = "blue";
  } else {
    statusOfPassword.textContent = "Password không hợp lệ. Độ dài từ 7 - 12";
    statusOfPassword.style.color = "red";
  }
}

// Check Name

let Name = document.getElementById("txtName");
let statusOfName = document.getElementById("statusOfName");

Name.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

Name.addEventListener("focusout", leaveName);

function leaveName() {
  
  var NameRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (NameRegex.test(Name.value)) {
    statusOfName.textContent = "Name hợp lệ";
    statusOfName.style.color = "blue";
  } else {
    statusOfName.textContent =
      "Name không hợp lệ. Không được chứa số và ký tự đặc biệt";
    statusOfName.style.color = "red";
  }
}

// check Address
let Address = document.getElementById("txtAddress");
let statusOfAddress = document.getElementById("statusOfAddress");

Address.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

Address.addEventListener("focusout", leaveAddress);

function leaveAddress() {
  
  var AddressRegex = /^[a-zA-Z0-9\s,'-]*$/;
  if (AddressRegex.test(Address.value)) {
    statusOfAddress.textContent = "Address hợp lệ";
    statusOfAddress.style.color = "blue";
  } else {
    statusOfAddress.textContent =
      "Address không hợp lệ";
    statusOfAddress.style.color = "red";
  }
}

// Check Email
let Email = document.getElementById("txtEmail");
let statusOfEmail = document.getElementById("statusOfEmail");

Email.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

Email.addEventListener("focusout", leaveEmail);

function leaveEmail() {
  
  var EmailRegex =/^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  if (EmailRegex.test(Email.value)) {
    statusOfEmail.textContent = "Email hợp lệ";
    statusOfEmail.style.color = "blue";
  } else {
    statusOfEmail.textContent ="Email không hợp lệ";
    statusOfEmail.style.color = "red";
  }
}

// // Cách 03: Sử dụng thư viện jQuery
// // Cú pháp jQuery: $(SELECTOR).ACTION()
// $(document).ready(function(){

//     function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//         let userID = $('#txtUserID').val();
//         let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//         if(userIDRegex.test(userID)){
//             return true
//         }
//         return false
//     }

//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkUserId()){
//             $("#statusOfUserID").text('UserID hợp lệ')
//             $("#statusOfUserID").css('color','blue')
//         }else{
//             $("#statusOfUserID").text('UserID không hợp lệ')
//             $("#statusOfUserID").css('color','red')
//         }
//     })
// })

