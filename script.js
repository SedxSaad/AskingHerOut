// script.js

let gifIndex = 1;

function switchGifs() {
  const initialGif = document.querySelector('.initial-gif');
initialGif.style.width = '100%';
  const yesButton = document.querySelector('.yes-btn');
  const noButton = document.querySelector('.no-btn');

  if (gifIndex === 1) {
    initialGif.src = "howmuch.GIF";
    gifIndex = 2;

    // Remove existing buttons
    yesButton.remove();
    noButton.remove();

    // Add new buttons
    const beyondBtn = createButton('To beyond this universe and back', 'beyond-btn');
    const littleToNoneBtn = createButton('Little to none', 'no-btn');

    document.querySelector('.container').appendChild(beyondBtn);
    document.querySelector('.container').appendChild(littleToNoneBtn);

    // Add event listener to "Little to none" button
    littleToNoneBtn.addEventListener('click', function(event) {
      event.preventDefault();
      shakeNo();
      // Add any additional logic if needed
    });

    // Add event listener to "To beyond this universe" button
    beyondBtn.addEventListener('click', function(event) {
      event.preventDefault();
      initialGif.src = "iknew.GIF";
initialGif.style.width = '100%';
      document.querySelector('.beyond-btn').remove();
      document.querySelector('.no-btn').remove();

      const surpriseBtn = createButton('Surprise me now', 'surprise-btn');
      const fuckYouBtn = createButton('Fuck you', 'no-btn');

      document.querySelector('.container').appendChild(surpriseBtn);
      document.querySelector('.container').appendChild(fuckYouBtn);

      // Add event listener to "Fuck you" button
      fuckYouBtn.addEventListener('click', function(event) {
        event.preventDefault();
        shakeNo();
        // Add any additional logic if needed
      });

// ... (existing code)

// Add event listener to "Surprise me now" button
// ... (existing code)

// Add event listener to "Surprise me now" button
surpriseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Change the GIF to "iloveyoumore.HEIC" (Update the path accordingly)
  initialGif.src = "iloveyoumore.HEIC";

  // Remove existing buttons
  document.querySelector('.surprise-btn').remove();
  document.querySelector('.no-btn').remove();

  // Add new text below the image
  const loveText = document.createElement('p');
  loveText.textContent = "I love you more ♥️";
  document.querySelector('.container').appendChild(loveText);


  // Add new buttons
  const awwCuteBtn = createButton('Aww cute', 'aww-cute-btn');
  const iKnowYouDoBtn = createButton('I know you do baby', 'iknowyoudo-btn');

  document.querySelector('.container').appendChild(awwCuteBtn);
  document.querySelector('.container').appendChild(iKnowYouDoBtn);

  // Add event listeners to new buttons
  awwCuteBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Add any logic for "Aww cute" Button
const cuteGif = document.createElement('img');
  cuteGif.src = "cute.GIF";
cuteGif.style.width = '100%';
  		  document.querySelector('.container').appendChild(cuteGif);

  // Create and append video
// Create and append video
const saadCuteGif = document.createElement('img');
saadCuteGif.src = "saadcute.gif";
//cuteVideo.autoplay = true;
saadCuteGif.style.width = '100%'; // Set the width to full for video
  document.querySelector('.container').appendChild(saadCuteGif);

  document.querySelector('.aww-cute-btn').remove();
  document.querySelector('.iknowyoudo-btn').remove();
  document.querySelector('p').remove();
  });

  iKnowYouDoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Add any logic for "I know you do baby" button
  });
});

// ... (existing code)

// ... (existing code)
    });
  }
}

function shakeNo() {
  const noButton = document.querySelector('.no-btn');
  noButton.classList.add('shake-on-click');
  setTimeout(() => {
    noButton.classList.remove('shake-on-click');
  }, 500);
}

function createButton(text, className) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className, 'shake-on-click');
  return button;
}