var video_btn = document.querySelector('#video-btn');
var sound_btn = document.querySelector('#sound-btn');

if (video_btn && sound_btn) {
    video_btn.addEventListener('click', event => {
        console.log('Video element was clicked!');
    });
    sound_btn.addEventListener('click', event => {
        console.log('Sound element was clicked!')
    });
}
