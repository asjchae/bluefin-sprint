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
	$("#article").click(function(){
		$("#articletext").show();
	});
	$("#hide").click(function(){
		$("#articletext").hide();
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