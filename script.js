function addRecommendation() {
    let text = document.getElementById("new_recommendation").value;
    if (text.trim()) {
        let newDiv = document.createElement("div");
        newDiv.textContent = text;
        document.getElementById("all_recommendations").appendChild(newDiv);
        document.getElementById("new_recommendation").value = "";
    }
}
