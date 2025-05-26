// ==============================
// 🌱 Sélection des éléments
// ==============================



// ==============================
// 🌍 Variables globales
// ==============================



// ==============================
// 🎊 Fonctionnalités
// ==============================

const container = document.getElementById('circleContainer');
const container2 = document.getElementById('circleContainer2');
const itemCount = 15;
const radius = 400;
const radiusDeux = 800;
const animationName = 'rotateItem';
const animationName2 = 'rotateItem2';

for (let i = 0; i < itemCount; i++) {
  const angle = (360 / itemCount) * i;
  const img = document.createElement('img');
  img.src = './../img/Felipo2.png'; // Remplace par le chemin de ton image
  img.className = `image-item felipo${i}`;
  img.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;

  const anim = `${animationName}-${i}`;
  img.style.animation = `${anim} 20s linear infinite`;

  // Génère une animation spécifique à cet angle
  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes ${anim} {
      0% {
        transform: rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg);
      }
      100% {
        transform: rotate(${angle + 360}deg) translate(${radius}px) rotate(-${angle + 360}deg);
      }
    }
  `;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  container.appendChild(img);
}

for (let i = 0; i < itemCount; i++) {
  const angle = (360 / itemCount) * i;
  const img = document.createElement('img');
  img.src = './../img/Felipo2.png'; // Remplace par le chemin de ton image
  img.className = `image-item felipo${i}`;
  img.style.transform = `rotate(${angle}deg) translate(${radiusDeux}px) rotate(-${angle}deg)`;

  const anim = `${animationName2}-${i}`;
  img.style.animation = `${anim} 20s linear infinite`;

  // Génère une animation spécifique à cet angle
  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes ${anim} {
      0% {
        transform: rotate(${angle}deg) translate(${radiusDeux}px) rotate(-${angle}deg);
      }
      100% {
        transform: rotate(${angle + 360}deg) translate(${radiusDeux}px) rotate(-${angle + 360}deg);
      }
    }
  `;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  container2.appendChild(img);
}


// ==============================
// 🧲 Événements
// ==============================
