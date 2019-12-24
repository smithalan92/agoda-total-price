/* eslint-disable no-param-reassign */
import genHtml from './genHtml';

function getBaseAgodaData() {
  const checkinElement = document.getElementsByClassName('SearchBoxTextDescription--checkIn')[0];
  const checkoutElement = document.getElementsByClassName('SearchBoxTextDescription--checkOut')[0];

  const checkInDate = new Date(checkinElement.dataset.date).getTime();
  const checkoutDate = new Date(checkoutElement.dataset.date).getTime();
  const stayLength = Math.floor((checkoutDate - checkInDate) / (1000 * 60 * 60 * 24));
  const currency = document.getElementsByClassName('currency-trigger__text')[0].innerText;

  return { stayLength, currency };
}

function calculateStayTotal(nightlyRate, stayLength) {
  const roughTotalForWeek = nightlyRate * stayLength;
  return Number(roughTotalForWeek).toFixed(0);
}

function updateElements({ elements, currency, stayLength, type }) {
  const fontSize = type === 'main' ? '18px' : '14px';
  const justifyContent = type === 'map' ? 'flex-end' : 'flex-start';

  elements.forEach((el) => {
    const nightlyRate = Number(el.innerText.replace(`${currency} `, ''));

    if (type === 'mapMarker') {
      el.parentElement.setAttribute('hasProcessed', true);
    }

    if (isNaN(nightlyRate)) return;

    const totalForStay = calculateStayTotal(nightlyRate, stayLength);

    const html = genHtml.generateHtml({
      fontSize,
      justifyContent,
      currency,
      nightlyRate,
      totalForStay,
      type,
    });

    try {
      if (type === 'main') {
        el.parentElement.innerHTML = html;
      } else if (type === 'mapMarker') {
        el.innerText = html;
      } else {
        el.parentElement.parentElement.innerHTML = html;
      }
    } catch (e) {
      console.log(e);
    }
  });
}

export default {
  calculateStayTotal,
  getBaseAgodaData,
  updateElements,
};
