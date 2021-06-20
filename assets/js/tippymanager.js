const profileCard = document.querySelector('#profileCardTemplate .profile');
const developerCard = document.querySelector('#developerTemplate .dev-profile');
const developerDetails = document.querySelector('#developerDetails .language-details');

tippy('.dev-profile', {
    allowHTML: true,
    interactive: true,
    content: developerDetails,
    arrow: false,
    triggerTarget: [...document.querySelectorAll('.dev-profile__body img')],
    placement: 'top',
    interactiveBorder: 40
})

tippy('.profile', {
    allowHTML: true,
    interactive: true,
    content: developerCard,
    arrow: false,
    triggerTarget: document.querySelector('#developer'),
    placement: 'top',
    maxWidth: '550',
    interactiveBorder: 40,
    sticky: 'reference'
});

tippy('#name', {
    allowHTML: true,
    interactive: true,
    content: profileCard,
    arrow: false,
    animation: 'shift-away-extreme',
    interactiveBorder: 40,
    sticky: 'reference'
});