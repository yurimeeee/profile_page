
// $(document).ready(function() {
  
// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
// });
// });
      $(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: false,
    // licenseKey: null
	});



  AOS.init();

//   new fullpage('#fullpage', {
// 	anchors:['firstPage', 'secondPage', 'thirdPage']
// });
// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
});
