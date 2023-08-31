document.addEventListener('DOMContentLoaded', function() {


    const changingText = document.querySelector('.changing-text span');
    const countdownElement = document.getElementById('countdown');
    const endDate = new Date('2023-08-31T16:40:00').getTime();

    function updateChangingText() {
        const texts = ['mastery.', 'brilliance.', 'proficiency.'];
        let currentIndex = 0;
    
        // Initial delay of 1500ms
        setTimeout(() => {
          // Set the initial text
          changingText.textContent = texts[currentIndex];
          currentIndex = (currentIndex + 1) % texts.length;
    
          // Continue with regular interval of 3000ms
          setInterval(() => {
            changingText.textContent = texts[currentIndex];
            currentIndex = (currentIndex + 1) % texts.length;
          }, 3000);
        }, 1500);
      }

    function updateCountdown() {
        setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (seconds > 0){
              countdownElement.innerHTML = `${days.toString().padStart(2, '0')} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
            } else if (seconds <0) {
              countdownElement.innerHTML = 'Round 2 has ended!';
            }
        }, 1000);
    }

    updateChangingText();
    updateCountdown();
});
