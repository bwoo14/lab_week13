const copyContainer = document.querySelector('.copy-container')
const addDivClick = document.querySelector('.original-container')



// USE VARIABLES INSTEAD OF JUST ONE


function addCopy(evt) {
    const copyTemplate = `
    <div>
        <p>${evt.target.innerHTML}<p>           
    </div>
    `
    console.log(evt.target.innerHTML)
    copyContainer.insertAdjacentHTML("afterbegin", copyTemplate)
}

addDivClick.addEventListener('click', addCopy)