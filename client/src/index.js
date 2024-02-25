import './styles.css';

const magicBall = document.getElementById('magic-ball'),
    answerDiv = document.getElementById('answer'),
    answers = [
        "Так",
        "Ні",
        "Можливо",
        "Спробуй знову",
        "Не розраховуй на це",
        "Впевнений у цьому"
    ];

magicBall.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerDiv.textContent = answers[randomIndex];
    answerDiv.classList.add('show');
    magicBall.classList.add('shake-animation');

    setTimeout(function () {
        answerDiv.classList.remove('show');
        setTimeout(() => {
            magicBall.classList.remove('shake-animation');
        }, 30);
    }, 3000);
});
