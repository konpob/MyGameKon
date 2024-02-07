const words = `Chapter1 Mr. Yom's Warning. The story begins with Ing-orn, a diligent factory worker who spends her days working tirelessly . However, on her day off , 
she unexpectedly encounters Mr.Yom , a man with a mysterious and important message about her limited remaining days . 
As Mr.Yom repeatedly calls out , Miss Ing-orn Boonmee, Ing-orn hesitates before finally responding with a curious inquiry . 
'Are you calling me, Uncle Yom?' she asks . 'Yes, I am Mr.Yom,' he replies . 'Why have you come to call me, Mr.Yom?' inquires Ing-orn . 
I've come to warn you, he responds . 'To warn me about what?' she asks , a sense of unease creeping in . 'Your life has only two days left , 
'Mr.Yom gravely informs her . 'What? My life is only left for two days?' Ing-orn exclaims in disbelief . Mr.Yom nods, confirming her worst fears . 
'Yes. So, what should I do?' she asks , a mix of fear and confusion in her voice . 'You need to prepare yourself, mentally and emotionally, 
'Mr.Yom advises . 'Alright,' she responds . 'I'll give you something. Will you take it?' Mr.Yom offers . 'Yes, I'll take it. What is it?' 
Ing-orn inquires . 'I'll give you a dimension game a garden where you can cultivate anything you desire. Would you like that?' 
Mr.Yom explains . 'Yes, please. How do I use it?' she asks eagerly . 'Simply immerse yourself in the game . When you decide to leave the game , 
do so in the same manner,' he instructs . 'What does the dimension game offer, Mr.Yom?' she wonders . 'In the game dimension, 
there's everything you might need . agricultural stores , fertilizer shops , general stores , clothing stores , gift shops , 
and even weapon stores with all types of weapons used by the military , including guns , knives, 'Mr.Yom details. 
'Can I use everything in this dimension in our world?' Ing-orn asks . 'Yes, you can use everything in the game dimension and shops, but not in this world,' Mr.Yom clarifies . 
'Why can't I use them in this world?' she questions . 'You'll understand when the time comes . 
Keep it in mind, and you'll know when it's time,' Mr.Yom hints . 'Understood,' Ing-orn acknowledges . 'When you understand, it's good. Now, it's time for me to go,' Mr.Yom bids farewell . 
Before he can say anything further, his mystical presence begins to fade , leaving Ing-orn alone with her thoughts . 
The next morning , she wakes up and hurriedly checks if the items Mr.Yom provided were real or just a dream . Deep in thought , Ing-orn contemplates entering the game . 
A hologram appears, signaling the start of the dimension game download . The system is downloading to enter the dimension game garden. Please wait a moment, 
the AI system announces . 0% 3% 8% 14% 25% 41% 59% 65% 80% 93% 96% 100% System entry complete. With the system entry complete . 
Ing orn talks to herself and starts the game as the Yom's emissaries slowly disappear along with the hologram . 
Mr.Yom said we only have two days left to live or is this just a dream ? Well, let's start playing the game rather than dwelling on it, Ing orn decides . 
She immerses herself in the game , exploring its intricacies . After a while , she completes her personal errands and returns 
to play the game until she feels drowsy . Entering her room , she contemplates the hologram that appears when entering the game , and with that, 
she falls asleep , eagerly anticipating the adventures that await her in the game . As she awakens , she thinks about the impending two days left in her life 
and contemplates the mysterious game dimension bestowed upon her . Ing-orn decides to make the most of her remaining time , 
ready to embrace whatever challenges the game dimension has in store . The narrative captures the reader's attention with its intriguing setup , 
blending the ordinary with the extraordinary , and introduces the central theme of an alternate dimension game that holds the key to Ing-orn's fate . 
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
    checkAllCorrect(); // เรียกใช้ฟังก์ชัน checkAllCorrect จาก js.js
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

