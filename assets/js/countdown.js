document.addEventListener('DOMContentLoaded', function() {


    const changingText = document.querySelector('.changing-text span');
    const countdownElement = document.getElementById('countdown');
    const endDate = new Date('2023-09-01T00:00:00').getTime();

    function updateChangingText() {
        const texts = ['mastery', 'brilliance', 'proficiency'];
        let currentIndex = 0;

        setInterval(() => {
            changingText.textContent = texts[currentIndex];
            currentIndex = (currentIndex + 1) % texts.length;
        }, 2500);
    }

    function updateCountdown() {
        setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days.toString().padStart(2, '0')} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    updateChangingText();
    updateCountdown();
});