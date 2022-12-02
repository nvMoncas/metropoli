window.onload = function() {
    var scriptfooter1 = document.createElement("script");
    scriptfooter1.src = "../../assets/js/main.js";

    var scriptfooter2 = document.createElement("script");
    scriptfooter2.src = "../../assets/js/jquery-3.6.1.min.js";

    var scriptfooter3 = document.createElement("script")
    scriptfooter3.src = "../../assets/js/jquery.fancybox.min.js";

    var scriptfooter4 = document.createElement("script")
    scriptfooter4.src = "../../assets/js/bootstrap.bundle.min.js";

    var linkfooter = document.createElement("link")
    linkfooter.rel = "stylesheet";
    linkfooter.type = "text/css";
    linkfooter.href = "../../assets/css/jquery.fancybox.min.css"

    var divtest = document.getElementById("footerelementsjs");
    divtest.appendChild(scriptfooter1);
    divtest.appendChild(scriptfooter2);
    divtest.appendChild(scriptfooter3);
    divtest.appendChild(scriptfooter4);
    divtest.appendChild(linkfooter);
}
