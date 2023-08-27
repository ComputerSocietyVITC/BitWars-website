for(let i=0; i<3; i++){
    const showBlurButton = document.getElementById('showBlurButton'.concat(i));
    const blurContainer = document.getElementById('blurContainer'.concat(i));
    const bitwarsimg = document.getElementById('bitwars');
    const changingtext = document.getElementById('changing-text-blur')
    const header = document.getElementById('header');

    showBlurButton.addEventListener('click', () => {
        blurContainer.style.display = 'block';
        bitwarsimg.style.display = 'hidden';
        changingtext.style.display = 'hidden';
        header.style.display = 'hidden';
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            blurContainer.style.opacity = '1';
            bitwarsimg.style.opacity = '0';
            changingtext.style.opacity = '0';
            header.style.opacity = '0';
        }, 10);
    });

    blurContainer.addEventListener('click', () => {
        blurContainer.style.opacity = '0';
        bitwarsimg.style.opacity = '0';
        changingtext.style.opacity = '0';
        header.style.opacity = '0';
        setTimeout(() => {
            blurContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
            bitwarsimg.style.opacity = '1';
            changingtext.style.opacity = '1';
            header.style.opacity = '1';
        }, 500);
    });
};