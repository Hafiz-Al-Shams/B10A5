document.getElementById('show-history-btn').addEventListener('click', function () {
    document.getElementById('show-history-btn').classList.add('bg-btn-bg', 'border-0');
    document.getElementById('show-donation-btn').classList.remove('bg-btn-bg', 'border-0');
    document.getElementById('cards-container').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('static-modal').classList.add('hidden');
});


document.getElementById('show-donation-btn').addEventListener('click', function () {
    document.getElementById('show-donation-btn').classList.add('bg-btn-bg', 'border-0');
    document.getElementById('show-history-btn').classList.remove('bg-btn-bg', 'border-0');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('cards-container').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
    document.getElementById('static-modal').classList.add('hidden');
});