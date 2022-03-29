// Nguyễn Đức Trình
// Check UserID

$(document).ready(function(){

        function checkUserId(){
            let userID = $('#txtUserID').val();
            let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
            if(userIDRegex.test(userID)){
                return true
            }
            return false
        }
    
        $("#btnSubmit").click(function(e){
            e.preventDefault();
            if(checkUserId()){
                $("#statusOfUserID").text('UserID hợp lệ')
                $("#statusOfUserID").css('color','blue')
            }else{
                $("#statusOfUserID").text('UserID không hợp lệ')
                $("#statusOfUserID").css('color','red')
            }
        })
})

// Check Password

$(document).ready(function(){

        function checkPassword() {
            let Password = $('#txtPassword').val();
            let PasswordRegex = /^[a-zA-Z0-9]{5,12}$/;
            if(PasswordRegex.test(Password)){
                return true
            }
            return false
        }
    
        $("#btnSubmit").click(function(e){
            e.preventDefault();
            if(checkPassword()){
                $("#statusOfPassword").text('Password hợp lệ')
                $("#statusOfPassword").css('color','blue')
            }else{
                $("#statusOfPassword").text('Password không hợp lệ')
                $("#statusOfPassword").css('color','red')
            }
        })
    })
   
// Check Name
$(document).ready(function(){

    function checkName() {
        let Name = $('#txtName').val();
        let NameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
        if(NameRegex.test(Name)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#statusOfName").text('Name hợp lệ')
            $("#statusOfName").css('color','blue')
        }else{
            $("#statusOfName").text('Name không hợp lệ')
            $("#statusOfName").css('color','red')
        }
    })
})


// Check Address
$(document).ready(function(){

    function checkAddress() {
        let Address = $('#txtAddress').val();
        let AddressRegex = /^[a-zA-Z0-9\s,'-]*$/;
        if(AddressRegex.test(Address)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkAddress()){
            $("#statusOfAddress").text('Address hợp lệ')
            $("#statusOfAddress").css('color','blue')
        }else{
            $("#statusOfAddress").text('Address không hợp lệ')
            $("#statusOfAddress").css('color','red')
        }
    })
})

