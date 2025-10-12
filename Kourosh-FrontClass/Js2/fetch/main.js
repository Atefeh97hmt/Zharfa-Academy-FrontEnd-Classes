var btn = document.getElementById('btn');
var list = document.getElementById("list");

// fetch("url")

// .then(function(response){
//     return response.json()
// })

// .then (function (data){
//     console.log(data)
// })

btn.addEventListener('click', function () {
    fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(function (item) {
                var li = document.createElement('li');
                li.textContent = item.name + "-" + item.Cal + "calories";
                list.appendChild(li)
            })
        })
        .catch(function () {
            alert('error in feching data!')
        })
})

