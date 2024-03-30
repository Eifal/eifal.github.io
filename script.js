function loadCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

window.addEventListener('load', function() {
  loadCSS('https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css');
});

function addRippleEffect(event) {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    const rippleEffect = document.createElement("span");
    rippleEffect.classList.add("ripple");
    rippleEffect.style.left = `${x}px`;
    rippleEffect.style.top = `${y}px`;

    const target = event.target.closest("a");
    target.appendChild(rippleEffect);

    setTimeout(() => {
      rippleEffect.remove();
    }, 800);
  }
