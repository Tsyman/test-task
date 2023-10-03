import i18next from 'i18next';
import './footer.styles.css';

const Footer = () => {
  const footerLinks = [
    {
      title: i18next.t('Terms of Use'),
      href: '#'
    },
    {
      title: i18next.t('Privacy Policy'),
      href: '#'
    },
    {
      title: i18next.t('Restore'),
      href: '#'
    }
  ]
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = footerLinks.map(({title, href}) => (
    `<a class="footer__link" href="${href}">${title}</a>`
  )).join('');
  
  return footer;
};

export default Footer;