const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const findUsInput = document.getElementById("findUs");
const newsInput = document.getElementById("news");
const messageInput = document.getElementById("message");

const displaySnackBar = (color, content) => {
    const snackBar = document.getElementById("snackBar");
    snackBar.className += " show";
    snackBar.style.backgroundColor = color;
    snackBar.innerHTML = content;
    setTimeout(function() {
        snackBar.classList.remove("show");
    }, 1000);
};
contactForm.addEventListener("submit", async(event) => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const findUs = findUsInput.value;
    const news = newsInput.value;
    const message = messageInput.value;

    let error = 0;
    if (!name || !email || !findUs || !news || !message) {
        displaySnackBar("#ff8080", "Fiels can not be empty!");
        error = 1;
    }
    if (name.length < 4) {
        error = 1;
        displaySnackBar("#ff8080", "Enter a valid name!");
    }

    if (error === 0) {
        const data = { name, email, findUs, news, message };
        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await res.json();
            if (resData.data) {
                displaySnackBar("green", resData.data);
            } else {
                displaySnackBar("#ff8080", resData.error);
            }
        } catch (err) {
            displaySnackBar("#ff8080", "Failed to send!");
        }
    }
});