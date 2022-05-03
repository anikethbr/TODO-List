function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}
document.querySelector("h1").innerHTML = getDate();
document.querySelector("#add").onclick = function () {
    if (document.querySelector('#newItem').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector("#items").innerHTML +=
            `
    <div class="item">
    <input type="checkbox">
    <p>
    ${document.querySelector("#newItem").value}
    </p>
    </div>
    `
        document.querySelector("#newItem").value = "";
    }
};
