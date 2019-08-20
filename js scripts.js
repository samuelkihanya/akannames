efunction getAkanName () {
    let yearofbirth= document.getElementById("year-input").Value;
    let monthofbirth= document.getElementById("month-nput")Value;
    let dayofbirth= document.getElementById("day-input")Value;



    while(i<genders.length){
        if()genders[i]checked)
           var mygendervalue = genders[i].Value;
           i++
        }
         console.log(mygendervalue);

         function monthvalidator() {
             if(monthofbirth <1 || monthofbirth> 12){
                 return false;
               } else {
                   return true;
             }
         }

         function dayvalidator(){
             if (monthofbirth=== 2 && Number(yearofbirth)%===0){
                 if (dayofbirth> 28 ||dayofbirth<1){
                     return false;
                 }else if (monthofbirth===2 && dayofbirth > 29) {
                     return false;
                 }else if (monthofbirth===2 && dayofbirth > 1){
                     return false;

                 }

             }
         }
}