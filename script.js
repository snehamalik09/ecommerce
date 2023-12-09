function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function locate() {
    location.href = "index.html";
}

function closedialog() {
    document.getElementById("prediction").style.display = "none";
}


function predictByMonth() {
    // event.preventDefault;

    // if((document.getElementById("zodiac").value != "") && (document.getElementById("name").value !="" ) && (document.getElementById("age").value !="") && (document.getElementById("month").value !="")){
    document.getElementById("prediction").style.display = "block";
    // }

    let monthName = {
        "january": ["serpent stone", "Emerald"],
        "february": ["Pearl", "moonstone"],
        "march": ["aquamarine", "jasper"],
        "april": ["diamond", "sapphire", "opal"],
        "may": ["sapphire", "Emerald"],
        "june": ["pearl", "cat's eye", "Emerald"],
        "july": ["Ruby", "Sapphire"],
        "august": ["Ruby", "Diaomond"],
        "september": ["Sapphire"],
        "october": ["opal", "coral"],
        "november": ["Pearl", "Cat;s eye"],
        "december": ["Ruby", "Cat's eye"],
    }

    let a = document.getElementById("month").value
    let month = a.toLowerCase();

    for (item1 in monthName) {
        if (item1 == month) {
            let result1 = monthName[item1]
            for (i in result1) {
                document.getElementById("gems").innerHTML += result1[i]
                document.getElementById("gems").innerHTML += " , "
            }
        }
    }

}


// function predictByZodiac() {
//     // event.preventDefault;

//     // if((document.getElementById("zodiac").value != "") && (document.getElementById("name").value !="" ) && (document.getElementById("age").value !="") && (document.getElementById("month").value !="")){
//     document.getElementById("prediction").style.display = "block";
//     // }

//     let zodiacsigns = {
//         "Aries": ["Diamond", "Blood stone", "Jasper"],
//         "Taurus": ["Sapphire", "Emerald"],
//         "Gemini": ["Tiger's eye", "Emerald", "White sapphire"],
//         "Pisces": ["Ruby", "Amethyst", "Aquamarine"],
//         "Aquarius": ["Jasper", "Turquoise"],
//         "Cancer": ["Sapphire", "Pearl", "Emerald"],
//         "Libra": ["Opal", "Sapphire"],
//         "Scorpio": ["Ruby", "Amethyst", "Aquamarine", "Jasper"],
//         "Leo": ["Ruby", "Tiger's eye", "Diamond"],
//         "Virgo": ["Blue Sapphire", "Jasper"],
//         "Saggitarius": ["Topaz", "Turquoise"],
//         "Capricorn": ["Ruby", "Garnet"],
//     }

//     let b = document.getElementById("zodiac").value
//     let sign = b.toLowerCase();

//     for (item in zodiacsigns) {
//         if (item == sign) {
//             let result = zodiacsigns[item]
//             for (i in result) {
//                 document.getElementById("gems").innerHTML += result[i]
//                 document.getElementById("gems").innerHTML += " , "
//             }
//         }

//     }
// }



