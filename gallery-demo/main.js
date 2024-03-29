$(document).ready(function(){

	var thispic;
	var actual;

	$('.pic').click(show);
	$('#prev').click(prevPic);
	$('#next').click(nextPic);
	$('#close').click(close);
	$(document).keydown(keylistener);

	function keylistener(e){
		let keyID = e.which;
		switch(keyID){
			case 27:
				close();
				break;
			case 37:
				prevPic();
				break;
			case 39:
				nextPic();
				break;
		}
	}

	function show(){
		$('#showcase').css('visibility', 'visible');
		thispic = $(this);
		let pic = thispic.attr('src');
		$('#thispic').attr('src', pic);
		actualPic();
	}

	function actualPic(){
		actual = $('#thispic').attr('src');
		thispic = $('.pic[src="'+actual+'"]');
	}

	function prevPic(){
		let pic = thispic.prev().attr('src');
		$('#thispic').attr('src', pic);
		actualPic();
	}

	function nextPic(){
		let pic = thispic.next().attr('src');
		$('#thispic').attr('src', pic);
		actualPic();
	}

	function close(){
		$('#showcase').css('visibility', 'hidden');
	}

});
