const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n) {
    let p = document.createElement("p")
    p.id = "paragraph"
    let value = document.createTextNode(n)
    p.appendChild(value)
    document.body.appendChild(p)
    
}

// function alternative(n)  {
//     let paragraph = document.getElementById("paragraph")
    
//     paragraph.innerText += `, ${n}`
    
// }

h1 = document.createElement("h1")
title = document.createTextNode("Resolução de Katas")
h1.appendChild(title)
document.body.appendChild(h1)

function kata1() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 1")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= 25; i++) {
        array += " " + i
    }
    showResults(array)
}

kata1()

function kata2() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 2")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 25; i >= 0; i--) {
        array += " " + i
    }
    showResults(array)
}

kata2()

function kata3() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 3")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = -25; i <= -1; i++) {
        array += " " + i
    }
    showResults(array)
}

kata3()

function kata4() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 4")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = -1; i >= -25; i--) {
        array += " " + i
    }
    showResults(array)
}

kata4()

function kata5() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 5")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            array += " " + i
        }
    }
    showResults(array)
}

kata5()

function kata6() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 6")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            array += " " + i
        }
    }
    showResults(array)
}

kata6()

function kata7() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 7")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            array += " " + i
        }
    }
    showResults(array)
}

kata7()

function kata8() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 8")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 100; i >= 0; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            array += " " + i
        }
    }
    showResults(array)
}

kata8()

function kata9() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 9")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            array += " " + i
        }
    }
    showResults(array)
}

kata9()

function kata10() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 10")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        array += " " + sampleArray[i]
    }
    showResults(array)
}

kata10()

function kata11() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 11")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {    
            array += " " + sampleArray[i]
        }
    }
    showResults(array)
}

kata11()

function kata12() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 12")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {    
            array += " " + sampleArray[i]
        }
    }
    showResults(array)
}

kata12()

function kata13() {
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 13")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {    
            array += " " + sampleArray[i]
        }
    }
    showResults(array)
}

kata13()

function kata14() {
    let square = 0
    let array = []
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 14")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        square = sampleArray[i]*sampleArray[i]   
        array += " " + square
    }
    showResults(array)
}

kata14()

function kata15() {
    let sum = 0
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 15")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < 20; i++) {
        sum += i
    }
    showResults(sum)
}
    
kata15()

function kata16() {
    let sum = 0
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 16")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < sampleArray.length; i++) {
        sum += sampleArray[i]  
    }
    showResults(sum)
}

kata16()

function kata17() {
    let value = sampleArray.length, min = Infinity
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 17")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    while (value--) {
        if (sampleArray[value] < min) {
            min = sampleArray[value]
        }
    }
    showResults(min)

}

kata17()

function kata18() {
    let value = sampleArray.length, max = -Infinity
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata 18")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    while (value--) {
        if (sampleArray[value] > max) {
            max = sampleArray[value]
        }
    }
    showResults(max)
}

kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function rectangle() {
   let body = document.getElementById("body")
   let div = document.createElement("div")
   div.style.width = "100px"
   div.style.height = "20px"
   div.style.margin = "10px"
   div.style.backgroundColor = "gray"
   body.appendChild(div)
}



function kataBonus1() {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata Bonus 1")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i < 20; i++) {
        rectangle()
    }
}

kataBonus1()

function kataBonus2() {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata Bonus 2")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 105; i <= 200; i+=5) {
        let body = document.getElementById("body")
        let div = document.createElement("div")
        div.style.width = i + "px"
        div.style.height = "20px"
        div.style.margin = "10px"
        div.style.backgroundColor = "gray"
        body.appendChild(div)
    }
}

kataBonus2()

function kataBonus3() {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata Bonus 3")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= sampleArray.length; i++) {
        body = document.getElementById("body")
        div = document.createElement("div")
        div.style.width = sampleArray[i] + "px"
        div.style.height = "20px"
        div.style.margin = "10px"
        div.style.backgroundColor = "gray"
        body.appendChild(div)
    }
}

kataBonus3()

function kataBonus4() {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata Bonus 4")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= sampleArray.length; i++) {

        body = document.getElementById("body")
        div = document.createElement("div")

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

kataBonus4()

function kataBonus5() {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode("Kata Bonus 5")
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
    for (let i = 0; i <= sampleArray.length; i++) {

        body = document.getElementById("body")
        div = document.createElement("div")

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

kataBonus5()