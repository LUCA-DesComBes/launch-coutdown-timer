const secondTimer = document.getElementById("second");
const minuteTimer = document.getElementById("minute");
const hourTimer = document.getElementById("hour");
const dayTimer = document.getElementById("day");
const containerDiv = document.querySelector(".container");
const audio = document.querySelector("audio");

let second = 10;
let minute = 0;
let hour = 0;
let day = 0;

let timer = setInterval(() => {
	second--;

	if (second < 0) {
		second = 59;
		minute--;
	}
	if (minute < 0) {
		minute = 59;
		hour--;
	}
	if (hour < 0) {
		hour = 23;
		day--;
	}

	dayTimer.textContent = day < 10 ? "0" + day : day;

	hourTimer.textContent = hour < 10 ? "0" + hour : hour;

	minuteTimer.textContent = minute < 10 ? "0" + minute : minute;

	secondTimer.textContent = second < 10 ? "0" + second : second;

	if (minute === 0 && second === 0 && hour === 0 && day === 0) {
        let para = document.createElement("p");
        para.textContent = "CLIQUE ICI POUR LA SURPRISE!"
        para.classList.add("bjr")
        containerDiv.appendChild(para)
	document.body.addEventListener("click", ()=> {
        para.textContent = ""
        audio
        .play()
        .catch((error) =>
            console.error("Erreur lors de la lecture de l'audio :", error)
        );
    })
		clearInterval(timer);
	}
}, 1000);

for (const id of ["facebook", "pinterest", "instagram"]) {
	const element = document.getElementById(id);

	element.addEventListener("mouseover", () => {
		element.src = `./asset/${id}-hover.svg`;
	});

	element.addEventListener("mouseout", () => {
		element.src = `./asset/${id}.svg`;
	});
}
