// Clone 
const copyContainer = document.querySelector('.copy-container')
const addDivClick = document.querySelector('.original-container')

function addCopy(evt) {
    const copyTemplate = `
    <div class='copy'>
        <p>${evt.target.innerHTML}</p>           
    </div>
    `
    copyContainer.insertAdjacentHTML("afterbegin", copyTemplate)
}

addDivClick.addEventListener('click', addCopy)


// Delete

const clearButton = document.querySelector('button')


function clearCopies(evt) {
    console.log(evt)
    const copies = document.querySelectorAll('.copy')
    console.log(copies)
    
    for (copy of copies) {
        copy.remove()
    }
}

clearButton.addEventListener('click', clearCopies)