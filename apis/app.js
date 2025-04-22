
function GetInfo() {
    // Getting the value of the input field with id "username"
    let user = document.getElementById("username").value;
    // Checking if the input field is empty
    if (user.length == 0) {
        alert("Please enter a username")
        return
    }
    // Fetching data from the GitHub API using the entered username
    fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => {
            // Displaying the fetched data in the HTML element
            //console.error(data);
            //console.error(data.bio);
            document.getElementById("fullName").innerHTML = data.name;
            document.getElementById("bio").innerHTML = data.bio;
            document.getElementById("profilePicture").src = data.avatar_url;
            document.getElementById("homeUrl").innerHTML = "<a href='"+data.html_url+"' target=_blank>"+data.html_url+"</a>";
            //document.getElementById("info").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error(error);
            alert("Error fetching data from GitHub API");
        });
}