// api url: https://jsonplaceholder.typicode.com/users
var dataUrl= "https://jsonplaceholder.typicode.com/users"
var xhr = new XMLHttpRequest()
xhr.open('GET',dataUrl, true)
xhr.send()
xhr.onload = function(){
    var data = JSON.parse(this.responseText);
    for (let i = 0; i < data.length; i++) {
      let newPerson = document.createElement('li')
      newPerson.innerHTML = `${data[i].name} / ${data[i].company.name} / ${data[i].email} <button class='delete'>刪除</button>`
      document.querySelector('ol').appendChild(newPerson)
    }
    document.querySelector('ol').addEventListener('click', (e) => {
      if (e.target.innerHTML === '刪除') {
        delete_row(e.target)
      }
    })
}

function delete_row(e)
{
    e.parentNode.parentNode.removeChild(e.parentNode);
}