
window.onload=function(){alert('Welcome to my website');}//this is the welcome to the website
window.onunload=function(){alert('sorry, come back later');}


var ran
ran = Math.round(Math.random()*50000) //this is a little joke about you visitor number
document.write("you are the visitor number " + ran + " of this website")

var d=new Date(); //this is the current date 
var month=new Array(12);
month[0]='January';
month[1]='February';
month[2]='March';
month[3]='April';
month[4]='May';
month[5]='June';
month[6]='July';
month[7]='August';
month[8]='September';
month[9]='October';
month[10]='November';
month[11]='December';
var todaysDate=+d.getDate()+' '+month[d.getUTCMonth()]+' '+d.getUTCFullYear();
function escribir(){
    document.getElementById('date').innerHTML='Today is: '+todaysDate;
    }