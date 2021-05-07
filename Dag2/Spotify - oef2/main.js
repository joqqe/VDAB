var songTitles = document.querySelectorAll("table tbody tr td");
songTitles[0].textContent = "K3";


var songRows = document.querySelectorAll("table tbody tr");
songRows[0].classList.add("active");
songRows[1].classList.remove("active");