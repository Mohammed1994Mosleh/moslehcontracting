
function useridentify1(){
  var useridentify=prompt("are you guest or employee");
while(useridentify != "guest"&&useridentify != "employee"){
useridentify=prompt("are you guest or employee");

}



if (useridentify=="guest"){

  alert('welcome to our company')
} else if(useridentify=="employee") {
alert("sign in with your username and password")
}else { alert("welcome")

}
document.write("<p>"+useridentify+"</p>")
}

function child (){
var i=0;
var output ='';
while(i<b){
  output=output+document.write("<img src='https://www.cscbroward.org/sites/default/files/styles/blog_/public/2019-08/All%20Children%20Develop%20at%20their%20Own%20Pace.JPG?h=33334fe2&itok=adHi3i7m'/>");
  i++;

}

}

useridentify1();
b=prompt("how many child do you have?");
child ();





