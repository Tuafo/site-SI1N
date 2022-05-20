async function converter() {
    var quantia = document.getElementById("quantia").value

    var min = document.querySelector('input[name="in"]:checked').value
    var mout = document.querySelector('input[name="out"]:checked').value

    console.log(quantia, min, mout)

    var url = 
    "https://api.exchangerate.host/convert?from=" + min + "&to=" + mout

    var response = await fetch(url)
    var data = await response.json()

    var valorConvertido = quantia * data.info.rate
    
    document.getElementById("res").innerHTML = valorConvertido.toFixed(2)

}