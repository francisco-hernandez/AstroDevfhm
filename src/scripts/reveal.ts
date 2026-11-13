// Aparición al entrar en pantalla (una sola vez), con escalonado entre hermanos.
const els = [...document.querySelectorAll<HTMLElement>('.reveal')];

// escalonado: cada .reveal espera 90 ms más que el anterior dentro del mismo contenedor (máx. 0,45 s)
const groups = new Map<Element, HTMLElement[]>();
for (const el of els) {
  const parent = el.parentElement!;
  if (!groups.has(parent)) groups.set(parent, []);
  groups.get(parent)!.push(el);
}
for (const list of groups.values()) {
  list.forEach((el, i) => el.style.setProperty('--stagger', `${Math.min(i * 0.09, 0.45)}s`));
}

if (!('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
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
