// Universal selector

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

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

// Background filters 

$("#bgEditColor").addEventListener ('change', () => {
    $("#memeImage").style.backgroundBlendMode = $("#bgEditColor").value
})

// Filters range

const filterImg = () => {
    const brightness = $("#glow").value
    const opacity = $("#opacity").value
    const contrast = $("#contrast").value
    const blur = $("#blur").value
    const grayscale = $("#greyScale").value
    const sepia = $("#sepia").value
    const hueRotate = $("#hue").value
    const saturate = $("#crowded").value
    const invert = $("#negativo").value
    const filterString = `brightness(${brightness}) opacity(${opacity}) contrast(${contrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hueRotate}deg) saturate(${saturate}%) invert(${invert})`
    $("#memeImage").style.filter = filterString
}

$("#glow").addEventListener("change", filterImg)
$("#opacity").addEventListener("change", filterImg)
$("#contrast").addEventListener("change", filterImg)
$("#blur").addEventListener("change", filterImg)
$("#greyScale").addEventListener("change", filterImg)
$("#sepia").addEventListener("change", filterImg)
$("#hue").addEventListener("change", filterImg)
$("#crowded").addEventListener("change", filterImg)
$("#negativo").addEventListener("change", filterImg)

// Reset filter

const resetFilters = () => {
    $$("section input.inRange").forEach((input) => (input.value = input.getAttribute("value")))
    filterImg()
}
$("section").addEventListener("input", filterImg)
$("#restFilter").addEventListener("click", resetFilters)

// Text funtions 

// Add and deletes texts

$("#inTextUp").addEventListener("input", () => $("#imgTextUp").innerText = inTextUp.value)
$("#inTextDown").addEventListener("input", () => $("#textDown").innerText = inTextDown.value)

$("#checkUp").addEventListener('click', () => {
    if ($("#checkUp").checked) {
        $(".spaceUp").style.display = 'none'
    } else {
        $(".spaceUp").style.display = ''
    }
})


$("#checkDown").addEventListener('click', () => {
    if ($("#checkDown").checked) {
        $(".spaceDown").style.display = 'none'
    } else {
        $(".spaceDown").style.display = ''
    }
})
