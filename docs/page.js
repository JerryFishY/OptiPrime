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
