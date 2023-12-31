gsap.registerPlugin(ScrollTrigger);

function isDesktop() {
  const mediaQuery = window.matchMedia("(min-width: 1100px)"); // Ajusta el valor según tus necesidades
  return mediaQuery.matches;
}

if (isDesktop()) {
  // ============== NEWS ANIMATIONS =============

  gsap.fromTo(
    ".news__background",
    { y: -110 },
    {
      y: 100,
      scrollTrigger: {
        trigger: ".news",
        scrub: true,
        // markers:true,
        start: "top bottom",
        end: "bottom top",
      },
    }
  );

  gsap.from(".news__title", {
    y: "100%",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".news__titleContainer",
      // markers: true,
      start: "top bottom",
    },
  });

  const imgTimeLine = gsap.timeline();

  imgTimeLine
    .from(".slider__img1", { y: 100, opacity: 0, duration: 0.5, delay: 1 })
    .from(".slider__img2", { y: 100, opacity: 0, duration: 0.5 }, "<.2")
    .from(".slider__img3", { y: 100, opacity: 0, duration: 0.5 }, "<.2");

  // ============= ACT ANIMATIONS ================
  gsap.from(".act__title", {
    y: "100%",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".act__titleContainer",
      start: "top bottom",
    },
  });

  // =============== OVERVIEW ANIMATIONS ================
  gsap.from(".overview__title", {
    y: 200,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".overview__titleContainer",
      start: "top bottom",
    },
  });

  gsap.from(".protocol__line", {
    width: 0,
    duration: 0.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".protocol__line",
    },
  });

  gsap.from(".protocol__text", {
    duration: 0.5,
    text: "AKBJH - POIOS - EPPSA",
    ease: "none",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".protocol__text",
    },
  });

  // =========== AGENTS ANIMATION ============
  gsap.fromTo(
    ".agents__contentBackground",
    { y: -100 },
    {
      y: 50,
      scrollTrigger: {
        trigger: ".agents__contentBackground",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".agents__models",
    { y: 50 },
    {
      y: -130,
      scrollTrigger: {
        trigger: ".agents__models",
        scrub: 1,
      },
    }
  );

  gsap.from(".agents__title", {
    y: "100%",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".agents__titleContainer",
    },
  });

  // ========== MAPS SECTION =========
  gsap.fromTo(
    ".maps__place",
    { y: -140 },
    {
      y: 50,
      scrollTrigger: {
        trigger: ".maps__place",
        scrub: 1,
      },
    }
  );

  gsap.to('.maps__birds', {
    x:-60,
    y:-80,
    scrollTrigger:{
      trigger: '.maps__birds',
      scrub: 1
    }
  })
}
