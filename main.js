function generator() {
    const container = document.getElementById("gridContainer");
    const form = document.getElementById("start");
    const backButton = document.getElementById("backButton");

    const number = parseInt(document.getElementById("number").value);
    const fizz = parseInt(document.getElementById("fizz").value);
    const buzz = parseInt(document.getElementById("buzz").value);

    if (isNaN(number) || isNaN(fizz) || isNaN(buzz)) {
        alert("Inserisci numeri validi nei campi di testo.");
        return;
    }

    let cols = Math.floor(Math.sqrt(number));
    if (cols > 10) {
        cols = 10;
    }

    for (let n = 1; n <= number; n++) {
        let result = "";
        if (n % fizz === 0) {
            result += "Fizz";
        }
        if (n % buzz === 0) {
            result += "Buzz";
        }
        if (result === "") {
            result = n;
        }

        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(result);
        
        newDiv.appendChild(newContent);
        newDiv.classList.add("bg-blue-200", "w-24", "h-24", "flex", "justify-center", "items-center", "rounded");
        if (typeof result === "string") {
            newDiv.classList.add(result.toLowerCase());
        }
        if (result === n) {
            newDiv.classList.add("italic")
        }
        if (result === "Fizz") {
            newDiv.classList.add("bg-red-200", "font-medium");
            newDiv.classList.remove("bg-blue-200");
        }
        if (result === "Buzz") {
            newDiv.classList.add("bg-yellow-200", "font-medium");
            newDiv.classList.remove("bg-blue-200");
        }
        if (result === "FizzBuzz") {
            newDiv.classList.add("bg-green-200", "font-medium");
            newDiv.classList.remove("bg-blue-200");
        }
        

        container.appendChild(newDiv);
    }

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    backButton.style.display = "flex";
    form.style.display = "none";
}

document.getElementById("backButton").addEventListener("click", () => {
    history.back();
});