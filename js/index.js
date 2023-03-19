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
$("#inTextDown").addEventListener("input", () => $("#imgTextDown").innerText = inTextDown.value)

// Checkboxs

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

// Edit font family

$(".selectFont").addEventListener('change', () => {
    $("#imgTextUp").style.fontFamily = `${$("#opcionFont").value}`
    $("#imgTextDown").style.fontFamily = `${$("#opcionFont").value}`
})

$("#fontSize").addEventListener('input', () => {
    $("#imgTextUp").style.fontSize = `${$("#fontSize").value}px`
    $("#imgTextDown").style.fontSize = `${$("#fontSize").value}px`
})

// Aling texts

$('#left').addEventListener ('click', () => {
    $('#imgTextUp').style.textAlign = 'left'
    $('#imgTextDown').style.textAlign = 'left'
})

$('#center').addEventListener ('click', () => {
    $('#imgTextUp').style.textAlign = 'center'
    $('#imgTextDown').style.textAlign = 'center'
})

$('#right').addEventListener ('click', () => {
    $('#imgTextUp').style.textAlign = 'right'
    $('#imgTextDown').style.textAlign = 'right'
})

// Text colors

const colorNewText = () => {
    $("#imgTextUp").style.color = $("#colorText").value
    $("#imgTextDown").style.color = $("#colorText").value
    $("#hxColorChange").innerText = `${$("#colorText").value}`

}

$("#colorText").addEventListener('input', () => colorNewText ())

// Backgrund color

const bgColorTextChange = () => {
    $(".spaceUp").style.backgroundColor = $("#bgColorText").value
    $(".spaceDown").style.backgroundColor = $("#bgColorText").value
    $("#hxColorChangeBg").innerHTML = `${$("#bgColorText").value}`
}

$("#bgColorText").addEventListener('input', () => bgColorTextChange())

// Backgrund transparent

// por hacer aun 

// None, Dark and ligth outline

$("#noneContour").addEventListener('click', () => {
    $('#imgTextUp').classList.remove('blackOutline')
    $('#imgTextUp').classList.remove('whiteOutline')
    $('#imgTextDown').classList.remove('blackOutline')
    $('#imgTextDown').classList.remove('whiteOutline')
})

$("#clearOutline").addEventListener('click', () => {
    $('#imgTextUp').classList.remove('blackOutline')
    $('#imgTextUp').classList.add('whiteOutline')
    $('#imgTextDown').classList.remove('blackOutline')
    $('#imgTextDown').classList.add('whiteOutline')
})

$("#darkOutline").addEventListener('click', () => {
    $('#imgTextUp').classList.add('blackOutline')
    $('#imgTextDown').classList.add('blackOutline')
})

$("#espace").addEventListener('input', () => {
    $('#imgTextUp').style.paddingTop = `${$("#espace").value}px`
    $('#imgTextUp').style.paddingBottom = `${$("#espace").value}px`
    $('#imgTextDown').style.paddingTop = `${$("#espace").value}px`
    $('#imgTextDown').style.paddingBottom = `${$("#espace").value}px`
})

$("#leading").addEventListener('change', () => {
    $('#imgTextUp').style.lineHeight = $("#leading").value
    $('#imgTextDown').style.lineHeight = $("#leading").value
})

