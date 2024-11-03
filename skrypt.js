function paliwo(){
    let rodzajPaliwa = document.getElementById("rodzajPaliwa").value
    let iloscPaliwa = document.getElementById("iloscPaliwa").value
    let cenaPaliwa
    if (rodzajPaliwa == 1){
        cenaPaliwa = 4
    }
    else if (rodzajPaliwa == 2){
        cenaPaliwa = 3.5
    }
    else{
        cenaPaliwa = 0
    }
    let kosztPaliwa = cenaPaliwa * iloscPaliwa
    document.getElementById("kosztPaliwa").innerHTML = "koszt paliwa: " + kosztPaliwa + " zł"
}