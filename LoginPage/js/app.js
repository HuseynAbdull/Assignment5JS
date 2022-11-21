function Login() {
    let usern=document.querySelector('.usern')
    var un_value =(usern.value);
    let pw=document.querySelector('.pw')
    var pw_value = pw.value;
    let mail=document.querySelector('.mail')
    var mail_value = mail.value;
    var mailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/;
    var usercheck = /^[A-Z][a-z]{5,19}$/;
   

    if (!mailcheck.test(mail_value) ) {
        mail.style.border = "red solid 3px";
        return false;
    }
    else {
        if(!usercheck.test(un_value)){
            usern.style.border = "red solid 3px";
            return false;
        }
        else{
            if(!passwordcheck.test(pw_value)){
                pw.style.border = "red solid 3px";
                return false; 
            }
            mail.style.border = "black solid 3px";
            usern.style.border = "black solid 3px";
            pw.style.border = "black solid 3px";
            alert("Xoş gəlmisiz !");
            return true;
        }
    }
}