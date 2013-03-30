var email64 = "ZmxvcmVudC5iZXJ2YXNAZ21haWwuY29tCg==";

window.onload = function() {
    document.getElementById("nav-"+document.getElementById("index").className).className = "active";
    document.getElementById("author-mail").href = 'mailto:'+decodeEmail(email64);
}

function decodeEmail(email) {
    return base64.decode(email);
}
