import { songs } from './songs.js'

console.log(songs)


//random num gen between length of the array
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand = getRandomInt(0, songs.length - 1);

let video;

const clickToStart = document.querySelector('.click-to-start');
const sortDown = document.querySelector('.fa-sort-down');
const clickToStartLink = document.getElementById('click-to-start-link');
const body = document.querySelector('body');
let upArrowBtn;

clickToStart.addEventListener('click', () => {

    console.log('clicked');

    body.insertAdjacentHTML('beforeend', `
        <div class="video-container">
            <a href="#front" id="link">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
            <i class="fa-solid fa-compact-disc">
                <div class="music-info">
                    <h6 class="artist-name"><a href="${songs[rand].artistUrl}" target="_blank" id="link">${songs[rand].artistName}</a></h6>
                    <h2 class="song-name"><a href="${songs[rand].songUrl}" target="_blank" id="link">${songs[rand].name}</a></h2>
                </div>
            </i>
            <video loop id="${songs[rand].link}" class="video">
                <source src="${songs[rand].url}">
            </video>
        </div>
    `);

    video = document.getElementById(`${songs[rand].link}`);
    upArrowBtn = document.querySelector('.fa-arrow-up');

    upArrowBtn.addEventListener('click', () => {

        let deleteEl = setInterval(() => {
            const videoContainer = document.querySelector('.video-container');
            videoContainer.remove();
            clearInterval(deleteEl);

            rand = getRandomInt(0, songs.length - 1);
        }, 300)

    })

    clickToStartLink.setAttribute('href', `#${songs[rand].link}`)
    video.play();
    fadeInAudio();
})

// sortDown.addEventListener('click', ()=>{
//     console.log('clicked');

//     body.insertAdjacentHTML('beforeend', `
//         <div class="video-container">
//             <a href="#front" id="link">
//                 <i class="fa-solid fa-arrow-up"></i>
//             </a>
//             <a href="#${songs[rand].link}" id="link">
//                 <i class="fa-solid fa-sort-down"></i>
//             </a>
//             <i class="fa-solid fa-compact-disc">
//                 <div class="music-info">
//                     <h6 class="artist-name"><a href="${songs[rand].artistUrl}" target="_blank" id="link">${songs[rand].artistName}</a></h6>
//                     <h2 class="song-name"><a href="${songs[rand].songUrl}" target="_blank" id="link">${songs[rand].name}</a></h2>
//                 </div>
//             </i>

//             <video id="${songs[rand].link}" class="video">
//                 <source src="${songs[rand].url}">
//             </video>
//         </div>
//     `);

//     video = document.getElementById(`${songs[rand].link}`);
//     upArrowBtn = document.querySelector('.fa-arrow-up');

//     upArrowBtn.addEventListener('click', () => {

//         let deleteEl = setInterval(() => {
//             const videoContainer = document.querySelector('.video-container');
//             videoContainer.remove();
//             clearInterval(deleteEl);

//             rand = getRandomInt(0, songs.length - 1);
//         }, 300)

//     })

//     clickToStartLink.setAttribute('href', `#${songs[rand].link}`)
//     video.play();
//     fadeInAudio();
// })


function fadeInAudio() {
    video.volume = 0;
    video.play();

    let fade = setInterval(() => {
        if (video.volume + 0.1 >= 1) {
            video.volume = 1;
            clearInterval(fade);
        } else {
            video.volume += 0.1;
        }
    }, 150);
}


//opening blur
window.addEventListener("load", function () {
    const frontPage = document.getElementById('front');

    let blurValue = 70;

    let blur = setInterval(() => {
        if (blurValue > 0) {
            blurValue -= 1
            frontPage.style.filter = `blur(${blurValue}px)`
        } else {
            clearInterval(blur);
        }
    }, 50);
});