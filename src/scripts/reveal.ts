import { animate } from "motion";

const ease = [0.23, 1, 0.32, 1] as const;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function pageIsEntering() {
  return document.documentElement.classList.contains("is-navigating");
}

export function enter(el: HTMLElement, delay = 0) {
  if (pageIsEntering()) {
    el.style.opacity = "1";
    return { finished: Promise.resolve() };
  }

  if (prefersReducedMotion()) {
    return animate(el, { opacity: [0, 1] }, { duration: 0.2, delay });
  }

  if (el.closest("main > header")) {
    return animate(
      el,
      {
        opacity: [0, 1],
        transform: ["translateY(6px)", "translateY(0px)"],
        filter: ["blur(2px)", "none"],
      },
      { duration: 0.5, delay, ease },
    );
  }

  return animate(
    el,
    { opacity: [0, 1], transform: ["translateY(6px)", "translateY(0px)"] },
    { duration: 0.45, delay, ease },
  );
}

export function reveal() {
  document.documentElement.classList.add("revealed");

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

  targets.forEach((el, i) => {
    if (
      pageIsEntering() ||
      el.getBoundingClientRect().top >= window.innerHeight
    ) {
      el.style.opacity = "1";
    } else {
      enter(el, i * 0.05);
    }
  });
}
