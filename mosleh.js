var a=prompt("are you guest or employee")
while(!(a=="guest"||a=="employee")){
a=prompt("are you guest or employee")

}



if (a=="guest"){

  alert('welcome to our company')
} else if(a=="employee") {
alert("sign in with your username and password")
}else { alert("welcome")

}
document.write("<p>Mosleh Contracting</p>")
var b=prompt("how many child do you have?")
var i=0;
for(var i=0;i<b;i++){
  document.write("<img src='https://www.cscbroward.org/sites/default/files/styles/blog_/public/2019-08/All%20Children%20Develop%20at%20their%20Own%20Pace.JPG?h=33334fe2&itok=adHi3i7m'/>")
}