$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    fitToSection: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    scrollHorizontally: false,
    // scrollOverflow: true,
    normalScrollElements: ".normal-scroll",
    anchors: [
      "1stPage",
      "2ndPage",
      "2ndPage2",
      "3rdPage",
      "4thpage",
      "5thpage",
    ],
    // licenseKey: null
  });

  // 'normal-scroll' 클래스를 가진 섹션에 대해 일반 스크롤을 허용합니다.
  // fullpage_api.setAllowScrolling(true, 'up, down', '.normal-scroll');
  // AOS.init();

  //   new fullpage('#fullpage', {
  // 	anchors:['firstPage', 'secondPage', 'thirdPage']
  // });
  // 	//methods
  // 	$.fn.fullpage.setAllowScrolling(false);

  let work = document.querySelector(".sec_05");
  let menu = document.querySelectorAll("#menu li");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menu.forEach((item) => item.classList.add("active"));
      } else {
        menu.forEach((item) => item.classList.remove("active"));
      }
    });
  }

  var options = {
    root: null,
    threshold: 0.8,
  };

  var observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(work);

  // window.addEventListener("scroll", function () {
  //   var scrollAmt = window.scrollY;
  //   console.log('scrollAmt',scrollAmt)
  //   if (scrollAmt > workHeight) {
  //     menu.classList.add('active');
  //   } else {
  //     menu.classList.remove('active');
  //   }
  // });
  let skill = document.querySelector(".sec_04");

  // function handleIntersection2(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       menu.forEach((item) => item.classList.add("active"));
  //     } else {
  //       menu.forEach((item) => item.classList.remove("active"));
  //     }
  //   });
  // }

  // var options = {
  //   root: null,
  //   threshold: 0.8,
  // };

  // var observer2 = new IntersectionObserver(handleIntersection2, options);
  // observer2.observe(skill);

  let chart = $(".chart");
  // let chartOST = chart.offset().top - 500;
  // let isActive = false;

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > chartOST) {
  //     if (!isActive) {
  //       chartAnimation();
  //       isActive = true;
  //     }
  //   }
  // });

  function chartAnimation() {
    chart.each(function () {
      // let $this = $(this);
      // let title = $this.find("h2");
      let targetNum = this.attr("data-percent");
      let targetSVG = this.find(".outer");

      $({ num: 0 }).animate(
        { num: targetNum },
        {
          duration: 1500,
          progress: function () {
            let now = Math.ceil(this.num);
            title.text(now);
            let value = 537 - (537 * now) / 100;
            targetSVG.css({ strokeDashoffset: value });
          },
        }
      );
    });
  }

  chartAnimation();
});
