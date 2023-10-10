$(document).ready(function () {
  let menu = document.querySelectorAll("#menu li");



  $("#fullpage").fullpage({
    menu: '#menu',
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
    afterLoad: function(anchorLink, index){
      //chart 애니메이션
      if(index == 4){
        chartAnimation();
      }
      //메뉴 컬러 변경
      // if(index == 5){
      //   // toggleMenu(menu);
      //   handleIntersection();
      // } 
    }
  });
  // let menu = document.querySelectorAll("#menu li");
  /*
  function toggleMenu(entries) {
    // let hasActive = menu.classList.contains('active');
  
    // 'active' 클래스가 있으면 'menuChange' 클래스를 추가하고, 없으면 'menuChange' 클래스를 제거
    entries.forEach((entry) => {
    if (entry.classList.contains('active')) {
      menu.forEach((item) => item.classList.add("menuChange"));;
    } else {
      menu.forEach((item) => item.classList.remove("menuChange"));
    }
  });
  }
  */

  // function toggleMenu(entries) {
  //   entries.forEach((entry) => {
  //     if (entry.classList.contains('active')) {
  //       menu.forEach((item) => item.classList.add("menuChange"));;
  //     } else {
  //       menu.forEach((item) => item.classList.remove("menuChange"));
  //     }
  //   });
  // }
  // 함수 호출 예시
  // toggleMenu();
  


  // let menu = document.querySelectorAll("#menu li");

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menu.forEach((item) => item.classList.add("menuChange"));
      } else {
        menu.forEach((item) => item.classList.remove("menuChange"));
      }
    });
  }

  // var options = {
  //   root: null,
  //   threshold: 0.8,
  // };

  // var observer = new IntersectionObserver(handleIntersection, options);
  // observer.observe(work);

  let chart = document.querySelectorAll(".chart");

  function chartAnimation() {
    chart.forEach(function () {
      let $this = $(this);
      // let title = $this.find("h2");
      let targetNum = $this.attr("data-percent");
      let targetSVG = $this.find(".outer");

      $({ num: 0 }).animate(
        { num: targetNum },
        {
          duration: 1500,
          progress: function () {
            let now = Math.ceil(this.num);
            // title.text(now);
            let value = 235 - (235 * now) / 100;
            targetSVG.css({ strokeDashoffset: value });
          },
        }
      );
    });
  }

  
});
