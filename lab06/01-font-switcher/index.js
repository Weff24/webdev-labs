const makeBigger = () => {
   // alert('make bigger!');
   let contentFontSize = parseFloat(getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size'));
   contentFontSize += 3;
   let newContentFontSize = contentFontSize + 'px'
   document.querySelector('.content').style.fontSize = newContentFontSize;

   let h1FontSize = parseFloat(getComputedStyle(document.querySelector('h1')).getPropertyValue('font-size'));
   h1FontSize += 3;
   let newH1FontSize = h1FontSize + 'px'
   document.querySelector('h1').style.fontSize = newH1FontSize;
};

const makeSmaller = () => {
   // alert('make smaller!');
   let contentFontSize = parseFloat(getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size'));
   contentFontSize -= 3;
   let newContentFontSize = contentFontSize + 'px'
   document.querySelector('.content').style.fontSize = newContentFontSize;

   let h1FontSize = parseFloat(getComputedStyle(document.querySelector('h1')).getPropertyValue('font-size'));
   h1FontSize -= 3;
   let newH1FontSize = h1FontSize + 'px'
   document.querySelector('h1').style.fontSize = newH1FontSize;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

