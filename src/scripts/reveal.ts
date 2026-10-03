import { animate } from "motion";

const ease = [0.23, 1, 0.32, 1] as const;

export function reveal() {
  document.documentElement.classList.add("revealed");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const childrenOf = (el: Element) =>
    Array.from(el.children as HTMLCollectionOf<HTMLElement>);
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  ).flatMap((block) =>
    block.dataset.reveal !== "self" && block.children.length
      ? childrenOf(block).flatMap((child) =>
          child.matches("ul, ol, dl") ? childrenOf(child) : [child],
        )
      : [block],
  );

  function play(el: HTMLElement, delay: number) {
    const isHeader = !!el.closest("main > header");

    if (reduced) {
      animate(el, { opacity: [0, 1] }, { duration: 0.2, delay });
    } else if (isHeader) {
      animate(
        el,
        {
          opacity: [0, 1],
          transform: ["translateY(6px)", "translateY(0px)"],
          filter: ["blur(2px)", "none"],
        },
        { duration: 0.5, delay, ease },
      );
    } else {
      animate(
        el,
        { opacity: [0, 1], transform: ["translateY(6px)", "translateY(0px)"] },
        { duration: 0.45, delay, ease },
      );
    }
  }

  targets.forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      play(el, i * 0.05);
    } else {
      el.style.opacity = "1";
    }
  });
}
