const songs = [
    {
        name: 'alag-aasmaan',
        artistName: 'Anuv Jain',
        link: 'alag-aasmaan',
    },
    {
        name: 'Do You Know, Do You Care?',
        artistName: 'Phil Collins',
        link: 'do-you-know',
    }
    ,
    {
        name: 'Tweak',
        artistName: 'Duwap Kaine',
        link: 'tweak',
    }
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(songs.length)

const rand = getRandomInt(0, songs.length - 1);

console.log(rand);

const video = document.getElementById(`${songs[rand].link}`);

const clickToStart = document.querySelector('.click-to-start');
const clickToStartLink = document.getElementById('click-to-start-link');

clickToStart.addEventListener('click', () => {

    clickToStartLink.setAttribute('href', `#${songs[rand].link}`)
    video.play();
    fadeInAudio();


})

function fadeInAudio() {
    video.volume = 0;
    video.play();

    let fade = setInterval(() => {
        if (video.volume < 1) {
            video.volume += 0.1; // Increase volume
        } else {
            clearInterval(fade); // Stop when volume is 1
        }
    }, 150); // Adjust speed of fade-in
}

window.addEventListener("load", function () {
    const frontPage = document.getElementById('front');

    let blurValue = 70;

    console.log(blurValue);

    let blur = setInterval(() => {
        if (blurValue > 0) {
            blurValue -= 1
            frontPage.style.filter = `blur(${blurValue}px)`
        } else {
            clearInterval(blur); // Stop when volume is 1
        }
    }, 50);
});