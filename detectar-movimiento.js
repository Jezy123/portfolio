const totalFrames = 200;
const imagenes = [];

// Pre-cargar imágenes
for (let i = 1; i <= totalFrames; i++) {
  const frameStr = String(i).padStart(3, '0');
  const img = new Image();
  img.src = `frame2/ezgif-frame-${frameStr}.jg`;
  imagenes.push(img);
}

let lastX = null;
let lastY = null;
let frame = 1;
const threshold = 50;
const animacion = document.getElementById('animacion');

document.addEventListener("mousemove", (event) => {
  if (lastX === null || lastY === null) {
    lastX = event.clientX;
    lastY = event.clientY;
    return;
  }

  const dx = Math.abs(event.clientX - lastX);
  const dy = Math.abs(event.clientY - lastY);

  if (dx > threshold || dy > threshold) {
    console.log("🎯 Movimiento del ratón detectado.");

    const frameStr = String(frame).padStart(3, '0');
    animacion.src = `frame2/ezgif-frame-${frameStr}.jpg`;

    lastX = event.clientX;
    lastY = event.clientY;

    frame++;
    if (frame > totalFrames) {
      frame = 1;
    }
  }
});
