const range = document.getElementById("range");
const label = document.getElementById("label");

range.addEventListener("input", (e) => {
  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    (e.target.value * num_width) / max -
    num_label_width / 2 +
    scale(e.target.value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerText = e.target.value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
