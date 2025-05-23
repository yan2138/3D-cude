
const cubeContainer = document.getElementById('cube-container');
const cube = document.createElement('div');
cube.classList.add('cube');
cubeContainer.appendChild(cube);

const faces = ['1', '2', '3', '4', '5', '6'];

faces.forEach((face, index) => {
  const faceDiv = document.createElement('div');
  faceDiv.classList.add('face');
  faceDiv.textContent = face;
  switch (index) {
    case 0:
      faceDiv.style.transform = 'rotateX(90deg) translateZ(150px)';
      break;
    case 1:
      faceDiv.style.transform = 'rotateX(-90deg) translateZ(150px)';
      break;
    case 2:
      faceDiv.style.transform = 'rotateY(90deg) translateZ(150px)';
      break;
    case 3:
      faceDiv.style.transform = 'rotateY(-90deg) translateZ(150px)';
      break;
    case 4:
      faceDiv.style.transform = 'translateZ(150px)';
      break;
    case 5:
      faceDiv.style.transform = 'translateZ(-150px)';
      break;
  }
  cube.appendChild(faceDiv);
});

let lastX = 0;
let lastY = 0;
let isDragging = false;
cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.pageX;
  lastY = e.pageY;
});
document.addEventListener('mouseup', () => {
  isDragging = false;
});
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = e.pageX - lastX;
    const dy = e.pageY - lastY;
    cube.style.transform += ` rotateX(${dy * 0.2}deg) rotateY(${dx * 0.2}deg)`;
    lastX = e.pageX;
    lastY = e.pageY;
  }
});