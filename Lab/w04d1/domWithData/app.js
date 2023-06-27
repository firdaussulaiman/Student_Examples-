console.log("DOM with data");

// objected - oriented programming
// student
// - name: String
// - address: String

let students = [
  // memory address -> memory reference in our OS
  { name: "Firdaus", address: "Yishun" },
  { name: "Cai Yin", address: "Yishun" },
  { name: "Andy", address: "Tiong Bahru" },
  { name: "Azman", address: "Redhill" },
  { name: "Tino", address: "Marine Parade" },
];

// demo object const vs let and ES6 spread operator
/*
let studentClass = {
  name: "unit 1",
};
studentClass.name = "W4D1";
studentClass.week = "W4";
studentClass = {
  ...studentClass,
  nextUnit: "unit 2",
};
console.log("student class:", studentClass);
*/

// CRUD functionality
// Create;
const addStudentData = (name = "New Student", address = "Unavailable") => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  //students.push({ name, address }); //ES6 syntax ES2015 -> modern JS
  students = [...students, { name, address }]; // ES6 syntax -> spread operator
  buildStudentsTable();
};

// Read;
// Update;
// Delete;

const buildStudentsTable = () => {
  const infoTable = document.createElement("table");
  infoTable.classList.add("info-table");
  // add table header
  infoTable.innerHTML = `
    <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
        </tr>
    </thead>`;

  for (let student of students) {
    console.log(student);
    // add table content
    // create tr and td
    const infoRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    nameCell.classList.add("name");

    // create td for location
    const addressCell = document.createElement("td");
    addressCell.textContent = student.address;
    addressCell.classList.add("address");

    infoRow.appendChild(nameCell);
    infoRow.appendChild(addressCell);

    infoRow.addEventListener("click", () => {
      alert(`Hi! My name is ${student.name}.`);
    });

    // append row to table
    infoTable.appendChild(infoRow);
  }

  const container = document.querySelector(".container");
  container.appendChild(infoTable);
};

// listen to DOMContentLoaded event and pass in the event handler function to handle it
document.addEventListener("DOMContentLoaded", () => {
  buildStudentsTable();
  addStudentData("Henry", "Sembawang");
  addStudentData("Weisheng", "Singapore");
});
