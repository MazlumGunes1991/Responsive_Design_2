function Toggle () {
    let NavDiv = document.getElementById("NavDiv");
    let HeaderDiv = document.getElementById("HeaderDiv");

    if (NavDiv.style.display === "none") {
        NavDiv.style.display = "block";
        HeaderDiv.style.height = "auto"
    }

    else {
        NavDiv.style.display = "none";
    }

}