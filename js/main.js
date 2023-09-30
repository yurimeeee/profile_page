$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: false,
    // scrollOverflow: true,
    normalScrollElements: ".normal-scroll",
    anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
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
});
