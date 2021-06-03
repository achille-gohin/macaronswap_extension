import axios from "axios";
const price = document.querySelector(".price");
const MarketCap = document.querySelector(".MarketCap");
const TotalBurned = document.querySelector(".TotalBurned");


const request_data = async data => {
    console.log("enter")
    await axios.get('https://www.macaronswap.finance/api/stats')
    .then((res)=>{
    console.log("inside")
    console.log(res.data.price)      
    price.textContent = Number(Number(res.data.price).toFixed(3)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    MarketCap.textContent = Number(Number(res.data.market_cap).toFixed(1)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    TotalBurned.textContent = Number(Number(res.data.total_burned).toFixed(1)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    })
    .catch((error) => {
    console.error(error);
    });

}

const handSubmit = async e =>{
    e.preventDefault();
    request_data();
    console.log(price)
}

document.getElementById("button").addEventListener("click",e=> handSubmit(e));