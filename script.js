
let getId = id => document.getElementById(id);
let getClass = cls => document.getElementsByClassName(cls);

let textArea = getId('textArea')
let outputWindiw = getId('outputWindow')
let boldBtn = getId('boldBtn')
let italicBtn = getId('italicBtn')
let underlineBtn = getId('underlineBtn')
let lineThroughBtn = getId('lineThroughBtn')
let alignRight = getId('alignRight')
let alignCenter = getId('alignCenter')
let alignLeft = getId('alignLeft')
let fontFamilyItem = getClass('fontFamilyItem')
let fontSizeItem = getClass('fontSizeItem')
let fontColor = getClass('fontcolor')
let bgColor = getClass('bgColor')
let bgImage = getClass('bgImage')
let userFile = getId('userFile')
let signInBtn = getId('signInBtn')
let codeBtn = getId('codeBtn')
let saveBtn = getId('saveBtn')
let header2 = getId('header2')
let tableCreate = getId('tableCreate')
let tableReset = getId('tableReset')
let olCreate = getId('olCreate')
let olReset = getId('olReset')
let ulCreate = getId('ulCreate')
let ulReset = getId('ulReset')
let olCount = getId('olCount')
let olMarkItem = getClass('olMarkItem')
let ulMarkItem = getClass('ulMarkItem')
let ulCount = getId('ulCount')
let trCount = getId('trCount')
let tdCount = getId('tdCount')
let tdWidth = getId('tdWidth')
let tdHeight = getId('tdHeight')
let borderWidth = getId('borderWidth')
let borderStyle = getClass('borderStyle')
let bordeColor = getId('borderColor')
//output
outputWindiw.innerHTML = textArea.value
//first button-group
boldBtn.addEventListener('click', ()=>{
    boldBtn.classList.toggle('active')
    outputWindiw.style.fontWeight == 'bold' ? outputWindiw.style.fontWeight = 'normal' : outputWindiw.style.fontWeight = 'bold'
})
italicBtn.addEventListener('click', ()=>{
    italicBtn.classList.toggle('active')
    outputWindiw.style.fontStyle == 'italic' ? outputWindiw.style.fontStyle = 'normal' : outputWindiw.style.fontStyle = 'italic'
})
underlineBtn.addEventListener('click', ()=>{
    underlineBtn.classList.toggle('active')
    if(lineThroughBtn.classList.contains('active')) lineThroughBtn.classList.remove('active')
    outputWindiw.style.textDecoration == 'underline' ? outputWindiw.style.textDecoration = 'none' : outputWindiw.style.textDecoration = 'underline';
})
lineThroughBtn.addEventListener('click', ()=>{
    lineThroughBtn.classList.toggle('active')
    if(underlineBtn.classList.contains('active')) underlineBtn.classList.remove('active')
    outputWindiw.style.textDecoration == 'line-through' ? outputWindiw.style.textDecoration = 'none' : outputWindiw.style.textDecoration = 'line-through';
})
//second button-group
alignLeft.addEventListener('click', ()=>{
    alignLeft.classList.add('active')
    if(alignCenter.classList.contains('active') || alignRight.classList.contains('active')){
        alignCenter.classList.remove('active')
        alignRight.classList.remove('active')
    }
    outputWindiw.style.textAlign = 'left'
})
alignCenter.addEventListener('click', ()=>{
    alignCenter.classList.add('active')
    if(alignLeft.classList.contains('active') || alignRight.classList.contains('active')){
        alignLeft.classList.remove('active')
        alignRight.classList.remove('active')
    }
    outputWindiw.style.textAlign = 'center'
})
alignRight.addEventListener('click', ()=>{
    alignRight.classList.add('active')
    if(alignCenter.classList.contains('active') || alignLeft.classList.contains('active')){
        alignCenter.classList.remove('active')
        alignLeft.classList.remove('active')
    }
    outputWindiw.style.textAlign = 'right'
})
//third button-group
for(let i = 0; i<fontFamilyItem.length; i++){
    fontFamilyItem[i].style.fontFamily = fontFamilyItem[i].innerHTML
    fontFamilyItem[i].addEventListener('click', ()=>{
        outputWindiw.style.fontFamily = fontFamilyItem[i].innerHTML
    })
}
for(let i = 0; i<fontSizeItem.length; i++){
    fontSizeItem[i].addEventListener('click', ()=>{
        outputWindiw.style.fontSize = fontSizeItem[i].innerHTML
    })
}
for(let i = 0; i<fontColor.length; i++){
    fontColor[i].addEventListener('click', ()=>{
        outputWindiw.style.color = fontColor[i].style.backgroundColor
    })
}
for(let i = 0; i<bgColor.length; i++){
    bgColor[i].addEventListener('click', ()=>{
        outputWindiw.style.backgroundColor = bgColor[i].style.backgroundColor
        outputWindiw.style.backgroundImage = ""
    })
}
for(let i = 0; i<bgImage.length; i++){
    bgImage[i].addEventListener('click', ()=>{
        outputWindiw.style.backgroundImage = bgImage[i].style.backgroundImage
    })
}
userFile.addEventListener('change', function(event){
    let file = URL.createObjectURL(event.target.files[0])
    outputWindiw.style.backgroundImage = `url('${file}')`
})
//signIn 
signInBtn.addEventListener('click', ()=>{
    if(getId('loginInput').value == 'admin' && getId('passInput').value == 'admin'){
        codeBtn.removeAttribute('disabled')
    }
})
codeBtn.addEventListener('click', ()=>{
    textArea.style.zIndex = '999' 
    outputWindiw.style.zIndex = '0'
    header2.style.visibility = 'visible'
})
//edit mode 
saveBtn.addEventListener('click', ()=>{
    header2.style.visibility = 'hidden'  
    textArea.style.zIndex = '0' 
    outputWindiw.style.zIndex = '999'
    outputWindiw.innerHTML = textArea.value
})
//table modal
tableCreate.addEventListener('click', ()=>{
    let bstyle = ''
    let bwidth = borderWidth.value
    for(let i = 0; i<borderStyle.length; i++){
        if(borderStyle[i].selected == true){
            bstyle = borderStyle[i].value
            break
        } 
    }
    let table = `<table style="border: ${bwidth}px ${bstyle} ${bordeColor.value}">`
    for(let i = 0; i<trCount.value; i++){
        let tr = `<tr>`
        for(let i = 0; i<tdCount.value; i++){
            let td = `<td style="border: ${bwidth}px ${bstyle} ${bordeColor.value}; width: ${tdWidth.value}px; height: ${tdHeight.value}px">TD</td>`
            tr += td
        }
        tr += `</tr>`
        table += tr 
    }
    table += `</table>`
    textArea.value += table
})
tableReset.addEventListener('click', ()=>{
    tdCount.value = ''
    trCount.value = ''
    tdHeight.value = ''
    tdWidth.value = ''
    bordeColor.value = ''
    borderWidth.value = ''
    borderStyle[0].selected = true 
})
//ol modal
olCreate.addEventListener('click', ()=>{
    let mark = 0;
    for(let i = 0; i<olMarkItem.length; i++){
        if(olMarkItem[i].selected == true){
            mark = olMarkItem[i].value
            break
        }
    }
    let olList = `<ol style="list-style-type: ${mark}">`
    for(let i = 0; i<olCount.value; i++){
        let liItem = `<li>Item ${i}</li>`
        olList += liItem
    }
    olList += ` </ol>`
    textArea.value += olList
})
olReset.addEventListener('click', ()=>{
    olMarkItem[0].selected = true
    olCount.value = ''
})
//ul modal 
ulCreate.addEventListener('click', ()=>{
    let mark = 0;
    for(let i = 0; i<ulMarkItem.length; i++){
        if(ulMarkItem[i].selected == true){
            mark = ulMarkItem[i].value
            break
        }
    }
    let ulList = `<ul style="list-style-type: ${mark}">`
    for(let i = 0; i<ulCount.value; i++){
        let liItem = `<li>Item ${i}</li>`
        ulList += liItem
    }
    ulList += ` </ul>`
    textArea.value += ulList
})

ulReset.addEventListener('click', ()=>{
    ulMarkItem[0].selected = true
    ulCount.value = ''
})