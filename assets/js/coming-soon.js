// Scroll progress
  window.addEventListener('scroll', () => {
    const el = document.getElementById('progressBar');
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    el.style.width = pct + '%';
  });

  // Email notify mock handler
  function handleNotify() {
    const input = document.getElementById('emailInput');
    const form = document.getElementById('notifyForm');
    const msg = document.getElementById('successMsg');
    const val = input.value.trim();
    if (!val || !val.includes('@')) {
      input.style.outline = '2px solid #D4721A';
      setTimeout(() => input.style.outline = '', 1500);
      return;
    }
    form.style.display = 'none';
    msg.style.display = 'block';
  }

  // Enter key on input
  document.getElementById('emailInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleNotify();
  });
