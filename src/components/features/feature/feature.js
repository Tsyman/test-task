import './feature.styles.css';

const Feature = ({title, imageClassName}) => (`
  <div class="feature">
    <div class="feature__${imageClassName}"></div>
    <h6 class="feature__text">${title}</h6>
  </div>
`);

export default Feature;