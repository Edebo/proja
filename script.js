
let form = document.getElementById('form')
let name = document.getElementById('name')
let ul = document.getElementById('classnames')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    newName =name.value
    
    let li = document.createElement('LI')

    //<li></li>

    //innerHTML and textContent

    li.textContent = newName

    ul.appendChild(li)
})