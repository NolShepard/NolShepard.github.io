// api url
const api_url = "https://nolandshepard.com/movies/movies.json";
var data;
// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data, search_input = "") {
    let tab = `<thead>
        <td onclick="sortMovies(0)">Title</td>
        <td onclick="sortMovies(1)">Disc</td>
        <td onclick="sortMovies(2)">Type</td>
        <td onclick="sortMovies(3)">Category</td>
        <td onclick="sortMovies(4)">Producer</td>
        </thead>`;
    // Loop to access all rows
    for (let r of data) {
        if (search_input == "") {
            tab += `<tr>
    <td>${r.Title} </td>
    <td>${r.Disc}</td>
	<td>${r.Type}</td>
	<td>${r.Category}</td>		
    <td>${r.Producer}</td>	
</tr>`;
        } else if (r.Title.toLowerCase().includes(search_input)) {
            tab += `<tr>
	<td>${r.Title} </td>
	<td>${r.Disc}</td>
	<td>${r.Type}</td>
	<td>${r.Category}</td>		
    <td>${r.Producer}</td>	
</tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("movies").innerHTML = tab;
}

// JavaScript code
function search_movies() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    show(data, input);
}

function sortMovies(n) {
    switch (n) {
        case 0:
            data.sort(function (a, b) {
                var x = a.Title.toLowerCase();
                var y = b.Title.toLowerCase();
                return x.localeCompare(y);
            });
            show(data);
            break;
        case 1:
            data.sort(function (a, b) {
                var x = a.Disc.toLowerCase();
                var y = b.Disc.toLowerCase();
                return x.localeCompare(y);
            });
            show(data);
            break;
        case 2:
            data.sort(function (a, b) {
                var x = a.Type.toLowerCase();
                var y = b.Type.toLowerCase();
                return x.localeCompare(y);
            });
            show(data);
            break;
        // case 3:
        //     data.sort(function (a, b) {
        //         var x = a.Category.toLowerCase();
        //         var y = b.Category.toLowerCase();
        //         return x.localeCompare(y);
        //     });
        //     show(data);
        //     break;
        // case 4:
        //     data.sort(function (a, b) {
        //         var x = a.Producer.toLowerCase();
        //         var y = b.Producer.toLowerCase();
        //         return x.localeCompare(y);
        //     });
        //     show(data);
        //     break;
        default:
            break;
    }
}
