const planButtonsActions = () => {
  const planButtons = document.querySelectorAll('.plan-button');
  const continueButton = document.querySelector('.continue-button');

  planButtons.forEach((button) => {
    button.addEventListener('click', e => {
      continueButton.href = e.currentTarget.getAttribute('data-href');

      if (e.currentTarget.classList.contains('active')) {
        return;
      } else {
        planButtons.forEach((btn) => {
          btn.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
      }
    })
  })
};

export default planButtonsActions;