var songs = ["Title A", "Title B", "Title C"];
var tbody = document.querySelector("main table tbody");

function renderTable() {
    // Remove all rows
    var rows = tbody.querySelectorAll("tr");
    for (const row of rows) {
        row.remove();
    }

    // Add new rows
    for (const song of songs) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var text = document.createTextNode(song);

        td.appendChild(text);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

function rowSelect(e) {
    // Deselecting every selected rows
    var activeRows = tbody.querySelectorAll("tr.active");
    for (const row of activeRows) {
        row.classList.remove("active");
    }

    // Select current row
    e.currentTarget.classList.add("active");
}

function listenToRowSelection() {
    // Add an eventlistener to every row
    var rows = tbody.querySelectorAll("tr");
    for (const row of rows) {
        row.addEventListener("click", rowSelect);
    }
}

renderTable();
listenToRowSelection();
