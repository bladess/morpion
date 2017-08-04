var joueurCourant = 1;
var array = [[0,0,0],[0,0,0],[0,0,0]];
var score = [0,0];
var count = 0;
var countPartie = 1;

var maxPartie = 1;
$('#myModal').modal('toggle');



var majPartie = function(){
	if (countPartie === maxPartie){
		if(score[0]>score[1]){
			$(".winner").text($(".nom1").text()+" (croix)");
		}
		if(score[0]<score[1]){
		$(".winner").text($(".nom2").text()+ " (rond)");
		}
		if(score[0]===score[1]){
			$(".winner").text("match null");
		}
		$('#myModal2').modal('toggle');
		countPartie=1;
		$(".j1").text("0");
		$(".j2").text("0");
		$(".cp").text("1");
		score=[0,0];
	}
	else{
		countPartie++;
		$(".cp").text(countPartie);
	}
}

var checkWin = function(ligne,col){
	var diag = false;
	var checkLigne = (array[ligne][0]=== array[ligne][1] && array[ligne][2]=== array[ligne][1]); 
	var checkColone = (array[0][col] === array[1][col] && array[2][col] === array[1][col]);
	if(ligne === col){
		diag = (array[0][0] == array[1][1] && array[0][0] == array[2][2]);
	}
	if(ligne+col === 2){
		diag = diag || (array[0][2] == array[1][1] && array[1][1] == array[2][0]);
	}

	return checkLigne || checkColone || diag;
};

var resetPartie = function(){
	$(".case").text('');
	joueurCourant =1;
	array=[[0,0,0],[0,0,0],[0,0,0]];
	count = 0;
}
$("#validation").on("click",function(){
	$(".nom1").text($("#joueur1").val());
	$(".nom2").text($("#joueur2").val());
	maxPartie = Math.max(isNaN(parseInt($("#nbPartie").val()))?1:parseInt($("#nbPartie").val()),1);
	console.log(maxPartie);
})
$(".case").on("click",function(){
	if($(this).html()===''){
		var ligne = $(this).parent().data("ligne");
		var col = $(this).data("col");
		array[ligne][col]=joueurCourant;
		if(joueurCourant===1 ){
			$(this).html('<img src="croix.png"/>');
		}
		else{
			$(this).html('<img src="rond.png"/>');
		}
		if(checkWin(ligne,col)){
			score[joueurCourant-1]++;
			if(joueurCourant===1 ){
				$(".j1").text(score[0])
			}else{
				$(".j2").text(score[1]);
			}
			majPartie();
			resetPartie();
		}
		else{
			if(count < 8){
				if(joueurCourant===1 ){
					joueurCourant =2;
				}else{
					joueurCourant =1;
				}
				count++;
			}
			else{
				majPartie();
				resetPartie();
			}
		}
	}
});
$("#closeRes").on("click",function(){
	$('#myModal').modal('toggle');
});
