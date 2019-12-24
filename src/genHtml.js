
function generateMapMarkerHtml({ currency, nightlyRate, totalForStay }) {
  return `${currency}${nightlyRate}(n)/${currency}${totalForStay}(t)`;
}

function generateHtml(...args) {
  if (args[0].type === 'mapMarker') return generateMapMarkerHtml(args[0]);

  const { fontSize, justifyContent, currency, nightlyRate, totalForStay } = args[0];

  return `
      <div style="display: flex; justify-content: ${justifyContent}; font-size: ${fontSize};">
          <span style="font-weight: bold; color: #737373;">${currency}</span>
          <span style="color: #737373;">${nightlyRate} per night</span>
      </div>
      <div style="display: flex; justify-content: ${justifyContent}; font-size: ${fontSize};">
          <span style="font-weight: bold; color: #737373;">${currency}</span>
          <span style="color: #737373;">${totalForStay} total</span>
      </div>
  `;
}

export default {
  generateHtml,
};
