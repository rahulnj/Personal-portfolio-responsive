
////To check Name///
var nameInput = document.getElementById('name')
var validname=false;
var nameRegex=/^[ a-zA-Z]+$/
nameInput.addEventListener('blur', () => {
    var name = nameInput.value
    if(name.length==0){
        text="Please Enter your Name";
        error_name.innerHTML = text;
        validname=false;
    } else if(name.length<4){
        error_name.innerHTML="Name should be more than 3 Characters"
        validname=false;
    }else{validname=true;
   
}
})
nameInput.addEventListener('keyup',()=>{
    var name = nameInput.value
     if(name.includes('  ')){
         validname=false;
error_name.innerHTML="Name should not contain 2 concecutive spaces"

     }else if(!name.match(nameRegex)){
         error_name.innerHTML='Numeric values are not allowed in name'
         validname=false;

     }
     else{
         validname=true;
        error_name.innerHTML=" "
       
     }
})

////To check phone number////
var phoneInput = document.getElementById('phone')
var validphone=false;
phoneInput.addEventListener('blur',()=>{
    var phone=phoneInput.value
    if(phone.length==0){
         validphone=false;
        text="This field should not be blank";
        error_phone.innerHTML = text;
   
}else if(phone.length<10){
    error_phone.innerHTML='Number should be 10 digits'
}
else{
    error_phone.innerHTML=" ";
     validphone=true;
}     
})
phoneInput.addEventListener('keypress', (e)=>{

    if((!e.key.match(/[0-9]/))||(phoneInput.value.length > 9)){
        e.preventDefault()
    }

})

//////To check email///////
var emailInput = document.getElementById('email')
var validmail=false;
emailInput.addEventListener('blur',()=>{
    var email=emailInput.value
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(email.length==0){
        text="This field cannot be empty";
         validmail=false;
        error_mail.innerHTML = text;
       
    }else if (!email.match(regexEmail)) {
        error_mail.innerHTML = 'This email id is not valid.'
        validmail=false;
      } else {
        validmail=true;
        error_mail.innerHTML = ''
      
    }
    
})
//////To check message////////
var messageInput=document.getElementById('message')
var validmessage=false;
messageInput.addEventListener('blur',()=>{
    var message=messageInput.value
    if(message.length<=25){
        validmessage=false;
        text="Please Enter More Than 25 Characters"
        error_message.innerHTML = text;
       
    }else{
        validmessage=true;
        text=" "
        error_message.innerHTML=text;
        
    }
})


/////Mail
function mail() {
       if(validname==true && validphone==true && validmail==true && validmessage==true)
       {$.ajax({
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
        })} else{
            error_name.innerHTML="Please Enter this field"
            error_phone.innerHTML="Please Enter this field"
            error_mail.innerHTML = 'Please Enter this field'
            error_message.innerHTML='Please Enter this field'

        }
}





