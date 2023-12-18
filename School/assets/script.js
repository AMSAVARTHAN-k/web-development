let isExpanded = false;
function toggleHeight() {
  const bgs = document.getElementById("bgs");
  if (isExpanded) {
    bgs.style.height = "822px";
  } else {
    bgs.style.height = "1000px";
  }
  isExpanded = !isExpanded;
}

function fun() {
  window.alert("hello");
}
