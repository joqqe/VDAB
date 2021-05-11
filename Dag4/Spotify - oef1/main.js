var songs;
// var songs = [
//     new PlaylistItem(1, "Title A", "This is an album", "May 10, 2021", "1:23"),
//     new PlaylistItem(2, "Title B", "This is an album", "May 10, 2021", "4:56"),
//     new PlaylistItem(3, "Title C", "This is an album", "May 10, 2021", "7:89")
// ];
var tbody = document.querySelector("main table tbody");

function PlaylistItem(index, title, album, dateAdded, duration) {
    this.index = index;
    this.title = title;
    this.album = album;
    this.dateAdded = dateAdded;
    this.duration = duration;
    this.getTrElement = function() {
        var tr = document.createElement("tr");
        var propToRender = ["index", "title", "album", "dateAdded", "duration"];

        for (const prop of propToRender) {
            var td = document.createElement("td");
            var text = document.createTextNode(this[prop]);
            td.appendChild(text);
            tr.appendChild(td);
        }

        return tr;
    }
}

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

fetch('http://localhost:5000/json')
    .then(response => response.json())
    .then(data => {
        songs = data;
        renderTable();
        listenToRowSelection();
    });
