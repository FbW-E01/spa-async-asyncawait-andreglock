import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

function waitSeconds() {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(modal)
        }, (1000 * 60));
    })
};

async function popModal() {
    const result = await waitSeconds();
    console.log("User has been on the page for 60 seconds");
    result.style.display = "block";
}

popModal();


// Wrong solution
/* async function popModal(modal) {
    try {
        const waitSeconds = await setTimeout(async () => {
            const message = await console.log("User has been on the page for 60 seconds");
            modal.style.display = "block";
        }, 60 * 1000);
    }
    catch {
        console.log("error");
    }
}

popModal(modal); */

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

const continueButton = document.getElementById("continue");
// Non promise solution
/* continueButton.addEventListener("animationend", () => {
    continueButton.style.backgroundColor = "orange";
    alert("Continue to subscribe");
}); */

function alertContinue() {
    return new Promise((resolve) => {
        resolve(continueButton);
    });
}

async function animationEnd () {
    const button = await alertContinue();
    button.addEventListener("animationend", () => {
        button.style.backgroundColor = "orange";
        alert("Continue to subscribe");
    });
}

animationEnd();