const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n) {
    let body = document.getElementById("body")
    let p = document.createElement("p")
    let value = document.createTextNode(n)
    let comma = document.createTextNode(", ")
    if (n === 0) {
        p.appendChild(value)
        body.appendChild(p)
    } else {
        p.innerText += comma
        p.innerText += value
    }

} 

function kata1() {
    for (let i = 0; i <= 25; i++) {
        showResults(i)
    }
}

function kata2() {
    for (let i = 25; i >= 0; i--) {
        showResults(i)
    }
}

function kata3() {
    for (let i = -25; i <= -1; i++) {
        showResults(i)
    }
}

function kata4() {
    for (let i = -1; i >= -25; i--) {
        showResults(i)
    }
}

function kata5() {
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            showResults(i)
        }
    }
}

function kata6() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            showResults(i)
        }
    }
}

function kata7() {
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            showResults(i)
        }
    }
}

function kata8() {
    for (let i = 100; i >= 0; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            showResults(i)
        }
    }
}

function kata9() {
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            showResults(i)
        }
    }
}

function kata10() {
    for (let i = 0; i < sampleArray.length; i++) {
        showResults(sampleArray[i])    
    }
}

function kata11() {
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {    
        showResults(sampleArray[i])  
        }
    }
}

function kata12() {
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {    
        showResults(sampleArray[i])  
        }
    }
}

function kata13() {
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {    
        showResults(sampleArray[i])  
        }
    }
}

function kata14() {
    let square = 0
    for (let i = 0; i < sampleArray.length; i++) {
        square = sampleArray[i]*sampleArray[i]   
        showResults(square)  
    }
}


function kata15() {
    let sum = 0
    for (let i = 0; i < 20; i++) {
        sum += i
    }
    showResults(sum)
}
    


function kata16() {
    let sum = 0
    for (let i = 0; i < sampleArray.length; i++) {
        sum += sampleArray[i]  
    }
    showResults(sum)
}

function kata17() {
    let value = sampleArray.length, min = Infinity
    while (value--) {
        if (sampleArray[value] < min) {
            min = sampleArray[value]
        }
    }
    showResults(min)

}

function kata18() {
    let value = sampleArray.length, max = -Infinity
    while (value--) {
        if (sampleArray[value] > max) {
            max = sampleArray[value]
        }
    }
    showResults(max)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function rectangle() {
   body = document.getElementById("body")
   div = document.createElement("div")
   body.style.display = "flex"
   body.style.flexFlow = "row wrap"
   div.style.width = "100px"
   div.style.height = "20px"
   div.style.margin = "10px"
   div.style.backgroundColor = "gray"
   body.appendChild(div)
}



function kataBonus1() {
    for (let i = 0; i < 20; i++) {
        rectangle()
    }
}

function kataBonus2() {
    for (let i = 105; i <= 200; i+=5) {
        body = document.getElementById("body")
        div = document.createElement("div")
        body.style.display = "flex"
        body.style.flexFlow = "row wrap"
        div.style.width = i + "px"
        div.style.height = "20px"
        div.style.margin = "10px"
        div.style.backgroundColor = "gray"
        body.appendChild(div)
    }
}

function kataBonus3() {
    for (let i = 0; i <= sampleArray.length; i++) {
        body = document.getElementById("body")
        div = document.createElement("div")
        body.style.display = "flex"
        body.style.flexFlow = "row wrap"
        div.style.width = sampleArray[i] + "px"
        div.style.height = "20px"
        div.style.margin = "10px"
        div.style.backgroundColor = "gray"
        body.appendChild(div)
    }
}

function kataBonus4() {
    for (let i = 0; i <= sampleArray.length; i++) {

        body = document.getElementById("body")
        div = document.createElement("div")
        body.style.display = "flex"
        body.style.flexFlow = "row wrap"

        if (i % 2 === 0){
            div.style.width = sampleArray[i] + "px"
            div.style.height = "20px"
            div.style.margin = "10px"
            div.style.backgroundColor = "gray"
            body.appendChild(div)
            
        } else {
            div.style.width = sampleArray[i] + "px"
            div.style.height = "20px"
            div.style.margin = "10px"
            div.style.backgroundColor = "red"
            body.appendChild(div)

        }  
    }
}

function kataBonus5() {
    for (let i = 0; i <= sampleArray.length; i++) {

        body = document.getElementById("body")
        div = document.createElement("div")
        body.style.display = "flex"
        body.style.flexFlow = "row wrap"

        if (sampleArray[i] % 2 === 0){
            div.style.width = sampleArray[i] + "px"
            div.style.height = "20px"
            div.style.backgroundColor = "red"
            div.style.margin = "10px"
            body.appendChild(div)
        } else {
            div.style.width = sampleArray[i] + "px"
            div.style.height = "20px"
            div.style.backgroundColor = "gray"
            div.style.margin = "10px"
            body.appendChild(div)
        }  
    }
}
