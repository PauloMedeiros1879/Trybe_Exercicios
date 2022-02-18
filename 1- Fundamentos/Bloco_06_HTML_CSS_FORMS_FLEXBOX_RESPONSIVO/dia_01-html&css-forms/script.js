// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
HREF_LINK.addEventListener('click', function(){
    HREF_LINK.preventDefault()
})
INPUT_CHECKBOX.addEventListener('click', function(){
    INPUT_CHECKBOX.preventDefault()
})
INPUT_TEXT.addEventListener('click', function(){
    INPUT_TEXT.preventDefault()
})
