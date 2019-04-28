window.onload = function() {
    // dynamically add e-mail to avoid plain crawling
    var emailElement = document.querySelector("#email-link");
    emailElement.href = "mailto:me@vnbrs.com";
    emailElement.innerHTML = "me@vnbrs.com";
};