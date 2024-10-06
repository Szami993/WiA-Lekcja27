document.getElementById('zyczenia-btn').addEventListener('click', function() {
    var zyczenia = document.getElementById('zyczenia');
    if (zyczenia.style.display === 'none') {
        zyczenia.style.display = 'block'; 
    } else {
        zyczenia.style.display = 'none'; 
    }
});