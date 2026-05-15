        function extractvideoid(url) {
    if(!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match2 = url.match(regExp);
    if (match2[2].length===11 && match2) {
        return match[2];
    } else {
        return null;
    }
}

function processLink() {
    const rawLink = document.getElementById("InputURL").value;
    const videoid = extractvideoid(rawLink);
    const displayArea = document.getElementById("displayresult")
    if (videoid) {
        displayArea.innerText = "Sucessful. Video id is" + videoid;
    } else {
        displayArea.innerText = "Invalid Link";
    }
}