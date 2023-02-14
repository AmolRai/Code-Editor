const htmlCode = document.querySelector(".html-editor");
const cssCode = document.querySelector(".css-editor");
const jsCode = document.querySelector(".js-editor");
const output = document.querySelector("#output");

let html = "", css = "", js = "";
htmlCode.oninput = function () {
    html = this.value;
}

cssCode.oninput = function () {
    css = this.value;
}

jsCode.oninput = function () {
    js = this.value;
}

document.querySelector(".run-button").addEventListener("click", function () {
    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
})

// responsive

const btnHTML = document.querySelector(".btn-html");
const btnCSS = document.querySelector(".btn-css");
const btnJS = document.querySelector(".btn-js");

const htmlEditor = document.querySelector(".editor-one");
const cssEditor = document.querySelector(".editor-two");
const jsEditor = document.querySelector(".editor-three");

btnHTML.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnHTML.style.backgroundColor = "#42e9b2";
    btnHTML.style.color = "black";
    btnCSS.style.backgroundColor = "";
    btnCSS.style.color = "white";
    btnJS.style.backgroundColor = "";
    btnJS.style.color = "white";

    htmlEditor.style.display = "flex";
    cssEditor.style.display = "none";
    jsEditor.style.display = "none";
    output.style.height = "";
})

btnCSS.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnCSS.style.backgroundColor = "#42e9b2";
    btnCSS.style.color = "black";
    btnHTML.style.backgroundColor = "";
    btnHTML.style.color = "white";
    btnJS.style.backgroundColor = "";
    btnJS.style.color = "white";

    cssEditor.style.display = "flex";
    htmlEditor.style.display = "none";
    jsEditor.style.display = "none";
    output.style.height = "";
})

btnJS.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnJS.style.backgroundColor = "#42e9b2";
    btnJS.style.color = "black";
    btnHTML.style.backgroundColor = "";
    btnHTML.style.color = "white";
    btnCSS.style.backgroundColor = "";
    btnCSS.style.color = "white";

    jsEditor.style.display = "flex";
    cssEditor.style.display = "none";
    htmlEditor.style.display = "none";
    output.style.height = "";
})

const btnResult = document.querySelector(".btn-result");
btnResult.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    output.style.height = "100vh";
})
