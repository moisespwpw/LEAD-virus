document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('videoOverlay').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('videoOverlay').style.display = 'none';
});
