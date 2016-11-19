//A-Z 65-90
//a-z 97-122

function cipher() {
    var text = document.getElementById("text").value;
    var index = parseInt(document.getElementById("index").value);
    var textArray = [];
    var textCharAscCode;

    if (index <= 0) {
        alert("Index must be greater than 0");
    } else {
    
        for (var i = 0; i < text.length; i++) {        
            textCharAscCode = text.charCodeAt(i);
            
            if (textCharAscCode >= 65 && textCharAscCode <= 90) {
                textArray[i] = String.fromCharCode((text.charCodeAt(i) - 65 + index) % 26 + 65);
            } else if (textCharAscCode >= 97 && textCharAscCode <= 122) {
                textArray[i] = String.fromCharCode((text.charCodeAt(i) - 97 + index) % 26 + 97);
            } else {
                textArray[i] = text[i];
            }
        }
        
        document.getElementById("text").value = (textArray.join(""));
    }
};

function decipher() {
    var text = document.getElementById("text").value;
    var index = parseInt(document.getElementById("index").value);
    var textArray = [];
    var textCharAscCode;

    if (index <= 0) {
        alert("Index must be greater than 0");
    } else {
    
        for (var i = 0; i < text.length; i++) {        
            textCharAscCode = text.charCodeAt(i);
            
            if (textCharAscCode >= 65 && textCharAscCode <= 90) {
                textArray[i] = String.fromCharCode((text.charCodeAt(i) - 90 - index) % 26 + 90);
            } else if (textCharAscCode >= 97 && textCharAscCode <= 122) {
                textArray[i] = String.fromCharCode((text.charCodeAt(i) - 122 - index) % 26 + 122);
            } else {
                textArray[i] = text[i];
            }
        }
        
        document.getElementById("text").value = (textArray.join(""));
    }
};