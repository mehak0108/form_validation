var flag=0;

function nameValidate(){
	var name=document.signUp.fname.value;
	
	 if(name.length==0){
   document.getElementById("error1").innerHTML="Please enter your name!";
   document.signUp.fname.focus();
   flag=1;
  }
}

function mobValidate(){
	var phone=document.signUp.mob.value;
	if(phone.length!=10){
  	document.getElementById("error2").innerHTML="Invalid mobile no.!";
    document.signUp.mob.value="";
    document.signUp.mob.focus();
    flag=1;
  }

}

function emailValidate(){
	var x=document.signUp.email.value;
	var atposition=x.indexOf("@");
	var dotposition=x.indexOf(".");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
		document.getElementById("error3").innerHTML="Enter a valid email id!";
		document.signUp.email.focus();
		flag=1;
	}
}
	
function pwdValidate(){
	var key=document.signUp.password1.value;
	if (key.length<6) {
		document.getElementById("error4").innerHTML="password length is short!";
		document.signUp.password1.focus();
		flag=1;
	}
 }

function pwdMatch(){
	var key1=document.signUp.password1.value;
	var key2=document.signUp.password2.value;
	if (key1!=key2) {
		document.signUp.password1.value="";
		document.signUp.password2.value="";
		alert("Password doesnot match!!");
		return false;

	}
	
}

function check(){
	flag=0;
	nameValidate();
	mobValidate();
	emailValidate();
	pwdValidate();
	if (flag==1) {
		return false;
	} else {
		return true;
	}
}