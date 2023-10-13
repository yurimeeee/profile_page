(function () {
  let isChartOn = true;
  let scrollWrap = document.querySelector('.scroll_wrap');

  function scrollHandler() {
    if (window.scrollY > 300) {
      scrollWrap.classList.add('hidden');
    }
    if (window.scrollY > skillOST - 400 && isChartOn) {
      chartAnimation();
      isChartOn = false;
    }
  }

  window.addEventListener("scroll", scrollHandler);

  let skillOST = document.querySelector(".sec4").offsetTop;
  let chart = document.querySelectorAll(".chart");

  function chartAnimation() {
    chart.forEach(function (element) {
      let $this = $(element);
      let targetNum = $this.attr("data-percent");
      let targetSVG = $this.find(".outer");

      $({ num: 0 }).animate(
        { num: targetNum },
        {
          duration: 1500,
          step: function () {
            let now = Math.ceil(this.num);
            let value = 235 - (235 * now) / 100;
            targetSVG.css({ strokeDashoffset: value });
          },
        }
      );
    });
  }

  function skillText(e) {
    const figcaptionText = e.currentTarget.querySelector('figcaption').textContent;
    const descText = e.currentTarget.querySelector('figcaption').getAttribute('data-desc')
    document.querySelector('.skill_name').textContent = figcaptionText;
    document.querySelector('.skill_desc').textContent = descText;
  }
  chart.forEach(element => {
    element.addEventListener('mouseover', skillText);
  });
  // chart.addEventListener('mouseover', skillText);


  // chart.addEventListener('mouseout', function () {
  //   // 마우스가 요소를 벗어났을 때 실행할 코드 (선택사항)
  //   const target_text = chart.querySelector('figcaption').innerText;
  //   console.log(target_text)
  //   // 원래의 텍스트로 되돌리기
  //   figcaption.innerText = 'HTML'; // 변경 전의 텍스트로 설정
  // });
  /*
  chart.forEach(function (element) {
    element.addEventListener("mouseover", (e) => {
      const target_data = e.target.dataset.percent;
      const target_text = chart.querySelector('figcaption');
      target_text.innerText = `${target_data}%`;
    });
  });
  chart.addEventListener('mouseout', function () {
    // 마우스가 요소를 벗어났을 때 실행할 코드 (선택사항)
    const target_text = chart.querySelector('figcaption');
    // 원래의 텍스트로 되돌리기
    figcaption.innerText = 'HTML'; // 변경 전의 텍스트로 설정
  });
});

*/

  // top btn
  let topBtn = document.querySelector(".top_btn");

  window.addEventListener("scroll", () => {
    // e.preventDefault();
    // let topBtnOST = topBtn.scrollTop();
    let topBtnOST = window.scrollY || document.documentElement.scrollTop;

    if (topBtnOST > 800) {
      topBtn.classList.add("active");
    } else {
      topBtn.classList.remove("active");
    }
    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        "easeInCubic"
      );
    });
  });

  ("use strict");

  // iPad and iPod detection
  // var isiPad = function () {
  //   return navigator.platform.indexOf("iPad") != -1;
  // };

  // var isiPhone = function () {
  //   return (
  //     navigator.platform.indexOf("iPhone") != -1 ||
  //     navigator.platform.indexOf("iPod") != -1
  //   );
  // };

 
  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#colorlib-counter").length > 0) {
      $("#colorlib-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };


  // contentWayPoint();/
  // Document on load.
  $(function () {
    counterWayPoint();
    contentWayPoint();
  });
})();
