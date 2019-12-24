'use strict';
const hijackGoogleLogo = function () {
  let googleLogo = document.getElementById("hplogo");
  googleLogo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
  googleLogo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg";
  return googleLogo;
}
hijackGoogleLogo();