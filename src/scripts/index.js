import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

/* let promiseOfModal = new Promise((resolve) => {
    window.setTimeout(() => {
        resolve(modal)
    }, (1000 * 1));
});

promiseOfModal.then((val) => {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}) */

async function popModal(modal) {
    const waitSeconds = await setTimeout(async () => {
        const message = await console.log("User has been on the page for 60 seconds");
        modal.style.display = "block";
    }, 60 * 1000);
}

popModal(modal);

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

const continueButton = document.getElementById("continue");
continueButton.addEventListener("animationend", () => {
    continueButton.style.backgroundColor = "orange";
    alert("Continue to subscribe");
});