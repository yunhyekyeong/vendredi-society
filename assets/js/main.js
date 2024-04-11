gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
  trigger: ".sc-brand .col-2",
  start: "-1% 100%",
  end: "0% 0%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("hide");
  },
  onLeave: function () {
    document.querySelector(".header .logo").classList.remove("hide");
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
    document.querySelector(".sc-brand .col-2").classList.add("off");
  },
  onEnterBack: function () {
    document.querySelector(".header .logo").classList.add("hide");
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
    document.querySelector(".sc-brand .col-2").classList.remove("off");
  },
});

const brandImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-brand .col-2",
    start: "0% 100%",
    end: "75% 100%",
    scrub: true,
    // markers: true,
  },
  ease: "none",
});
brandImgTl
  .to(".logo-full", { yPercent: -400 }, "a")
  .to(".sc-brand .col-2 .img-box .img1",
  { xPercent: 30, yPercent: -10, rotation: 30 },"a")
  .to(".sc-brand .col-2 .img-box .img1 > img", { rotate: -30 }, "a")
  .to(".sc-brand .col-2 .img-box .img2",
  { xPercent: 20, yPercent: 50, rotation: -30 },"a")
  .to(".sc-brand .col-2 .img-box .img1 > video", { rotate: 30 }, "a")
  .to(".sc-brand .col-2 .img-box .img3",
  { xPercent: -90, yPercent: 30, rotation: 20 },"a")
  .to(".sc-brand .col-2 .img-box .img3 > img", { rotate: -20 }, "a")
;

const brandTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-brand .col-2",
    start: "0% 100%",
    end: "40% 0",
    scrub: 0,
    // markers: true,
  },
});
brandTxtTl
  .to(".sc-brand .fixed-1 .t-2 span:nth-child(1)",
  { xPercent: 20, ease: "power3.inOut" },"a")
  .to(".sc-brand .fixed-1 .t-2 span:nth-child(3)",
  { xPercent: -30, ease: "power3.inOut" },"a")
;





const digitalTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-digital .fixed",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    pin: true,
    // markers: true,
    onEnter: function () {
      document.querySelector(".header .btn-menu").classList.remove("invert");
    },
    onLeave: function () {
      document.querySelector(".header .logo").classList.remove("invert");
    },
    onEnterBack: function () {
      document.querySelector(".header .logo").classList.add("invert");
    },
    onLeaveBack: function () {
      document.querySelector(".header .btn-menu").classList.add("invert");
    },
  },
  ease: "none",
});
digitalTl.to(".sc-digital .fixed", { x: 0 });

ScrollTrigger.create({
  trigger: ".sc-digital",
  start: "0% 0%",
  end: "50% 50%",
  // markers: true,
  ease: "none",
  onLeave: function () {
    document.querySelector(".sc-brand .col-2").classList.add("out");
  },
  onEnterBack: function () {
    document.querySelector(".sc-brand .col-2").classList.remove("out");
  },
});

const digitalTxt = new SplitType(".sc-digital .desc", {
  types: "words, chars",
});
const digitalTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-digital .fixed",
    start: "5% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
digitalTxtTl.to(".sc-digital .desc .char", {
  opacity: 1,
  stagger: 0.2,
});





const garderTxt = new SplitType(".sc-garder .txt", {
  types: "chars",
});
document.querySelectorAll(".sc-garder .txt .char").forEach((item, index) => {
  const windowX = window.innerWidth * 2;
  const translateX = index < 5 ? windowX * (index + 1) : windowX * (index + 2);
  const rotate = 25 * (index + 1);
  gsap.set(item, {
    x: `${translateX}`,
    rotation: `${rotate}`
  });
});
const garderTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-garder .fixed",
    start: "-85% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
garderTl
  .from(".sc-garder .bg", { yPercent: -70, rotation: 40, duration:.5 }, "a")
  .to(".sc-garder .txt .char", { x: 0, rotation: 0, stagger: 0.3 }, "a")
;
const garderTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-garder .fixed",
    start: "0% 0%",
    end: "400% 100%",
    scrub: 0,
    pin: true,
    // markers: true,
  },
  ease: "none",
});
garderTxtTl
  .to(".sc-garder .txt .char", { color: "#002921", duration: 0.01, }, "b")
  .to(".sc-garder .bg svg", { fill: "#f0ff3d", duration: 0.01 }, "b")
  .to(".sc-garder .bg svg path",{ stroke: "#f0ff3d", opacity: 1, duration: 0.01,},"b")
  .to(".sc-garder .bg", { scale: 3, rotation: -180 }, "c")
  .to(".sc-garder .txt", { scale: 1.5 }, "c")
  .to(".sc-garder .txt .char", { visibility: "hidden", stagger: 0.1 })
