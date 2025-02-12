window.onload = function () {
    const elements = document.getElementsByClassName("edit-button")

    for (const element of elements) {
        element.addEventListener('click', count);
    }
}

function count() {
  console.log("BBBB")
}