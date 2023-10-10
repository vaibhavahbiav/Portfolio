const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select a media stream, pass to video, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        // catch error
        console.log('ZARK!', error);
    }
}

button.addEventListener('click', async() => {
    // disable button
    button.disabled = true;
    // start PIP
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();