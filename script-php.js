document.getElementById('button').addEventListener('click', getName)

function getName() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'process.php', true)

    xhr.onload = function() {
        console.log(this.response);
    }

    xhr.send()
}