
function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if (min >= max) {
        alert("Atenção, percebemos que você inverteu os valores, o valor minimo tem que ser menor que o valor máximo.")
    } else {
        var resultnumber = Math.floor(Math.random() * (max - min + 1) + min);
    }



    var resultext = "O número sorteado foi:"
    var resultnumber = Math.floor(Math.random() * (max - min + 1) + min);
    var resultfinal = resultext + "<br>" + resultnumber;

    document.getElementById('result').innerHTML = resultfinal
}
