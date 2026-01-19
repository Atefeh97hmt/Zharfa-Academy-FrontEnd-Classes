var btn = document.getElementById('btn');
var list = document.getElementById('list');


btn.addEventListener('click', function () {

    fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            data.forEach(function (item) {
                var li = document.createElement('li');
                li.textContent = item.name + "-" + item.cal + "calories";
                list.appendChild(li)
            })


        })
})