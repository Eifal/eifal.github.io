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
  