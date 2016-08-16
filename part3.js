function generateFaces() {
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    for (i = 0; i < numberOfFaces; ++ i) {
        project_kat = document.createElement("img");
        project_kat.src = "pkatarina.jpg";
        project_kat.style.top = Math.floor(Math.random() * 401) + "px";
        project_kat.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(project_kat);
    }
    var theRightSide = document.getElementById("rightSide");
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
}