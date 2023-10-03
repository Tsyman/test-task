import i18next from 'i18next';
import './planButton.styles.css';

const PlanButton = ({title, subtitle, price, bestOffer, active, href}) => (`
  <button class="button plan-button ${active ? 'active' : ''}" data-href="${href}">
    ${bestOffer ? `<div class="plan-button__best-offer">${i18next.t('BEST OFFER')}</div>` : ''}
    <div>
      <h3 class="plan-button__title">${title}</h3>
      ${subtitle ? `<h4 class="plan-button__subtitle">${subtitle}</h4>` : ''}
    </div>
    <h5 class="plan-button__price">${price}</h5>
  </button>
`);

export default PlanButton;