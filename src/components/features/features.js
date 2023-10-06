import i18next from 'i18next';
import Feature from './feature/feature';
import './features.styles.css';

const Features = () => {
  const featuresData = [
    {
      title: i18next.t('Unlimited Art <br>Creation'),
      imageClassName: 'unlimited-art-creation'
    },
    {
      title: i18next.t('Exclusive <br>Styles'),
      imageClassName: 'exclusive-styles'
    },
    {
      title: i18next.t('Magic Avatars <br>With 20% Off'),
      imageClassName: 'magic-avatars'
    }
  ];

  const features = document.createElement('div');
  features.classList.add('features');
  features.innerHTML = featuresData.map((featureData) => (
    Feature(featureData)
  )).join('')

  return features;
};

export default Features;