function rowSelect(e) {
    var rows = document.querySelectorAll("table tbody tr");
    for (const row of rows) {
        row.classList.remove("active");
    }

    e.currentTarget.classList.add("active");
}
