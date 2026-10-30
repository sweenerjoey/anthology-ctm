const n = 100;
const containers = document.querySelectorAll(".embers");

containers.forEach((container) => {
  const embers = Array.from({ length: n }, (_, i) => {
    const single = document.createElement("i");

    // Divide the width into evenly spaced segments
    const interval = 100 / n;

    // Randomize position within each segment
    const offset = (Math.random() - 0.5) * interval * 0.5;
    const x = interval * (i + 0.5) + offset;

    single.style.setProperty("--x", `${x}%`);

    // Randomize animation timing
    single.style.setProperty("--delay", `${Math.random() * 5}s`);
    single.style.setProperty("--duration", `${3 + Math.random() * 4}s`);

    return single;
  });

  container.append(...embers);
});
