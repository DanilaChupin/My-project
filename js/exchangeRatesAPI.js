//const RATES_URI = "https://www.nbrb.by/api/exrates/rates[/{cur_id}]";


const RATES_URI_USD = "https://www.nbrb.by/api/exrates/rates/431";
const RATES_URI_EU = "https://www.nbrb.by/api/exrates/rates/451";
const RATES_URI_RUB = "https://www.nbrb.by/api/exrates/rates/456";


const getResourse = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`Error code ${err.status}`);
    }
}

const counterConvert = async (selectAdd, selectOut) => {
    const dataAdd = await getResourse(`https://www.nbrb.by/api/exrates/rates/${selectAdd}`);
    const dataOut = await getResourse(`https://www.nbrb.by/api/exrates/rates/${selectOut}`);

    const inputValue = document.querySelector(".input-addid").value;
    let resultADD = inputValue * dataAdd.Cur_OfficialRate
    let resultOut = inputValue * dataOut.Cur_OfficialRate

    let result = resultADD / resultOut
    console.log(result);
}


const getRatesInfoUSD = async () => {
    const resultUSD = await getResourse(RATES_URI_USD);
    const currentCurrency = document.querySelectorAll(".rate__title_content")[0].innerHTML = resultUSD.Cur_OfficialRate;

    return resultUSD.Cur_OfficialRate;
}

getRatesInfoUSD()

const getRatesInfoEU = async () => {
    const resultEU = await getResourse(RATES_URI_EU);
    const currentCurrency = document.querySelectorAll(".rate__title_content")[1].innerHTML = resultEU.Cur_OfficialRate;

    return resultEU.Cur_OfficialRate;
}

getRatesInfoEU()

const getRatesInfoRUB = async () => {
    const resultRUB = await getResourse(RATES_URI_RUB);
    const currentCurrency = document.querySelectorAll(".rate__title_content")[2].innerHTML = resultRUB.Cur_OfficialRate;

    return resultRUB.Cur_OfficialRate;
}

getRatesInfoRUB()

const renderExchangeRates = async () => {
    const selectAdd = Number(document.querySelector(".select_addid").value);
    const selectOut = Number(document.querySelector(".select_addid__value").value);
    const inputValue = Number(document.querySelector(".input-addid").value);
    const result = document.querySelector(".sum_value")

    let data;
    let dataAdd;
    let dataOut;

    if (selectAdd === 1) {
        dataAdd === 1
    } else {
        dataAdd = await getResourse(`https://www.nbrb.by/api/exrates/rates/${selectAdd}`)
    }

    if (selectOut === 1) {
        dataOut === 1
    } else {
        dataOut = await getResourse(`https://www.nbrb.by/api/exrates/rates/${selectOut}`)
    }

    if (selectAdd !== 1 && selectOut !== 1) {
        data = dataAdd.Cur_OfficialRate * inputValue / dataOut.Cur_OfficialRate
    } else if (selectAdd === 1) {
        data = 1 * inputValue / dataOut.Cur_OfficialRate
    } else if (selectOut === 1) {
        data = dataAdd.Cur_OfficialRate * inputValue / 1
    }

    result.textContent = (Math.round(data * 100)) / 100;
}

document.querySelector(".calculate_btn").addEventListener("click", renderExchangeRates)

