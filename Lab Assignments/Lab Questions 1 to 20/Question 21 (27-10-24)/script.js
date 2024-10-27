// Date Object Functions
let date = new Date();
document.write(`Date: ${date} <br>`);
document.write(`Year: ${date.getFullYear()} Month: ${date.getMonth() + 1} Day: ${date.getDate()} <br>`);
date.setFullYear(2025);
document.write(`Modified Year: ${date} <br><br>`);

// Math Object Functions
document.write(`Math.PI: ${Math.PI} <br> Square root of 16: ${Math.sqrt(16)} <br>`);
document.write(`Max of (5, 10, -2): ${Math.max(5, 10, -2)} <br>`);
document.write(`Random number (1 to 100): ${Math.floor(Math.random() * 100) + 1} <br>`);
document.write(`Sin of 45°: ${Math.sin(45 * (Math.PI / 180))} <br><br>`);

// String Object Functions
let str = "Hello, JavaScript!";
document.write(`Original: ${str} <br> Length: ${str.length} <br>`);
document.write(`Substring (7-17): ${str.substring(7, 17)} <br>`);
document.write(`Uppercase: ${str.toUpperCase()} <br>`);
document.write(`Includes 'JavaScript': ${str.includes("JavaScript")} <br>`);
document.write(`Split into words: ${str.split(" ")} <br>`);
