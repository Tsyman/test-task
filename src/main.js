import './styles/styles.css';
import CrossButton from './components/crossButton/crossButton';
import Title from './components/title/title';
import Features from './components/features/features';
import Plans from './components/plans/plans';
import Footer from './components/footer/footer';
import planButtonsActions from '../src/components/plans/planButtonActions';
import {initI18n} from '../src/localization/i18n';

initI18n();

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const container = document.createElement('div')
  container.classList.add('container');
  container.append(CrossButton(), Title(), Features(), Plans(), Footer());
  app.appendChild(container);

  planButtonsActions();
});

