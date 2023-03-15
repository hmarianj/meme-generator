const $ = (selector) => document.querySelector(selector)

// FUNCTIONS
//  open image editor

$("#imageBtn").addEventListener('click', () => {
    $("aside").classList.remove('asideNone')
    $("aside").style.display = 'block'
    $("#formText").style.display = 'none'
    $("#imgEdit").style.display = 'block'
})

//  open text editor

$("#btnText").addEventListener('click', () => {
    $("aside").classList.remove('asideNone')
    $("aside").style.display = ('block')
    $("#imgEdit").style.display = 'none'
    $("#formText").style.display = 'block'
})

// Close Editor

$("#asideClose").addEventListener('click', () => {
    $("#aside").style.display = 'none'
})
