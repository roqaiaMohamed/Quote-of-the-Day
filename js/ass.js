
var user = [


      "\"It's not what happens to you, but how you react to it that matters.\" --Epictetus" ,
      "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy  "  ,
      "\"Resentment is like drinking poison and waiting for your enemies to die.\""  
   


];





function sendAll(){

   console.log(user.length)

   //  var userTall  = user.length ;


   var total= Math.random()* user.length
//    document.getElementById("momu").innerHTML=total

   if (total < 1.4) {
   document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\""
    document.getElementById("momo").innerHTML= " --Epictetus"
   }

   else if (total< 1.5) {

   document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\"" 
   document.getElementById("momo").innerHTML= "--Wayne Gretzy "

}
else if (total < 1.6){
   document.getElementById("momu").innerHTML= "\"The best revenge is massive success.\""  

   document.getElementById("momo").innerHTML= "--Frank Sinatra"

}

else if (total < 1.7) {

   document.getElementById("momu").innerHTML= "\" Do not take life too seriously. You will not get out alive.\"" 
   document.getElementById("momo").innerHTML= "--Elbert Hubbard "
}

   else if (total < 1.8) {

   document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\"" 
   document.getElementById("momo").innerHTML= "--Wayne Gretzy "
}

else {
   document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

   document.getElementById("momo").innerHTML= " --Nelson Mandela"

}

// else if (total < 1.7 ) {
//    document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\""
//     document.getElementById("momo").innerHTML= " --Epictetus"
//    }
//    else if (total< 1.8) {

//       document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\"" 
//       document.getElementById("momo").innerHTML= "--Wayne Gretzy "
   
// }
// else if (total < 1.10){
//    document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

//    document.getElementById("momo").innerHTML= " "

// }
   
//    else if (total < 1.8 ){
//     document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

//    }

   
//    else if (total< 1.9) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//    else if (total < 1.10) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//   else if (total < 1.11 ) {
//     document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\"  --Epictetus"
//     // document.getElementById("momo").innerHTML= " --Epictetus"
//    }

//    else if (total < 1.12){
//     document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

//    }

//    else if (total < 1.13 ) {
//     document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\"  --Epictetus"
//     // document.getElementById("momo").innerHTML= " --Epictetus"
//    }

//    else if (total < 1.14 ){
//     document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

//    }

   
//    else if (total< 1.15) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//    else if (total < 1.16) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//   else if (total < 1.17) {
//     document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\"  --Epictetus"
//     // document.getElementById("momo").innerHTML= " --Epictetus"
//    }
//    else if (total < 2.7 ) {
//     document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\"  --Epictetus"
//     // document.getElementById("momo").innerHTML= " --Epictetus"
//    }

//    else if (total < 2.8 ){
//     document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

//    }

   
//    else if (total< 2.9) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//    else if (total < 2.10) {

//    document.getElementById("momu").innerHTML= "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy" 
// //    document.getElementById("momo").innerHTML= "--Wayne Gretzy "

// }

//   else if (total < 2.11 ) {
//     document.getElementById("momu").innerHTML= "\"It's not what happens to you, but how you react to it that matters.\"  --Epictetus"
//     // document.getElementById("momo").innerHTML= " --Epictetus"
//    }



   // else {
   //   document.getElementById("momu").innerHTML= "\"Resentment is like drinking poison and waiting for your enemies to die.\""  

   // }












// for (var i=0 ; i < user.length ; i++) {

//     console.log(user[i]);
//     document.getElementById("momu").innerHTML+=( Math.random( user[i]));
// }

// if(user[i] == userLenght){
//     document.getElementById("momu").innerHTML+=( "\"It's not what happens to you, but how you react to it that matters.\" --Epictetus" );
// }
// else if (user[i] == 2){
//     document.getElementById("momu").innerHTML+=(  "\"You miss 100% of the shots you don't take.\" --Wayne Gretzy  " );
    
// }
// else {
//     document.getElementById("momu").innerHTML+=(  "\"Resentment is like drinking poison and waiting for your enemies to die.\"");

// }
}

