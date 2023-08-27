
const showBlurButton0 = document.getElementById('showBlurButton0');
const blurContainer0 = document.getElementById('blurContainer0');
const bitwarsimg = document.getElementById('bitwars');
const changingtext = document.getElementById('changing-text-blur')
const header = document.getElementById('header');

const showBlurButton2 = document.getElementById('showBlurButton2');
const blurContainer2 = document.getElementById('blurContainer2');
const showBlurButton1 = document.getElementById('showBlurButton1');
const blurContainer1 = document.getElementById('blurContainer1');
blurContainer2.style.display = 'none';

blurContainer1.style.display = 'none';
blurContainer0.style.display = 'none';
showBlurButton0.addEventListener('click', () => {
    blurContainer0.style.display = 'none';
    blurContainer1.style.display = 'none';
    blurContainer2.style.display = 'none';
    bitwarsimg.style.display = 'block';
    changingtext.style.display = 'block';
    document.body.style.overflow = 'hidden';

    header.style.opacity = '1';

    setTimeout(() => {
        blurContainer0.style.opacity = '1';
        bitwarsimg.style.opacity = '0';
        changingtext.style.opacity = '0';
        header.style.opacity = '0';
        blurContainer0.style.display = 'block';
        blurContainer1.style.display = 'none';
        blurContainer2.style.display = 'none';
        
    }, 10);
});

blurContainer0.addEventListener('click', () => {
    blurContainer0.style.opacity = '0';
    bitwarsimg.style.opacity = '0';
    changingtext.style.opacity = '0';
    header.style.opacity = '0';
    setTimeout(() => {
        blurContainer0.style.display = 'none';
        document.body.style.overflow = 'auto';
        bitwarsimg.style.opacity = '1';
        changingtext.style.opacity = '1';
        header.style.opacity = '1';
    }, 500);
});



showBlurButton1.addEventListener('click', () => {
    blurContainer1.style.display = 'none';

    blurContainer0.style.display = 'none';
    blurContainer2.style.display = 'none';
    bitwarsimg.style.display = 'block';
    changingtext.style.display = 'block';
    header.style.opacity = '1';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        blurContainer1.style.opacity = '1';
        bitwarsimg.style.opacity = '0';
        changingtext.style.opacity = '0';
        header.style.opacity = '0';

        blurContainer0.style.display = 'none';
        blurContainer1.style.display = 'block';
        blurContainer2.style.display = 'none';
        
    }, 10);
});

blurContainer1.addEventListener('click', () => {
    blurContainer1.style.opacity = '0';
    bitwarsimg.style.opacity = '0';
    changingtext.style.opacity = '0';
    header.style.opacity = '0';
    setTimeout(() => {
        blurContainer1.style.display = 'none';
        document.body.style.overflow = 'auto';
        bitwarsimg.style.opacity = '1';
        changingtext.style.opacity = '1';
        header.style.opacity = '1';
    }, 500);
});


showBlurButton2.addEventListener('click', () => {
    blurContainer2.style.display = 'none';

    blurContainer1.style.display = 'none';
    blurContainer0.style.display = 'none';
    bitwarsimg.style.display = 'block';
    changingtext.style.display = 'block';
    header.style.opacity = '1';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        blurContainer2.style.opacity = '1';
        bitwarsimg.style.opacity = '0';
        changingtext.style.opacity = '0';
        header.style.opacity = '0';

        blurContainer0.style.display = 'none';
        blurContainer1.style.display = 'none';
        blurContainer2.style.display = 'block';
        
    }, 10);
});

blurContainer2.addEventListener('click', () => {
    blurContainer2.style.opacity = '0';
    bitwarsimg.style.opacity = '0';
    changingtext.style.opacity = '0';
    header.style.opacity = '0';
    setTimeout(() => {
        blurContainer2.style.display = 'none';
        document.body.style.overflow = 'auto';
        bitwarsimg.style.opacity = '1';
        changingtext.style.opacity = '1';
        header.style.opacity = '1';
    }, 500);
});