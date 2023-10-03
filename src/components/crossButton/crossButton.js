import './crossButton.styles.css';

const CrossButton = () => {
  const crossButton = document.createElement('a');
  crossButton.classList.add('cross-button');
  crossButton.href = '#';
  crossButton.innerHTML = '<span>&#10005;</span>';
  
  return crossButton;
};

export default CrossButton;