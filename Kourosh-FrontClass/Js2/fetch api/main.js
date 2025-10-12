var btn = document.getElementById('loadBtn');
var container = document.getElementById('container');


btn.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json();
        })

        .then(function (posts) {
            posts.slice(0, 5).forEach(function (post) {
                var div = document.createElement('div');
                div.className = "post";
                div.innerHTML = '<h3>' + post.title + '</h3><p>' + post.body + '</p>';
                container.appendChild(div);
            })
        })
        .catch(function () {
            alert("there is problem in feching data from server!")
        })
})