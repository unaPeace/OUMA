// this is where we give the css conditions for animations and how to detect events

function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');
  
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling; // this retrieves the previous element used by the arrow variable
      const parent = arrow.parentElement; // Lets you access the parent element of the arrow variable
      const nextForm = parent.nextElementSibling;
      
      //Check for validation
      if(input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if(input.type === 'email' && validateEmail(input)){
        nextSlide(parent, nextForm);
      } else if(input.type === 'file' && validateUser(input)){
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake 0.5s ease';
      } 
      // get rid of animation
       parent.addEventListener('animationend', () => {
        parent.style.animation = '';
       })
    });
  });
}

// this is where we tell the website how to react to the events

function validateUser(user) {
  if(user.value.length < 6){
    console.log('Not enough characters');
    error('rgb(189,87,87)');
  } else {
    error('rgb(254,208,209)');
    return true;
  }
}


function validateEmail(email){
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(validation.test(email.value)){
    error('rgb(254,208,209)');
    return true;
  } else {
    error('rgb(189,87,87)');
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();