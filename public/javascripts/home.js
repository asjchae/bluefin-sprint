$(function(){
	$(document).ready(function(){
		$("div").hide();
	})
/*	$("#showtweets").click(function(){
		$("#tweets").show();
	});
	$("#hidetweets").click(function(){
		$("#tweets").hide();
	});*/
	$(".article").click(function(){
		var x = ($(".article").attr("value"));
		var y = '#'+x;
		console.log(y);
		$(y).show();
	});
	$(".hide").click(function(){
		var x = ($(".article").attr("value"));
		var y = '#'+x;
		console.log(y);
		$(y).hide();
	});
	/*$function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)){
			js=d.createElement(s);js.id=id;
			js.src="//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}*/
	//}//(document,"script","twitter-wjs");
	$(function(d,s,id){
      	var js,fjs=d.getElementsByTagName(s)[0];
      	if(!d.getElementById(id)){js=d.createElement(s);
      		js.id=id;js.src="//platform.twitter.com/widgets.js";
      		fjs.parentNode.insertBefore(js,fjs);
      	}
      }(document,"script","twitter-wjs"));
});