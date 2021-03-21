document.getElementById("button").addEventListener('click', loadusers)

function loadusers() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'users.json', true)
    xhr.onload = function(){
        if(this.status == 200){

            // console.log(this.response)
            // console.log(`${this.name}`)
            // console.log(user.name)
            var users = JSON.parse(this.responseText)
            
            var output = ''

            for(var i in users){
                output += '<ul>' +
                '<li>Name:' + users[i].name + '</li>' +
                '<li>ID:' + users[i].id + '</li>' +
                '<ul>'
            }

            document.getElementById('users').innerHTML = output
        }
    }
    xhr.send()
}