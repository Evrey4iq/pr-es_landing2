function CountBox(){if(dateNow=new Date,amount=1e3*(60*(23-dateNow.getHours())*60+60*(59-dateNow.getMinutes())+(60-dateNow.getSeconds())),delete dateNow,amount<0){out="<div class='countbox-num'><div class='countbox-hours1'><span></span>0</div><div class='countbox-hours2'><span></span>0</div><div class='countbox-hours-text'></div></div><div class='countbox-space'></div><div class='countbox-num'><div class='countbox-mins1'><span></span>0</div><div class='countbox-mins2'><span></span>0</div><div class='countbox-mins-text'></div></div><div class='countbox-space'></div><div class='countbox-num'><div class='countbox-secs1'><span></span>0</div><div class='countbox-secs2'><span></span>0</div><div class='countbox-secs-text'></div></div>";for(var s=document.getElementsByClassName("countbox"),o=0;o<s.length;o++)s[o].innerHTML=out;setTimeout("CountBox()",1e4)}else{days=0,days1=0,days2=0,hours=0,hours1=0,hours2=0,mins=0,mins1=0,mins2=0,secs=0,secs1=0,secs2=0,out="",amount=Math.floor(amount/1e3),days=Math.floor(amount/86400),days1=days>=10?days.toString().charAt(0):"0",days2=days>=10?days.toString().charAt(1):days.toString().charAt(0),amount%=86400,hours=Math.floor(amount/3600),hours1=hours>=10?hours.toString().charAt(0):"0",hours2=hours>=10?hours.toString().charAt(1):hours.toString().charAt(0),amount%=3600,mins=Math.floor(amount/60),mins1=mins>=10?mins.toString().charAt(0):"0",mins2=mins>=10?mins.toString().charAt(1):mins.toString().charAt(0),amount%=60,secs=Math.floor(amount),secs1=secs>=10?secs.toString().charAt(0):"0",secs2=secs>=10?secs.toString().charAt(1):secs.toString().charAt(0),out="<div class='countbox-num'><div class='countbox-hours1'><span></span>"+hours1+"</div><div class='countbox-hours2'><span></span>"+hours2+"</div><div class='countbox-hours-text'>Годин</div></div><div class='countbox-space'></div><div class='countbox-num'><div class='countbox-mins1'><span></span>"+mins1+"</div><div class='countbox-mins2'><span></span>"+mins2+"</div><div class='countbox-mins-text'>Хвилин</div></div><div class='countbox-space'></div><div class='countbox-num'><div class='countbox-secs1'><span></span>"+secs1+"</div><div class='countbox-secs2'><span></span>"+secs2+"</div><div class='countbox-secs-text'>Секунд</div></div>";for(s=document.getElementsByClassName("countbox"),o=0;o<s.length;o++)s[o].innerHTML=out;setTimeout("CountBox()",1e3)}}$(document).ready((function(){CountBox(),$(".slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:2e3}),$(".slider2").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:2e3})}));