import i18next from 'i18next';
import Feature from './feature/feature';
import unlimitedArtCreationImage from '../../assets/images/unlimited-art-creation.png';
import exclusiveStylesImage from '../../assets/images/exclusive-styles.png';
import magicAvatarsImage from '../../assets/images/magic-avatars.png';
import './features.styles.css';

const Features = () => {
  const featuresData = [
    {
      title: i18next.t('Unlimited Art <br>Creation'),
      image: unlimitedArtCreationImage
    },
    {
      title: i18next.t('Exclusive <br>Styles'),
      image: exclusiveStylesImage
    },
    {
      title: i18next.t('Magic Avatars <br>With 20% Off'),
      image: magicAvatarsImage
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