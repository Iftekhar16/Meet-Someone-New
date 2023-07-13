function loadUser(){
    fetch('https://randomuser.me/api/?gender=male')
    .then(res => res.json())
    .then(data => displayUser(data));
}

function displayUser(data){
    console.log(data.results[0])
    
    document.getElementById("picture").src = data.results[0].picture.large;
    document.getElementById("name").innerText = data.results[0].name.first + ' ' +data.results[0].name.last;
    // document.getElementById("age").innerText = data.results[0].dob.age;
    document.getElementById("email").innerText = data.results[0].email;
    document.getElementById("location").innerText = data.results[0].location.city + ', ' + data.results[0].location.country;
}

loadUser();