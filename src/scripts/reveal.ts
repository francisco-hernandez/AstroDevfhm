// Aparición al entrar en pantalla (una sola vez), con escalonado entre hermanos.
const els = [...document.querySelectorAll<HTMLElement>('.reveal')];

// escalonado: cada .reveal espera 80 ms más que el anterior dentro del mismo contenedor (máx. 0,4 s)
const groups = new Map<Element, HTMLElement[]>();
for (const el of els) {
  const parent = el.parentElement!;
  if (!groups.has(parent)) groups.set(parent, []);
  groups.get(parent)!.push(el);
}
for (const list of groups.values()) {
  list.forEach((el, i) => el.style.setProperty('--stagger', `${Math.min(i * 0.08, 0.4)}s`));
}

if (!('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const tall = e.boundingClientRect.height > innerHeight * 0.8;
        if (e.isIntersecting && (e.intersectionRatio >= 0.35 || (tall && e.intersectionRatio >= 0.2))) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    // como pilateslabv4: arranca cuando se ve ~un tercio del elemento (o 20 % si es muy alto)
    { rootMargin: '0px 0px -6% 0px', threshold: [0.2, 0.35] },
  );
  els.forEach((el) => io.observe(el));
}

// imágenes: se funden cuando terminan de cargar
for (const img of document.querySelectorAll<HTMLImageElement>('img.fade-img')) {
  const done = () => img.classList.add('is-loaded');
  if (img.complete && img.naturalWidth) requestAnimationFrame(done);
  else {
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }
}
