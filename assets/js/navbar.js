document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const aboutButton = document.getElementById('aboutButton');
    const contactButton = document.getElementById('contactButton');
    const content = document.getElementById('content');
  
    homeButton.addEventListener('click', () => {
      content.innerHTML = `
        <h1>Welcome to TechSite</h1>
        <p>This is the home page content.</p>
      `;
    });
  
    aboutButton.addEventListener('click', () => {
      content.innerHTML = `
        <h1>About Us</h1>
        <p>Learn about our company and its history.</p>
      `;
    });
  
    contactButton.addEventListener('click', () => {
      content.innerHTML = `
        <h1>Contact Us</h1>
        <p>Get in touch with us using the contact information provided.</p>
      `;
    });
  });