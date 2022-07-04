const RATES_URI = "https://www.nbrb.by/api/exrates/currencies";

const getResourse = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error (`Error code ${err.status}`);
    }
}

const getRatesInfo = async (currency) => {
    const result = await getResourse(RATES_URI);
    
    return result;
}

// getRatesInfo()

const renderExchangeRates = async () => {
    
}