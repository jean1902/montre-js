
 setInterval( DisplayClock , 500);

function DisplayClock(){
    var time = new Date();
    var hours = time.getHours();
   var minutes = time.getMinutes();
   console.log(hours)
   var secondes  = time.getSeconds();
    if( hours >24){
        hours = hours - 12 
    } else if(hours == 0){
        hours = 12 
    }
     else if( hours <  10){
        hours = '0'+ hours;
    }
    else if( minutes <  10){
        minutes = '0'+ minutes;
    }
    else if( hours <  10){
       secondes = '0'+ secondes;
    }
    
    document.getElementById('clock').innerHTML =` ${hours} : ${minutes} : ${secondes} `
   

}
