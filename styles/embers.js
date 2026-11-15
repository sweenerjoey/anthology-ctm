const n = 60;
const containers = document.querySelectorAll(".embers");

containers.forEach((container) => {
  const embers = Array.from({ length: n }, (_, i) => {
    const single = document.createElement("i");

    // Divide the width into evenly spaced segments
    const interval = 100 / n;

    // Randomize position within each segment
    const offset = (Math.random() - 0.5) * interval * 0.5;
    const x = Math.round((interval * (i + 0.5) + offset) * 1000) / 1000;

    single.style.setProperty("--x", `${x}%`);

    // Randomize animation timing
    const delay = Math.round((Math.random() * 5) * 1000) / 1000;
    const duration = Math.round((3 + Math.random() * 4) * 1000) / 1000;
    single.style.setProperty("--delay", `${delay}s`);
    single.style.setProperty("--duration", `${duration}s`);

    return single;
  });

  container.append(...embers);
});
