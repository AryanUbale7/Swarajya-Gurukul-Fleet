// students.js - Central Student Database
const firstNames = ["Aarav", "Vihaan", "Aditya", "Sai", "Arjun", "Anaya", "Diya", "Ira", "Saanvi", "Riya"];
const lastNames = ["Sharma", "Patel", "Verma", "Mehta", "Khan", "Joshi", "Deshmukh"];
const areas = ["Mira Road", "Bhayandar East", "Kashimira", "Golden Nest", "Uttan"];

const globalStudentData = [];
for(let i = 1; i <= 190; i++) {
    const busNum = (i % 5) + 1; // 190 students divided into 5 buses
    globalStudentData.push({
        id: 1000 + i,
        name: firstNames[i % 10] + " " + lastNames[i % 7],
        bus: "B-0" + busNum,
        area: areas[busNum - 1],
        grade: "5th",
        photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`
    });
}