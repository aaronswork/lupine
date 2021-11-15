// JavaScript Document

var t=0;
var f=0;
var i=0;

function tRoll(){
if(t===0){
		document.getElementById("tt").setAttribute('src','img/tt1.svg');
		t++;
		}
		else{
		document.getElementById("tt").setAttribute('src','img/tt2.svg');
		t--;
    }
}
function fRoll(){
if(f===0){
        document.getElementById("fb").setAttribute('src','img/fb1.svg');
        f++;
        }
        else{
        document.getElementById("fb").setAttribute('src','img/fb2.svg');
        f--;
     }
}
function iRoll(){
if(i===0){
        document.getElementById("ig").setAttribute('src','img/ig1.svg');
        i++;
        }
        else{
        document.getElementById("ig").setAttribute('src','img/ig2.svg');
        i--;
    }
}

/* Toggle between showing and hiding mobile menu when the user clicks on the icon, change hamburger button to 'X' */
var y = document.getElementById("h_nav");
function mobMenu() {
  if (y.style.display === "block") {
    y.style.display = "none";
    document.getElementById("btn1").src = ('img/menubtn.svg');
  } else {
    y.style.display = "block";
    document.getElementById("btn1").src = ('img/xbtn.svg');
  }
}

/* Show the menu if window is re-sized to mobile then back to desktop size */
function showMenu() {
var mqdt = window.matchMedia( "(min-width: 1050px)" );
var mqmb = window.matchMedia( "(max-width: 1050px)" );
document.getElementById("btn1").src = ('img/menubtn.svg');
if (mqdt.matches) {
    y.style.display = "inline";  // window width is at least than 1050px
  }
if (mqmb.matches) {
    y.style.display = "none";  // window width is less than 1050px
}
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hbar").style.top = "0";
  } else {
    document.getElementById("hbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

function init() {
    'use strict';
    document.getElementById('tt').onmouseenter = tRoll;
    document.getElementById('tt').onmouseleave = tRoll;
    document.getElementById('fb').onmouseenter = fRoll;
    document.getElementById('fb').onmouseleave = fRoll;
    document.getElementById('ig').onmouseenter = iRoll;
    document.getElementById('ig').onmouseleave = iRoll;
    document.getElementById('btn1').onclick = mobMenu;
}

window.onresize = showMenu;
window.onload = init;