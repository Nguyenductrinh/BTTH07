// Check User

let userID = document.getElementById('txtUserID');
let statusOfUserID = document.getElementById('statusOfUserID')

userID.addEventListener('focus',function(){
    this.style.border = '1px solid red'
})

userID.addEventListener('focusout', leaveUserId)

function leaveUserId(){
    // Cách 01: Ko dùng gì BTCQ
    // if(userID.value.length >=5 && userID.value.length <=12){
    //     statusOfUserID.textContent = 'UserID hợp lệ'
    //     statusOfUserID.style.color = 'blue'
    // }else{
    //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
    //     statusOfUserID.style.color = 'red'
    // }

    // Cách 02: dùng BTCQ: [1, +duongvocung]
    var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }
}

// userID.onchange = function(){
//     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// }

// Check Password
// function checkPassword(){
//     let Password = document.getElementById('txtPassword');
//     let PasswordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(PasswordRegex.test(Password.value)){
//         return true
//     }
//     return false
// }
let Password = document.getElementById('txtPassword');
let statusOfPassword = document.getElementById('statusOfPassword')

Password.addEventListener('focus',function(){
    this.style.border = '1px solid red'
})

Password.addEventListener('focusout', leavePassword)

function leavePassword(){
    // Cách 01: Ko dùng gì BTCQ
    // if(userID.value.length >=5 && userID.value.length <=12){
    //     statusOfUserID.textContent = 'UserID hợp lệ'
    //     statusOfUserID.style.color = 'blue'
    // }else{
    //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
    //     statusOfUserID.style.color = 'red'
    // }

    // Cách 02: dùng BTCQ: [1, +duongvocung]
    var PasswordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(PasswordRegex.test(userID.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }
}

// Check Name
let Name = document.getElementById('txtName');
let statusOfName = document.getElementById('statusOfName')

Name.addEventListener('focus',function(){
    this.style.border = '1px solid red'
})

Name.addEventListener('focusout', leavePassword)

function leaveName(){
    
    var NamedRegex = /^[a-zA-Z0-9]$/;
    if(NameRegex.test(userID.value)){
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    }else{
        statusOfName.textContent = 'Name không hợp lệ. Có chứa số và ký tự đặc biệt'
        statusOfName.style.color = 'red'
    }
}

// // Cách làm 02: Chỉ xử lý khi nhấp Submit

// // function checkUserId(){
// //         // Cách 02: dùng BTCQ: [1, +duongvocung]
// //     let userID = document.getElementById('txtUserID');
// //     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
// //     if(userIDRegex.test(userID.value)){
// //         return true
// //     }
// //     return false
// // }


// // let register = document.getElementById('btnRegister')

// // register.addEventListener('click', function(e){
// //     e.preventDefault()
// //     let statusOfUserID = document.getElementById('statusOfUserID')
// //     let statusOfPassword = document.getElementById('statusOfPassword')
// //     if(checkUserId() == true){
// //         statusOfUserID.textContent = 'UserID hợp lệ'
// //         statusOfUserID.style.color = 'blue'
// //     }else{
// //         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
// //         statusOfUserID.style.color = 'red'
// //     }

// //     if(checkPassword() == true){
// //         statusOfPassword.textContent = 'Password hợp lệ'
// //         statusOfPassword.style.color = 'blue'
// //     }else{
// //         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
// //         statusOfPassword.style.color = 'red'
// //     }
// // })

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