// Universal selector

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

// Dark mode and light mode buttons 

$("#btnLight").addEventListener( 'click', () => {
    $("#btnLight").classList.add('none')
    $("#btnDark").classList.remove('none')
    $("body").classList.remove('darkMode')
    $("body").classList.add('lightMode')
})

$("#btnDark").addEventListener( 'click' , () => {
    $("#btnDark").classList.add('none')
    $("#btnLight").classList.remove('none')
    $('body').classList.remove('ligthMode')
    $('body').classList.add('darkMode')
})

// Image funtions

//url image 

$("#url").addEventListener("input", () =>{
    $("#memeImage").style.backgroundImage = `url(${$("#url").value})`
    $("#memeImage").style.backgroundSize = 'cover'
})

// Background Color


$("#bgColor").addEventListener("input", () => {
    const color = $("#bgColor").value
    $("#memeImage").style.backgroundColor = color
    $("#hexColor").innerText = color
});

