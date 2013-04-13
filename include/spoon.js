var email64 = "ZmxvcmVudC5iZXJ2YXNAZ21haWwuY29tCg==";
var phone64 = "KygzMykgNiA4MSA4NCAzOSAzNAo=";

window.onload = function() {
    document.getElementById("nav-"+document.getElementById("index").className).className = "active";
    document.getElementById("author-mail").href = 'mailto:'+decode64(email64);
}

function decode64(obj) {
    return base64.decode(obj);
}
