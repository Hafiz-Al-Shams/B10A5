document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = './blog.html';
});

document.getElementById('close-confirm-btn').addEventListener('click', function () {
    document.getElementById('static-modal').classList.add('hidden');
});