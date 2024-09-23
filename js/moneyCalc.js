// card-1
document.getElementById('card1-btn').addEventListener('click', function () {
    const card1Donation = inputValue('card1-input');
    if (card1Donation <= 0 || isNaN(card1Donation)) {
        alert('Invalid Donation Amount!!');
        document.getElementById('card1-input').value = '';
        return;
    }
    const card1Balance = textValue('card1-balance');
    const mainBalance = textValue('main-balance');
    const newCard1Balance = card1Balance + card1Donation;
    const newMainBalance = mainBalance - card1Donation;
    if (newMainBalance < 0) {
        alert('Insufficient Balance!!');
        document.getElementById('card1-input').value = '';
        return;
    }
    document.getElementById('card1-balance').innerText = newCard1Balance;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById('card1-input').value = '';
    alert('congrats! u have donated successfully');
});

// card-2
document.getElementById('card2-btn').addEventListener('click', function () {
    const card2Donation = inputValue('card2-input');
    if (card2Donation <= 0 || isNaN(card2Donation)) {
        alert('Invalid Donation Amount!!');
        document.getElementById('card2-input').value = '';
        return;
    }
    const card2Balance = textValue('card2-balance');
    const mainBalance = textValue('main-balance');
    const newCard2Balance = card2Balance + card2Donation;
    const newMainBalance = mainBalance - card2Donation;
    if (newMainBalance < 0) {
        alert('Insufficient Balance!!');
        document.getElementById('card2-input').value = '';
        return;
    }
    document.getElementById('card2-balance').innerText = newCard2Balance;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById('card2-input').value = '';
    alert('congrats! u have donated successfully');
});

// card-3
document.getElementById('card3-btn').addEventListener('click', function () {
    const card3Donation = inputValue('card3-input');
    if (card3Donation <= 0 || isNaN(card3Donation)) {
        alert('Invalid Donation Amount!!');
        document.getElementById('card3-input').value = '';
        return;
    }
    const card3Balance = textValue('card3-balance');
    const mainBalance = textValue('main-balance');
    const newCard3Balance = card3Balance + card3Donation;
    const newMainBalance = mainBalance - card3Donation;
    if (newMainBalance < 0) {
        alert('Insufficient Balance!!');
        document.getElementById('card3-input').value = '';
        return;
    }
    document.getElementById('card3-balance').innerText = newCard3Balance;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById('card3-input').value = '';
    alert('congrats! u have donated successfully');
});


