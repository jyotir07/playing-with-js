// Array of languages
const languages = [
  { name: "English", greeting: "Happy New Year" },
  { name: "Spanish", greeting: "Feliz Año Nuevo" },
  { name: "French", greeting: "Bonne année" },
  { name: "German", greeting: "Frohes neues Jahr" },
  { name: "Italian", greeting: "Felice anno nuovo" }
];

// Current language index
let currentLanguageIndex = 0;

// Function to change the language
function changeLanguage() {
  currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  displayGreeting();
}

// Function to display the greeting
function displayGreeting() {
  const currentLanguage = languages[currentLanguageIndex];
  console.log(currentLanguage.greeting);
}

// Initial display
displayGreeting();

// Button element
const button = document.createElement("button");
button.textContent = "Change Language";
button.addEventListener("click", changeLanguage);
document.body.appendChild(button);