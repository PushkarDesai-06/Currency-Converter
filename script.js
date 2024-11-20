const fromAmountInp = document.querySelector('#fromAmount')
const output = document.querySelector('#output')

let fromCurrv = document.querySelector('#from')
let toCurrv = document.querySelector('#to')

let convertedAmount = 0;

let fromAmount = fromAmountInp.value

fromAmountInp.addEventListener('change', () => {
    fromAmount = fromAmountInp.value
})

const apiKey = 'b569526a5094090691beda98';

const convertBtn = document.querySelector('#convertBtn')

const convert = async (fromCurr, toCurr, fromAmount) => {
    let req = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurr}/${toCurr}/${fromAmount}`)

    const data = await req.json()
    if (data.result === 'success') {

        console.log(data.conversion_result);

        return data.conversion_result

    }
}

convertBtn.addEventListener('click', async () => {

    let fromCurr = fromCurrv.value  //From currency (INR / GBP / USD)
    let toCurr = toCurrv.value  //To correnct (INR / GBP / USD)

    output.innerText = await convert(fromCurr, toCurr, fromAmount)

})





