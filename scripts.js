const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    
    const inputCurrencyValues = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real

    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.1
    const bitcoinToday = 128.0
    const yenToday = 0.03



    if (currencySelect.value == "dolar-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValues / dolarToday)
    }

    if (currencySelect.value == "euro-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"


        }).format(inputCurrencyValues / euroToday)
    }

    if (currencySelect.value == "libra-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {

            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcoin-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "BTC",

        }).format(inputCurrencyValues / bitcoinToday)
        
        console.log ( funcionou)
    }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValues)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar-converted") {

        currencyName.innerHTML = "Dólar americano"

        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro-converted") {

        currencyName.innerHTML = "Euro"

        currencyImage.src = "./assets/Euro.png"

    }

    if (currencySelect.value == "libra-converted") {

        currencyName.innerHTML = "Libra"

        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin-converted") {

        currencyName.innerHTML = "Bitcoin"

        currencyImage.src = "./assets/bitcoin.png"

    }


    convertValues()

}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)