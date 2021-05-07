function rowSelect(e) {
    var rows = document.querySelectorAll("table tbody tr.active");
    for (const row of rows) {
        row.classList.remove("active");
    }

    e.currentTarget.classList.add("active");
}

var songs = ["Title1", "Title2"];

function renderTable() {
    // Remove all rows
    var rows = document.querySelectorAll("table tbody tr");
    for (const row of rows) {
        row.remove();
    }

    // Add new rows
    var tbody = document.querySelector("table tbody");
    for (const song of songs) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var text = document.createTextNode(song);

        tr.onclick = rowSelect;

        td.appendChild(text);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

renderTable();
