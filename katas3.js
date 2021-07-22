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

function titleKata(n) {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode(`Kata ${n}`)
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
}

h1 = document.createElement("h1")
title = document.createTextNode("Resolução de Katas")
h1.appendChild(title)
document.body.appendChild(h1)

function kata1() {
    let array = ""
    titleKata(1)
    for (let i = 0; i <= 25; i++) {
        if (array === "") {
            array+= i
        } else {
            array += ", " + i
        }
        
    }
    showResults(array)
    return array
}

kata1()

function kata2() {
    let array = ""
    titleKata(2)
    for (let i = 25; i >= 0; i--) {
        if (array === "") {
            array+= i
        } else {
            array += ", " + i
        }
    }
    showResults(array)
    return array
}

kata2()

function kata3() {
    let array = ""
    titleKata(3)
    for (let i = -25; i <= -1; i++) {
        if (array === "") {
            array+= i
        } else {
            array += ", " + i
        }
    }
    showResults(array)
    return array
}

kata3()

function kata4() {
    let array = ""
    titleKata(4)
    for (let i = -1; i >= -25; i--) {
        if (array === "") {
            array+= i
        } else {
            array += ", " + i
        }
    }
    showResults(array)
    return array
}

kata4()

function kata5() {
    let array = ""
    titleKata(5)
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            if (array === "") {
                array+= i
            } else {
                array += ", " + i
            }
        }
    }
    showResults(array)
    return array
}

kata5()

function kata6() {
    let array = ""
    titleKata(6)
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            if (array === "") {
                array+= i
            } else {
                array += ", " + i
            }
        }
    }
    showResults(array)
    return array
}

kata6()

function kata7() {
    let array = ""
    titleKata(7)
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            if (array === "") {
                array+= i
            } else {
                array += ", " + i
            }
        }
    }
    showResults(array)
    return array
}

kata7()

function kata8() {
    let array = ""
    titleKata(8)
    for (let i = 100; i >= 0; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            if (array === "") {
                array+= i
            } else {
                array += ", " + i
            }
        }
    }
    showResults(array)
    return array
}

kata8()

function kata9() {
    let array = ""
    titleKata(9)
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            if (array === "") {
                array+= i
            } else {
                array += ", " + i
            }
        }
    }
    showResults(array)
    return array
}

kata9()

function kata10() {
    let array = ""
    titleKata(10)
    for (let i = 0; i < sampleArray.length; i++) {
        if (array === "") {
            array+= sampleArray[i]
        } else {
            array += ", " + sampleArray[i]
        }
    }
    showResults(array)
    return array
}

kata10()

function kata11() {
    let array = ""
    titleKata(11)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {    
            if (array === "") {
                array+= sampleArray[i]
            } else {
                array += ", " + sampleArray[i]
            }
        }
    }
    showResults(array)
    return array
}

kata11()

function kata12() {
    let array = ""
    titleKata(12)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {    
            if (array === "") {
                array+= sampleArray[i]
            } else {
                array += ", " + sampleArray[i]
            }
        }
    }
    showResults(array)
    return array
}

kata12()

function kata13() {
    let array = ""
    titleKata(13)
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {    
            if (array === "") {
                array+= sampleArray[i]
            } else {
                array += ", " + sampleArray[i]
            }
        }
    }
    showResults(array)
    return array
}

kata13()

function kata14() {
    let square = 0
    let array = []
    titleKata(14)
    for (let i = 0; i < sampleArray.length; i++) {
        square = sampleArray[i]*sampleArray[i]   
        if (array === "") {
            array+= square
        } else {
            array += ", " + square
        }
    }
    showResults(array)
    return array
}

kata14()

function kata15() {
    let sum = 0
    titleKata(15)
    for (let i = 0; i < 20; i++) {
        sum += i
    }
    showResults(sum)
    return sum
}
    
kata15()

function kata16() {
    let sum = 0
    titleKata(16)
    for (let i = 0; i < sampleArray.length; i++) {
        sum += sampleArray[i]  
    }
    showResults(sum)
    return sum
}

kata16()

function kata17() {
    let value = sampleArray.length, min = Infinity
    titleKata(17)
    while (value--) {
        if (sampleArray[value] < min) {
            min = sampleArray[value]
        }
    }
    showResults(min)
    return min

}

kata17()

function kata18() {
    let value = sampleArray.length, max = -Infinity
    let result = 0
    titleKata(18)
    while (value--) {
        if (sampleArray[value] > max) {
            max = sampleArray[value]
            result = max
        }
    }
    showResults(max)
    return max
}

kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function titleBonusKata(n) {
    h2 = document.createElement("h2")
    subtitle = document.createTextNode(`Kata Bonus ${n}`)
    h2.appendChild(subtitle)
    document.body.appendChild(h2)
}

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
    titleBonusKata(1)
    for (let i = 0; i < 20; i++) {
        rectangle()
    }
}

kataBonus1()

function kataBonus2() {
    titleBonusKata(2)
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
    titleBonusKata(3)
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
    titleBonusKata(4)
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
    titleBonusKata(5)
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