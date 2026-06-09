fetch("/strategies.txt")
  .then((response) => response.text())
  .then((text) => {
    const strategies = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    if (strategies.length === 0) return;
    const strategy = strategies[Math.floor(Math.random() * strategies.length)];
    const punctuated = /[.!?]$/.test(strategy) ? strategy : `${strategy}.`;
    document.querySelector("#strategy").textContent = punctuated;
  });
