function getRandomRGB() {
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  }
  
  
  function randomColors1() {
    for (let i = 1; i <= 6; i++) {
      const card = document.getElementById(`card${i}`);
      console.log(card);
      card.style.backgroundColor = getRandomRGB();
    }
  }
  

  // randomColors1();