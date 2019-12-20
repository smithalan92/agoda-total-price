
const checkinElement = document.getElementsByClassName('SearchBoxTextDescription--checkIn')[0];
const checkoutElement = document.getElementsByClassName('SearchBoxTextDescription--checkOut')[0];

const checkInDate = new Date(checkinElement.dataset.date).getTime();
const checkoutDate = new Date(checkoutElement.dataset.date).getTime();
const days = Math.floor((checkoutDate - checkInDate) / (1000 * 60 * 60 * 24));
const currencySymbol = document.getElementsByClassName('currency-trigger__text')[0].innerText;


const run = () => {
  const priceElements = document.getElementsByClassName('price-box__price__amount');

  Array.from(priceElements).forEach((el) => {
    if (el.getAttribute('total-calculated')) return;

    const nightlyRate = Number(el.innerText);

    const roughTotalForWeek = nightlyRate * days;

    const totalForWeek = Number(roughTotalForWeek).toFixed(0);

    el.setAttribute('total-calculated', true);

    // eslint-disable-next-line
    el.parentElement.innerHTML = `
        <div style="display: flex; align-items: center; font-size: 18px">
            <span style="font-weight: bold; color: #737373;">${currencySymbol}</span>
            <span>
                <span style="color: #737373;">${nightlyRate} per night</span>
            </span>
        </div>
        <div style="display: flex; align-items: center; font-size: 18px">
            <span style="font-weight: bold; color: #737373;">${currencySymbol}</span>
            <span style="color: #737373;">${totalForWeek} total</span>
        </div>
    `;
  });

  window.requestAnimationFrame(run);
};

window.requestAnimationFrame(run);
