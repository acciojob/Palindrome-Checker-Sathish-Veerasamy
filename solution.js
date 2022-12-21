// complete the given function

function palindrome(str){
 
   var i,j;
   i=0;
   j=str.length-1;
//meat //refer
   while(i<j){
    if(str[i].toLowerCase()===str[j].toLowerCase()){
        i++;
        j--;
        if(i===j){
            return true;
        }
    }else{
        return false;
    }
   }


}

module.exports = palindrome
