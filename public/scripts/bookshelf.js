window.onload = function () {
    const elements = document.getElementsByClassName("menu-icon")

    for (const element of elements) {
        element.addEventListener('click', count);
    }
}

function count() {
  console.log("BBBB")
}