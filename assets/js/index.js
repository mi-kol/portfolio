const profilePicture = document.querySelector('.profile__body__headshot');
const drawSwitchElements = document.querySelectorAll('.switch');
const modeSwitch = new Event('modeSwitch');

let mode = true;
// mode = true is in photo mode

profilePicture.addEventListener('click', 
    e => {
        mode = mode ? false : true;
        document.dispatchEvent(modeSwitch);
        // console.log('hello');
    }
);

document.addEventListener('modeSwitch', e => {
    drawSwitchElements.forEach(elem => {
        elem.src = `assets/img/${!mode ? 'drawn/' : ''}${elem.dataset.srcstr}.png`;
        elem.classList[!mode ? 'add' : 'remove']('drawn');
    });
});


