
var outputEl = document.getElementById("output-target");

document.getElementById("page-title").addEventListener("click", function (event) {
  outputEl.innerHTML = "You clicked on the heading '${event.target.id}'";
  // console.log("event", event.target.innerHTML);
});