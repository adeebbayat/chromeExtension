// everytime you click the background color changes

// everytime you click cat photo jumps to your cursor 



document.onclick = function changeImage() {
  const images = document.querySelectorAll('img')
  images.forEach((img) => img.src = 'https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x2.jpg?w=1638&h=1092')
  
  };
  
    var cursorX;
    var cursorY;
    let count =0;
    let threeExist = false;
    
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
  
    const mouse = document.createElement('img')
    mouse.src = 'https://www.jax.org/-/media/jaxweb/images/why-the-mouse/mouse.jpg?rev=2ea1e36c170c4f3b9483b87824d4e6d6&hash=4F79807E8870DA4772A250B12734BCFD'
    mouse.setAttribute('class','mouse')
    mouse.style.width = '100px';
    mouse.style.height = '100px';
    mouse.style.position = 'absolute'
    mouse.style.top = `${cursorY+10}px`;
    mouse.style.left = `${cursorX+10}px`;
    document.body.appendChild(mouse)
    count++;
    if(count > 3) threeExist = true;
    if(threeExist) document.querySelector('.mouse').remove();
  }