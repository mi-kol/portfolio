const profileCard = document.querySelector('#profileCardTemplate .profile');
const developerCard = document.querySelector('#developerTemplate .dev-profile');
const developerDetails = document.querySelector('#developerDetails .language-details');
const workedDropdown = document.querySelector('#workedDropdown .options');
const workedDropdownBelow = document.querySelector('#workedDropdownBelow .options');


tippy('.dev-profile', {
    allowHTML: true,
    interactive: false,
    content: developerDetails,
    arrow: false,
    triggerTarget: [...document.querySelectorAll('.dev-profile__body img')],
    placement: 'top',
    interactiveBorder: 40,
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
    sticky: 'reference',
    onTrigger(instance) {
        instance.props.triggerTarget.classList.add('selected');
    },
    onUntrigger(instance) {
        instance.props.triggerTarget.classList.remove('selected');
    }
});

tippy('#name', {
    allowHTML: true,
    interactive: true,
    content: profileCard,
    arrow: false,
    animation: 'shift-away-extreme',
    interactiveBorder: 40,
    sticky: 'reference',
    onTrigger(instance) {
        instance.reference.classList.add('selected');
    },
    onUntrigger(instance) {
        instance.reference.classList.remove('selected');
    }
});

tippy('.headline', {
    allowHTML: true,
    interactive: true,
    content: `<h2><a href="mailto:mikol.aspinwall@gmail.com">Email me. Let's create something awesome.</a></h2>`,
    arrow: false,
    interactiveBorder: 40,
    sticky: 'reference',
    triggerTarget: document.querySelector('#work'),
    placement: 'bottom',
    onTrigger(instance) {
        instance.props.triggerTarget.classList.add('selected');
    },
    onUntrigger(instance) {
        instance.props.triggerTarget.classList.remove('selected');
    },
    maxWidth: 'none'
})