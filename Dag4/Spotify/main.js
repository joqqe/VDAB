var songs;
var tbody = document.querySelector("main table tbody");

function getTrElement(song) {
    var tr = document.createElement("tr");
    var propToRender = ["index", "title", "album", "dateAdded", "duration"];

    for (const prop of propToRender) {
        var td = document.createElement("td");
        var text = document.createTextNode(song[prop]);
        td.appendChild(text);
        tr.appendChild(td);
    }

    return tr;
}

function renderTable() {
    // Remove all rows
    var rows = tbody.querySelectorAll("tr");
    for (const row of rows) {
        row.remove();
    }

    // Add new rows
    for (const song of songs) {
        var tr = getTrElement(song);
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


// Voeg de Web-API function Fetch toe.
// http://localhost:5000/json

// songs = ?;
// renderTable();
// listenToRowSelection();
