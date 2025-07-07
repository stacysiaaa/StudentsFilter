let students = [
    {name: "Анна", age: "20", group: "А"},
    {name: "Петро", age: "21", group: "Б"},
    {name: "Марія", age: "19", group: "А"},
    {name: "Іван", age: "22", group: "В"},
    {name: "Оля", age: "20", group: "Б"},
];

let tbody = document.querySelector("tbody");
let searchInput = document.querySelector(".search-input");
let groupSelect = document.querySelector(".group-select");


function renderTable(students) {
    tbody.innerHTML = "";
    students.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.group}</td>
        `;
        tbody.appendChild(row);
    });
}

renderTable(students);

function filterData() {
    let searchText = searchInput.value.toLowerCase();
    let selectedGroup = groupSelect.value;

    let filtered = students.filter(student => {
        let nameMatch = student.name.toLowerCase().includes(searchText);
        let groupMatch = selectedGroup === "" || student.group === selectedGroup;
        return nameMatch && groupMatch;
    });

    renderTable(filtered);
}


searchInput.addEventListener("input", filterData);
groupSelect.addEventListener("change", filterData);

function changeBorder(element) {
    element.addEventListener("focus", () => element.classList.add("border-blue"));
    element.addEventListener("blur", () => element.classList.remove("border-blue"));
}

changeBorder(searchInput);
changeBorder(groupSelect);
