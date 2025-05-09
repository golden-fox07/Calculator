window.onload = function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
      const value = button.value;
  
      button.addEventListener('click', () => {
        if (button.dataset.action === "clear") {
          display.value = '';
        } else if (value === "=") {
          try {
            display.value = eval(display.value);
          } catch (e) {
            display.value = 'Error';
          }
        } else {
          display.value += button.dataset.value || value;
        }
      });
    });
  };
  
