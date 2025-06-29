let students=[
    {name:"Анна", age:"20",group:"А"},
    {name:"Петро", age:"21",group:"Б"},
    {name:"Марія", age:"19",group:"А"},
    {name:"Іван", age:"22",group:"В"},
    {name:"Оля", age:"20",group:"Б"},

]

let tbody = document.querySelector("tbody");
students.forEach(student => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.group}</td>
  `;
    tbody.appendChild(row);
});
function changeBorder(element) {
    element.addEventListener("click", () => element.classList.add("border-blue"));
    element.addEventListener("blur", () => element.classList.remove("border-blue"));
}
changeBorder(document.querySelector('.search-input'));
changeBorder(document.querySelector('.group-select'));



let groupSelect = document.querySelector('.group-select');
let rows = document.querySelectorAll('tbody tr');

groupSelect.addEventListener('click', () => {
    let group = groupSelect.value;

    rows.forEach(row => {
        let rowGroup = row.cells[2].textContent;

        if (group === 'Усі групи') {
            row.style.display = 'table-row';
        } else if (rowGroup === group) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});

let searchInput = document.querySelector(".search-input");
let bodyRows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function () {
    let searchText = searchInput.value.toLowerCase();

    bodyRows.forEach(row => {
        let name = row.cells[0].textContent.toLowerCase();
        if (name.includes(searchText)) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
});

