import i18next from 'i18next';
import './title.styles.css';

const Title = () => {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = i18next.t('Get Unlimited <br>Access');
  
  return title;
};

export default Title;