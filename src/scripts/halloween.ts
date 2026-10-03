import { animate } from "motion";

const pumpkin = String.raw`
      ,
   .-'|'-.
  / ^   ^ \
 |    ^    |
  \ \/\/\/ /
   '-----'
try typing boo.`;

if (document.documentElement.classList.contains("halloween")) {
  console.log(`%c${pumpkin}`, "color: #e8823a; font-family: monospace");

  const title = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "come back..." : title;
  });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const today = new Date()
    .toLocaleDateString("en-CA", { timeZone: "Asia/Colombo" })
    .slice(5);
  const heading = document.querySelector<HTMLElement>("main > header h1");

  if (
    heading &&
    today === "10-31" &&
    !reduced &&
    !sessionStorage.getItem("flickered")
  ) {
    sessionStorage.setItem("flickered", "1");
    animate(
      heading,
      { opacity: [1, 0.2, 1, 0.5, 1] },
      { duration: 0.4, delay: 1.2, ease: "linear" },
    );
  }

  let typed = "";

  document.addEventListener("keydown", (e) => {
    const field =
      e.target instanceof Element &&
      e.target.closest("input, textarea, select, [contenteditable]");
    if (e.metaKey || e.ctrlKey || e.altKey || field) return;

    typed = (typed + e.key.toLowerCase()).slice(-3);
    if (typed !== "boo" || document.querySelector(".ghost")) return;

    const ghost = document.createElement("span");
    ghost.className = "ghost";
    ghost.textContent = "\u{F02A0}";
    ghost.setAttribute("aria-hidden", "true");
    document.body.append(ghost);

    const keyframes = reduced
      ? { opacity: [0, 1, 0] }
      : {
          opacity: [0, 1, 0],
          transform: [
            "translateY(0px)",
            "translateY(-6px)",
            "translateY(-12px)",
          ],
        };

    animate(ghost, keyframes, { duration: 1.4, ease: "easeOut" }).then(() =>
      ghost.remove(),
    );
  });
}
