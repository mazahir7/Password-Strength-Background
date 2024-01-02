"use strict";

const password = document.getElementById("password");
const background = document.getElementById("background");
const eye = document.getElementById("eye");
let isPasswordVisible = false;

function passwordStrength(password) {

  const passwordValue = password.split("");
  const upperAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const lowerAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const specialChars = "!@#$&*";
  let strength = 0;
  let upper = 0;
  let lower = 0;
  let special = 0;
  let numbers = 0;
  // console.log(passwordValue);
  passwordValue.forEach(ch => {

    upper < 3 && upperAlphabets.includes(ch) && upper++;
    lower < 3 && lowerAlphabets.includes(ch) && lower++;
    numbers < 3 && numbersList.includes(ch) && numbers++;
    special < 3 && specialChars.includes(ch) && special++;
    strength = ((upper + lower + special + numbers) * 10) / 100;
  });
  return strength;
}

password.addEventListener("input", function () {

  const passwordValue = password.value;


  const blurValue = passwordStrength(passwordValue);

  // console.log(passwordLength);

  // const blurValue = (passwordLength * 10) / 100;
  // console.log(blurValue);
  // background.style.filter = `blur(${blurValue}px)`;
  background.style.opacity = blurValue;
});


eye.addEventListener("click", function () {
  // <i class="fa-regular fa-eye"></i>
  eye.classList.toggle("fa-eye");

  isPasswordVisible = eye.classList.contains("fa-eye");
  // isPasswordVisible = !eye.classList.contains("fa-eye") && false;
  // console.log(isPasswordVisible);
  password.type = isPasswordVisible && "text";
  password.type = !isPasswordVisible && "password";
});

