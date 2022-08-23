$(document).ready(function() {
	$('main').pagepiling();

	const bcolor = ['#e44d26', '#29a7de', '#f89b28', '#0169ae','#111b73', '#e5910e']
	$('.main_skill li').each(function(i) {
		$(this).easyPieChart( {
			barColor: bcolor[i],  //차트가 그려질 색
			trackColor: '#dedede',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
			scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
			lineCap: 'butt', 
			lineWidth: 10, // 차트 선의 두께
			size: 200, // 차트크기
			animate: 5000, // 그려지는 시간 
			onStart: $.noop,
			onStop: $.noop
		});
	})
	$('#graphic2 ul').masonry({
		itemSelector: '#graphic2 li'
	});
	$('#coding ul').slick({
		slidesToShow : 3,
		slidesToScroll : 3,
		autoplay : true,
		autoplaySpeed : 1000,
		dots : true
	  });
	  lightbox.option({
		fitImagesInViewport : false,
		wrapAround : true
	  })
});