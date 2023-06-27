const contacts = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" },
];
const buildTable = () => {
  const infoTable = document.createElement("table");
  infoTable.classList.add("info-table");
  infoTable.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>`;

  for (let contact of contacts) {
    console.log(contact);
    const infoRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.classList.add("name");
    nameCell.textContent = contact.name;
    const addressCell = document.createElement("td");
    addressCell.classList.add("address");
    addressCell.textContent = contact.address;
    infoRow.appendChild(nameCell);
    infoRow.appendChild(addressCell);
    infoTable.appendChild(infoRow);
  }
  document.body.appendChild(infoTable);
};

document.addEventListener("DOMContentLoaded", () => {
  buildTable();
});
const addData = (name, address) => {
  contacts.push({ name: name, address: address });
  document.body.innerHTML = "";
  buildTable();
};

document.addEventListener("DOMContentLoaded", () => {
  buildTable();
  addData("Karolin", "NY");
});
