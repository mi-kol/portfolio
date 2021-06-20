const profileCard = document.querySelector('#profileCardTemplate .profile');
const developerCard = document.querySelector('#developerTemplate .dev-profile');

tippy('.profile', {
    allowHTML: true,
    interactive: true,
    content: developerCard,
    arrow: false,
    triggerTarget: document.querySelector('#developer'),
    placement: 'top',
    maxWidth: '550',
    interactiveBorder: 40
});

tippy('#name', {
    allowHTML: true,
    interactive: true,
    content: profileCard,
    arrow: false,
    animation: 'shift-away-extreme',
    interactiveBorder: 40
});