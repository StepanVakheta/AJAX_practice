document.getElementById('button').addEventListener('click', getName)
document.getElementById('getform').addEventListener('submit', getName)
document.getElementById('postform').addEventListener('submit', postName)

function getName(e) {
    
    e.preventDefault()

    var name = document.getElementById('nameget').value

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'process.php?name=' + name, true)

    xhr.onload = function() {
        console.log(this.response);
    }

    xhr.send()
}

function postName(e) {
    
    e.preventDefault()

    var name = document.getElementById('namepost').value
    var params = 'name=' + name

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'process.php', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    xhr.onload = function() {
        console.log(this.response);
    }

    xhr.send(params)
}