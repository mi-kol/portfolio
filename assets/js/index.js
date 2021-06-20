const profilePicture = document.querySelector('.profile__body__headshot');
const drawSwitchElements = document.querySelectorAll('.switch');
const modeSwitch = new Event('modeSwitch');

const developerDetailIcons = document.querySelectorAll('.dev-profile__body img');
const developerDetailInfo = document.querySelector('#developerDetails .info');

let mode = true;
// mode = true is in photo mode

const developerInformation = {
    'js': 'Most of my daily programming at Everence is spent in JS. I love the ecosystem and love finding creative ways to use it. ',
    'swift': 'Blink is written entirely in Swift, and I also have worked on some side projects. I have experience with both SwiftUI and UIKit - as well as down to the metal with Objective-C.',
    'python': 'My go-to language for getting something up and running. Most of my projects on Git are in Python, since it\'s so versatile.',
    'sql': 'I have experience with a number of different data solutions - I know SQL, and prefer to work with Postgres. Also worked with MariaDB.',
    'node': 'Node.js and back-end JS is my new go-to for quick web projects. I\'ve built everything from automated testing to choose-your-own-adventure games on this stack, and always keep going back. I prefer Express.js on top of Node for web solutions.',
    'react': 'On the front end, I\'m most experienced with React as a JS framework. I am familiar with Vue, Svelte, and Angular, but React + Hooks is what I use the most day-to-day.',
    'csharp': 'I have experience with C# and the .NET ecosystem in a corporate environment. We use this to back a massive multi-site web solution, with Sitecore CMS.',
    'selenium': 'Selenium is my preferred tool to power automated testing. I\'ve successfully used Selenium WebDriver to power automated testing tools for different business cases at two different organizations.',
    'flask': 'With Python, Flask is my favorite get-up-and-go solution for building microservices or small sites. I also have experience with Django, but prefer moving to Node.js for larger web projects.',
    'docker': 'I have experience with containerization and virtualization using Docker (and k8s, before the deprecation). I\'m most comfortable working in containerized environments matched with CI/CD.',
    'aws': 'In the cloud, I\'ve been a part of moving a large web hosting operation from local machines to AWS. I\'m experienced in AWS management, and know my way around most AWS products having to do with web services.',
    'figma': 'I like to see components from start to finish, and know Figma and UX design principles so I can build positive experiences. I love web design because I can combine practicality and creativity to make great things.'
}

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

developerDetailIcons.forEach(elem => {
    console.log(elem);
    elem.addEventListener('mouseover', e => {
        developerDetailInfo.innerHTML = developerInformation[e.target.dataset.topic];
    })
})

