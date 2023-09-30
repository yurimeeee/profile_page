// $(document).ready(function() {

// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
// });
// });
$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: false,
		// scrollOverflow: true,
		normalScrollElements: '.normal-scroll',
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
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
});
