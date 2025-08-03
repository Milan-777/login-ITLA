const outbox = document.querySelector(".wrraper");
const loginform = document.querySelector(".loginform");
const signupform = document.querySelector(".signupform");

// function show(){
//     document.querySelector(".wrraper").style.transform = "scale(1)";
// }

/*alternative*/

function show() {
  outbox.style.height = "400px";
  loginform.style.left = "0px";
  signupform.style.left = "400px";

  outbox.style.transform = "scale(0)";
  outbox.style.transition = "transform .2s ease";
  setTimeout(() => {
    outbox.style.transform = "scale(1)";
  }, 300);



}

document.querySelector(".icon").addEventListener("click", () => {
  outbox.style.transform = "scale(0)";
  outbox.style.transition = "transform .3s ease";
});

document.querySelector(".signuplink a").addEventListener("click", () => {
  outbox.style.height = "450px";
  outbox.style.transition = "height .3s ease";
  loginform.style.left = "-400px";
  signupform.style.left = "0px";
});

document.querySelector(".loginlink a").addEventListener("click", () => {
  outbox.style.height = "400px";
  outbox.style.transition = "height .3s ease";
  loginform.style.left = "0px";
  signupform.style.left = "400px";
});
