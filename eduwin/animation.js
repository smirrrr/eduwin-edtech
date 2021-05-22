$(document).ready(function(){
		$('div.main').addClass('hide');
	console.log("here");
	$(document).on('click','div.getstart',function(){
		$('div.front').addClass('hide');
		$('div.main').slideDown(1000);
		$('div.main').removeClass('hide');
		
		console.log("keri");
	});
	console.log("hereeee");
	$('li.subs').addClass('hide');
	$('ul').on('click','li.headss',function(){
		console.log("yes")
		$('li.subs').slideUp(200);
		$(this).next().next().slideDown(200);
		
		console.log("removed");
		
		
	});
	$('li.payrows').addClass('hide');
	$('ul').on('click','li.methods',function(){
		console.log("yes")
		$('li.payrows').slideUp(200);
		$(this).next().next().slideDown(200);
		
		console.log("removed");
		
		
	});
	
});