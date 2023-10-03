import './feature.styles.css';

const Feature = ({title, image}) => (`
  <div class="feature">
    <img class="image" src=${image} alt="Feature">
    <h6 class="feature__text">${title}</h6>
  </div>
`);

export default Feature;