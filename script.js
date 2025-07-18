// Add smooth scrolling effect when clicking on navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Project Item Hover Effect
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', function () {
        item.style.transform = 'scale(1)';
    });
  });
  
  // Skill Progress Bar Animation
  const skillItems = document.querySelectorAll('.progress');
  skillItems.forEach(skill => {
    let width = skill.style.width;
    skill.style.width = '0';
    setTimeout(() => {
        skill.style.transition = 'width 2s ease-in-out';
        skill.style.width = width;
    }, 200);
  });
  
  // Contact Form Validation
//   const form = document.querySelector('form');
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const name = form.querySelector('input[type="text"]');
//     const email = form.querySelector('input[type="email"]');
//     const message = form.querySelector('textarea');
    
//     if (name.value === '' || email.value === '' || message.value === '') {
//         alert('Please fill in all fields!');
//     } else {
//         alert('Message Sent! Thank you for reaching out.');
//         form.reset();  // Reset the form after successful submission
//     }
//   }); 