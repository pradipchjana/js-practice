const password = "876983786";
//console.log("your password is",password);
let checkPassword = "";
//console.log(password[0]);

for(let index = 0; index < password.length; index++){
  for(let indexForLoop2 = 0; indexForLoop2 < 10; indexForLoop2++ ){
        if((indexForLoop2 + "") === password[index]){
          checkPassword = checkPassword + indexForLoop2;
        }
        //console.log(indexForLoop2 + "");
  }
}

console.log("Your password is",checkPassword);
