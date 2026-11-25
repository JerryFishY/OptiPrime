const video = document.querySelector('#replay');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      video.play().catch(() => {});
    }
  }, { threshold: 0.65 });
  observer.observe(video);
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const networkButtons = document.querySelectorAll('[data-network]');
const settings = {
  lan: 'LAN · 3,072 Mbit/s per direction · 0.3 ms RTT',
  wan: 'WAN · 352 Mbit/s per direction · 40 ms RTT',
};
for (const button of networkButtons) {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const network = button.dataset.network;
    const resume = !video.paused;
    video.pause();
    video.poster = `media/${network}-poster.jpg`;
    video.src = `media/${network}-rn18.mp4`;
    document.querySelector('#network-setting').textContent = settings[network];
    for (const other of networkButtons) other.setAttribute('aria-pressed', String(other === button));
    if (resume) video.play().catch(() => {});
  });
}
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('waiting');
      reveal.unobserve(entry.target);
    }
  }, { threshold: .25 });
  for (const row of document.querySelectorAll('.traffic-chart li')) {
    row.classList.add('waiting');
    reveal.observe(row);
  }
}

const copyButton = document.querySelector('#copy-bibtex');
copyButton.addEventListener('click', async () => {
  const code = document.querySelector('#bibtex-code code');
  try {
    await navigator.clipboard.writeText(code.textContent);
    copyButton.textContent = 'Copied';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Citation selected';
  }
  window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2000);
});
