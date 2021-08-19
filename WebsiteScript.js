////To check Name///
var nameInput = document.getElementById('name')

nameInput.addEventListener('blur', () => {
    var name = nameInput.value
    if(name.length==0){
        text="Please Enter your Name";
        error_name.innerHTML = text;
    } else if(name.length<4){
        error_name.innerHTML="Name should be more than 3 Characters"
}
})
nameInput.addEventListener('keyup',()=>{
    var name = nameInput.value
     if(name.includes('  ')){
error_name.innerHTML="Name should not contain 2 concecutive spaces"
     }else{
        error_name.innerHTML=" "
     }
})

////To check phone number////
var phoneInput = document.getElementById('phone')

phoneInput.addEventListener('blur',()=>{
    var phone=phoneInput.value
    if(isNaN(phone) || phone.length==0){
        text="This field should not be blank";
        error_phone.innerHTML = text;
} else if(isNaN(phone) || phone.length>10){
    text="Please Enter Valid Number";
    error_phone.innerHTML = text;
}     
})

//////To check email///////
var emailInput = document.getElementById('email')

emailInput.addEventListener('blur',()=>{
    var email=emailInput.value
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(email.length==0){
        text="This field cannot be empty";
        error_mail.innerHTML = text;
    }else if (!email.match(regexEmail)) {
        console.log('regex')
        error_mail.innerHTML = 'This email id is not valid.'
      } else {
        error_mail.innerHTML = ''
    }
    
})
//////To check////////
var messageInput=document.getElementById('message')

messageInput.addEventListener('blur',()=>{
    var message=messageInput.value
    if(message.length<=25){
        text="Please Enter More Than 25 Characters"
        error_message.innerHTML = text;
    }else{
        text=" "
        error_message.innerHTML=text;
    }
})



function mail() {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbw79b_crwItgWTVdvNaUylzUKAdVMOJcla-pHZm/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
}