;



ScrollTrigger.create({
  trigger: ".sc-intro",
  start: "-50% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});



const introTxt = new SplitType(".sc-intro .txt", {
  types: "lines, words",
});
const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 50%",
    end: "70% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
introTl.from(
  ".sc-intro .txt .word",
  { yPercent: 100, stagger: 0.05 }
);








ScrollTrigger.create({
  trigger: ".sc-push",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
});

const pushTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    pin: ".sc-push .bg",
    // markers: true,
  },
  ease: "none",
});
pushTl
  .to(".sc-push .bg .line1",{ xPercent: -10, yPercent: -110, rotation: -30 },"a")
  .to(".sc-push .bg .line2",{ xPercent: 20, yPercent: -120, rotation: 50 },"a")
  .to(".sc-push .bg .line3",{ xPercent: 10, yPercent: -180, rotation: 40 },"a"
);

const pushBtnTxt1 = new SplitType(".sc-push .btn-pop-1 .letter", {
  types: "chars",
});
const pushBtnTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push .btn-pop-1",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
document.querySelectorAll(".sc-push .btn-pop-1 .letter .char")
  .forEach((item, index) => {
    pushBtnTl1.fromTo(item,
      { yPercent: (index + 1) * 20, rotation: (index + 1) * 10 },
      { yPercent: (index + 1) * -20, rotation: (index + 1) * -10 },
      "a"
    );
  })
;

const pushBtnTxt2 = new SplitType(".sc-push .btn-pop-2 .letter", {
  types: "chars",
});
const pushBtnTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push .btn-pop-2",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
document.querySelectorAll(".sc-push .btn-pop-2 .letter .char")
  .forEach((item, index) => {
    pushBtnTl2.fromTo(item,
      { yPercent: (4 - index) * 20, rotation: (4 - index) * -10 },
      { yPercent: (4 - index) * -20, rotation: (4 - index) * 10 },
      "a"
    );
  })
;







ScrollTrigger.create({
  trigger: ".sc-invert .top",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});

ScrollTrigger.create({
  trigger: ".sc-invert .bottom",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.add("invert");
  },
});

const invertTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-invert .bottom",
    start: "0% 100%",
    end: "100% 0%",
    // markers: true,
    scrub: true,
    pin: ".sc-invert .bottom .fixed",
    onUpdate: (self) => {
      // 좌측 이미지
      const imgLength = document.querySelectorAll(".sc-invert .bottom .image").length;
      const imgIndex = Math.round(self.progress * (imgLength - 1));
      const currentImage = document.querySelector(".sc-invert .bottom .image.show");
      const newImage = document.querySelectorAll(".sc-invert .bottom .image")[imgIndex];

      // 우측 텍스트
      const txtIndex = Math.round(self.progress * 2);
      const currentTxt = document.querySelector(".sc-invert .bottom .fixed .txt.show");
      const newTxt = document.querySelectorAll(".sc-invert .bottom .fixed .txt")[txtIndex];

      if (currentImage) {
        currentImage.classList.remove("show");
      }
      if (newImage) {
        newImage.classList.add("show");
      }
      if (currentTxt) {
        currentTxt.classList.remove("show");
      }
      if (newTxt) {
        newTxt.classList.add("show");
      }
    },
  },
  ease: "none",
});








ScrollTrigger.create({
  trigger: ".sc-attend",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
});
const attendTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-attend",
    start: "0% 20%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
attendTl.to(".sc-attend .box", { yPercent: 100 });






ScrollTrigger.create({
  trigger: ".sc-desole",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});





ScrollTrigger.create({
  trigger: ".sc-free",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
});

// 이미지 고정
const freeFixTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-free .fixed .img-box",
    start: "0% 0%",
    end: "700% 0%",
    pin: true,
    scrub: 0,
    // markers: true,
    onEnter: function () {
      document.querySelector(".header .logo").classList.remove("invert");
    },
    onLeaveBack: function () {
      document.querySelector(".header .logo").classList.add("invert");
    },
  },
  ease: "none",
});

