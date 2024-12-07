const body = document.body;
const btn = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme") || "dark-mode";
body.className = theme;
btn.textContent = theme === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";
btn.onclick = () => {
    const isDark = body.classList.toggle("dark-mode");
    body.className = isDark ? "dark-mode" : "light-mode";
    btn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
    localStorage.setItem("theme", isDark ? "dark-mode" : "light-mode");
};



const scrollTopButton = document.getElementById("scroll-top");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


function saveData() {
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        ratings: [
            parseInt(document.getElementById('q1').value),
            parseInt(document.getElementById('q2').value),
            parseInt(document.getElementById('q3').value),
            parseInt(document.getElementById('q4').value),
            parseInt(document.getElementById('q5').value),
        ],
    };

    console.log(formData); // Rezultatas konsolėje

    displayData(formData);
}
function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Vardas Pavardė (el. paštas): ${data.name} ${data.surname} (${data.email})</p>
        <p>Telefonas: ${data.phone}</p>
        <p>Adresas: ${data.address}</p>
    `;

    // Apskaičiuojamas vidurkis
    const average = data.ratings.reduce((sum, r) => sum + r, 0) / data.ratings.length;

    // Nustatoma spalva pagal vidurkio reikšmę
    let avgClass = '';
    if (average <= 4) {
        avgClass = 'red'; // Vidurkis 0-4: raudona
    } else if (average <= 7) {
        avgClass = 'orange'; // Vidurkis 4-7: oranžinė
    } else {
        avgClass = 'green'; // Vidurkis 7-10: žalia
    }

    // Pridedama vidurkio reikšmė su spalva
    resultDiv.innerHTML += `
        <p>Vidurkis: <span class="rating ${avgClass}">${average.toFixed(2)}</span></p>
    `;
}