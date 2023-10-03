import i18next from 'i18next';
import PlanButton from './planButton/planButton';
import './plans.styles.css';

const formatPriceToString = (price) => (
  `$${price}`
)

const Plans = () => {
  const prices = {
    yearlyAccess: {
      year: 39.99,
      week: 0.48
    },
    weeklyAccess: {
      week: 6.99
    }
  }

  const plansData = [
    {
      href: 'https://apple.com/',
      title: i18next.t('YEARLY ACCESS'),
      subtitle: i18next.t('Just {{price}} per year', {price: formatPriceToString(prices.yearlyAccess.year)}),
      price: i18next.t('{{price}} <br>per week', {price: formatPriceToString(prices.yearlyAccess.week)}),
      bestOffer: true,
      active: true,
    },
    {
      href: 'https://google.com/',
      title: i18next.t('WEEKLY ACCESS'),
      price: i18next.t('{{price}} <br>per week', {price: formatPriceToString(prices.weeklyAccess.week)}),
    },
  ];

  const plans = document.createElement('div');
  plans.classList.add('plans');
  plans.innerHTML = `
    ${plansData.map((plan) => (
      PlanButton(plan)
    )).join('')}
    <a class="button continue-button" href="${plansData[0].href}">${i18next.t('Continue')}</a>
`
  return plans;
};

export default Plans;