// 이미지 시퀀스
const freeImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-free .fixed",
    start: "0%, 100%",
    end: "100%, 0",
    scrub: 0,
    // markers: true,
    onUpdate: (self) => {
      const imgLength = document.querySelectorAll(".sc-free .seq2 .img").length;
      const imgIndex = Math.round(self.progress * (imgLength - 1));
      const currentImage = document.querySelector(".sc-free .seq2 .img.show");
      const newImage = document.querySelectorAll(".sc-free .seq2 .img")[imgIndex];
      if (currentImage) {
        currentImage.classList.remove("show");
      }
      if (newImage) {
        newImage.classList.add("show");
      }
    },
  },
  ease: "none",
});

// 이미지 스케일
const freeScaleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-free .fixed .img-box",
    start: "0% 0%",
    end: "400% 0%",
    scrub: 0,
    // markers: true,
  },
  ease:'none'
})
freeScaleTl.to(".sc-free .seq2", {
  width: "100%",
  height: "100.1%",
  borderRadius: "0",
});

// 텍스트 움직임
const movingTxt = new SplitType(".sc-free .txt-moving .desc", {
  types: "chars",
});
gsap.set(".sc-free .txt-moving .desc .char", {
  opacity: 0,
  yPercent: 100,
  scaleY: 1.4,
  rotation: "random(-10,10)",
});
const freeTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-free .txt-moving",
    start: "0% 0%",
    end: "200% 0%",
    pin: ".sc-free .txt-moving",
    scrub: 0,
    // markers: true
  },
  ease: "none",
});
freeTxtTl.to(
  ".sc-free .txt-moving .desc .char",
  {
    yPercent: 0,
    rotation: 0,
    scaleY: 1,
    opacity: 1,
    stagger: 0.5,
    ease: "none",
  },
  "a"
);

// 텍스트 언더라인
const freeLineTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-free .txt-moving",
    start: "0% 0%",
    end: "200% 0%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
freeLineTl.to(".sc-free .txt-moving .underline", { scaleX: 1 });






const jobTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-job",
    start: "0% 0%",
    end: "500% 100%",
    pin: ".sc-job .row .card-list",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
jobTl.to(".sc-job .row .card-list", {
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  },
  duration: 20,
});

const jobCardTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-job .row",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 3,
    // markers: true,
  },
  ease: "none",
});
document
  .querySelectorAll(".sc-job .row .card-list .card-item")
  .forEach((item) => {
    const currentX = gsap.getProperty(item, "x");
    const currentY = gsap.getProperty(item, "y");
    const currentR = gsap.getProperty(item, "rotation");
    const newX = currentX * -1;
    const newY = currentY * -1;
    const newR = currentR * -1;

    jobCardTl.to(item, { x: newX, y: newY, rotation: newR }, "a");
  })
;




// tab 이벤트
const menuList = document.querySelectorAll(".sc-job .col .question .btn-q");
const contentLsit = document.querySelectorAll(".sc-job .col .txt-a");
menuList.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuList.forEach((quest) => {
      quest.classList.remove("active");
    });
    contentLsit.forEach((answer) => {
      answer.classList.remove("show");
    });
    menuList[index].classList.add("active");
    contentLsit[index].classList.add("show");
  });

  const questTl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "100% 100%",
      end: "100% 90%",
      scrub: 0,
      // markers: true,
    },
    ease: "none",
  });
  questTl.fromTo(item,
    { rotationX: 70, autoAlpha: 0 },
    { rotationX: 0, autoAlpha: 1, duration:1 }
  );
});




const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "-40% 00%",
    end: "99.5% 100%",
    scrub: true,
    // markers: true,
  },
  ease: "none",
});
footerTl
  .to(".footer .huge .letter1", { y: 0 }, "a")
  .to(".footer .huge .letter2", { y: 0 }, "a")
  .to(".footer .huge .letter3", { y: 0 }, "a")
;




// scrollTop 이벤트
const footerCircle = document.getElementById("circle").style.opacity;
const footerLogo = document.getElementById("logo").style.opacity;

document.querySelector(".btn-top").addEventListener("click", () => {
  footerCircle = 0;
  footerLogo = 1;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector(".btn-top").addEventListener("mouseover", () => {
  footerCircle = 0;
  footerLogo = 1;
});

document.querySelector(".btn-top").addEventListener("mouseout", () => {
  footerCircle = 1;
  footerLogo = 0;
});
