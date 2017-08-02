var joueurCourant = 1;

$(".case").on("click",function(){
	
	if($(this).html()===''){
		if(joueurCourant===1 ){
			$(this).html('<img src="croix.png"/>');
			joueurCourant=2;
		}
		else{
			$(this).html('<img src="rond.png"/>');
			joueurCourant=1;
		}
	}

});

$("button").on("click",function(){
	$(".case").text('');
	joueurCourant =1;

})
