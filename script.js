function setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorCSS.href = 'color-dark.css';
        fontcolor = 'white';
    } else {
        colorCSS.href = 'color-light.css';
        fontcolor = 'black';
    }
}

function setLayout() {
    var mobile = false;
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        //document.body.style.zoom = window.devicePixelRatio * window.innerWidth / 1100;
        let zoom = window.devicePixelRatio * window.innerWidth / 1100;
        if (window.devicePixelRatio * window.innerHeight / 1100 < zoom) {
            zoom = window.devicePixelRatio * window.innerHeight / 1100;
        }
        document.body.style.zoom = zoom;
        mobile = true;
    }
    if (window.innerHeight > window.innerWidth) {
        layoutCSS.href = 'layout-mobile.css';
        if (!(mobile) && window.innerWidth < 500) {
            document.body.style.zoom = 100 - (100 - window.innerWidth / 510 * 100) + "%";
        }
    } else {
        layoutCSS.href = 'layout-desktop.css';
    }
}


var colorCSS = document.createElement('link');
colorCSS.rel = ' stylesheet'
document.head.appendChild(colorCSS);
var layoutCSS = document.createElement('link');
layoutCSS.rel = ' stylesheet'
document.head.appendChild(layoutCSS);

const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = setTheme;
setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);
window.onresize = setLayout;


var bigTextarea = 0;
var fontcolor = 'black';
setTheme()
setLayout();

function showInput() {
    document.getElementById("input").style.visibility = "initial";
    document.getElementById("output").style.visibility = "hidden";
    document.getElementById("edittext").style.visibility = "hidden";
    document.getElementById("calculate").innerText = "Transpose";
    document.getElementById("input").focus();
    document.getElementById("input").style.color = fontcolor;
    document.getElementById("output").style.color = "grey";
    bigTextarea = 0;
}

function showOutput() {
    document.getElementById("input").style.visibility = "hidden";
    document.getElementById("output").style.visibility = "initial";
    document.getElementById("calculate").innerText = "🠄 Back to edit";
    document.getElementById("edittext").style.visibility = "initial";
    document.getElementById("edittext").style.visibility = "initial";
    document.getElementById("output").style.color = fontcolor;
    document.getElementById("input").style.color = "grey";
    bigTextarea = 1;
}

function showNotes() {
    document.getElementById("startChord").style.visibility = "initial";
    document.getElementById("endChord").style.visibility = "initial";
    document.getElementById("sTonesSelector").style.visibility = "hidden";
}

function showTones() {
    document.getElementById("startChord").style.visibility = "hidden";
    document.getElementById("endChord").style.visibility = "hidden";
    document.getElementById("sTonesSelector").style.visibility = "initial";
}


if (navigator.serviceWorker.controller) {
    console.log("Active service worker found");
} else {
    navigator.serviceWorker
        .register("serviceWorker.js", {
            scope: "./"
        })
        .then(function (reg) {
            console.log("Service worker registered");
        });
}
