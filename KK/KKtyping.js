const words = `Football-talent-It's-all-mine. Part1 in-my childhood. I-have-a-dream to-be-a-football-player The-best-in-the-world 
Ho-Toung, what-is-your-dream? I-will-be-a-football-player-who-is-as-talented-as-Park-Ji-Sung. To-be-a-football-player-you-must-have-talent,-son. 
And-Dad-thinks-that-Ho-Young-must-have-special-talents. I-thought-my-father-was-right. Is-it-true? 
I-believe-I-have-talent-and-am-a-football-prodigy. In2002 I-entered-the-football-academy-with-high-expectations. 
but... Aha! I'm-not-suitable-for-children. who-have-received-professional-training I-fell-again. Ho-Young. Yes,coach! 
Sh-had-to-practice-separating. , That-is-a-group-of-children-who-are-below-the-standard... I-feel-like-there's-a-wall. 
A-huge-wall-prevents-me-from-moving-forward. Then-I-left-the-football-academy-like-I-was-escaping. , Ho-Young, Everyone-blossoms-at-their-own-pace. 
Just-because-the-seedlings-grow-quickly,That-doesn't-mean-the-flowers-will-bloom-quickly. I-won't-give-up? Do-I-really-have-talent? 
If-I-train-hard-Until-then,I-will-blossom.And-it's-bearing-fruit,right? Year-2016 Oh my! Hey,why-are-you-like-that?,Are-you-drunk?,friends-say 
There's-nothing.Congratulations-on-being-accepted. You-congratulated-me-on-your-visit-earlier.friends-say So-when-will-we-celebrate?,If-it-weren't-for-a-day-like-this 
We-should-celebrate-good-things-like-this. Yes,this-is-the-time-to-celebrate. My-friend-Lee-Young-Soo-was-sitting-in-front-of-me. Join-a-professional-football-club , 
If-compared-to-my-work-is-a-part-time-clerk. , , I-also-want-to-be-a-professional-footballer! I'm-really-stupid!! At-that-time,I-shouldn't-have-given-up. 
If-I-were-still-playing-football-by-now,that-would-probably-be-me. If-it-were-true,I-would-have-won-the-Ballon-d'Or.LeeYoung-Soo-said. Besides,nothing-has-changed-anyway.If-you're-going-to-regret-it,LeeYoung-Soo-said. 
I'm-going-to-be-late,LeeYoung-Soo-said. I-feel-sorry-Since-then. I-don't-want-to-just-play-football-as-a-hobby. At-that-time,I-didn't-want-to-give-up. 
Even-after-that-I-had-many-opportunities-but... I-just-regret-it-over-and-over.And-I-think-it's-too-late. I-want-to-go-back!! I-want-to-start-again. I'm-really-stupid!! , 
Hey,do-you-want-to-play-football-now?,LeeYoung-Soo-said Huh? Sangho-needs-two-people-to-play-4v4-futsal.LeeYoung-Soo-said now? Take-it! End-of-part1 
`.split(' ');

const wordsCount = words.length;
let currentWordIndex = 0;
let correctLettersCount = 0;


function addClass(el,name) {
  el.className += ' '+name;
};
function removeClass(el,name) {
  el.className = el.className.replace(name,'');
};

function getNextWord() {
    const word = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % wordsCount;  // เลื่อนไปคำถัดไป และวนกลับไปที่คำแรกเมื่อถึงคำสุดท้าย
    return word;
};

function CheckAllCorrect() {
    checkAllCorrect(); 
};
function ShowNextImage() {
    showNextImage(); 
};

function formatWord(word) {
  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
};

function newGame() {
    const wordsContainer = document.getElementById('words');
    const allWordsHTML = words.map(formatWord).join('');
    wordsContainer.innerHTML = allWordsHTML;
  
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
  };


// การกด key game
document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;
    
    console.log({key,expected});

    // กฏเมื่อ พิมถูก และ พิมผิด
    if (isLetter) {
        if (currentLetter) {
          addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
          removeClass(currentLetter, 'current');
          if (key === expected) {
            correctLettersCount++;
          }
          if (currentLetter.nextSibling) {
            addClass(currentLetter.nextSibling, 'current');
          }
        } else {
          // ในกรณีที่ currentLetter ไม่มี, คือเริ่มต้นพิมคำใหม่
          correctLettersCount = 0;
        }
      }      
  
    // กฎการกดข้ามคำ
    if (isSpace) {
      // ตรวจสอบว่าทุกตัวอักษรในคำปัจจุบันถูกต้องหรือไม่ ถ้าถูกให้ขึ้นคำแปล
      if (isSpace && expected === ' ') {
        const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
        lettersToInvalidate.forEach(letter => {
          addClass(letter, 'incorrect');
        });
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        addClass(currentWord.nextSibling.firstChild, 'current');
        // ตรวจสอบว่าทุกตัวอักษรในคำปัจจุบันถูกต้องหรือไม่ ถ้าถูกให้ขึ้นคำแปล
        CheckAllCorrect();
        ShowNextImage();
      }
      if (isSpace && expected === '\n'){
        if (currentLetter) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.nextSibling, 'current');
          }
      }
    }
  
    // กฎการลบ
    if (isBackspace) {
      const currentWord = document.querySelector('.word.current');
      const allCorrect = [...document.querySelector('.word.current').children].every(child => {
        return child.classList.contains('correct');
    });

      if (allCorrect&& correctLettersCount > 0) {
        removeClass(document.querySelector('.letter.current'), 'current');
        ev.preventDefault();
        correctLettersCount--;
      }
      
      if (currentLetter && !isFirstLetter) {
        removeClass(currentLetter, 'current'); // ลบคลาส 'current' ออกจาก currentLetter
        addClass(currentLetter.previousSibling, 'current'); // เพิ่มคลาส 'current' ให้กับลูกพี่ของ currentLetter
        removeClass(currentLetter.previousSibling, 'incorrect'); // ลบคลาส 'incorrect' ออกจากลูกพี่ของ currentLetter
        removeClass(currentLetter.previousSibling, 'correct'); // ลบคลาส 'correct' ออกจากลูกพี่ของ currentLetter
      }

      if (!currentLetter) {
        addClass(currentWord.lastChild, 'current'); // เพิ่มคลาส 'current' ให้กับลูกสุดท้ายของ currentWord
        removeClass(currentWord.lastChild, 'incorrect'); // ลบคลาส 'incorrect' ออกจากลูกสุดท้ายของ currentWord
        removeClass(currentWord.lastChild, 'correct'); // ลบคลาส 'correct' ออกจากลูกสุดท้ายของ currentWord
      }      
    }

    if (currentWord.getBoundingClientRect().top > 250) {
      const words = document.getElementById('words');
      const margin = parseInt(words.style.marginTop || '0px');
      words.style.marginTop = (margin - 35) + 'px';
    }
  
    // อนิเมชั่นเคอเชอ
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
  });
  
  newGame();

