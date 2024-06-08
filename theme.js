// function allLetter(inputtxt)
//       { 
//       var letters = /^[A-Za-z A-Za-z]+$/;
//       if(inputtxt.value.match(letters))
//       {
//       alert('Your name have accepted : you can try another');
//       return true;
//       }
//       else
//       {
//       alert('Please input alphabet characters only');
//       return false;
//       }
    //   }
      const themeSwitch = document.querySelector('input');
      themeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme');
      });