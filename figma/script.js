const dropdown =  document.querySelector('.dropdownimg')
const drop = document.querySelector('.drop')
const dropimg = document.querySelector('.dropimg')
dropdown.addEventListener('click',()=>
{
    if(dropimg.checked)
        {
            drop.style.visibility="visible"
            drop.style.transition="all 1s esae-in"
        }
        else{
            drop.style.visibility="hidden"
            drop.style.transition="all 1s esae-in"
        }
})