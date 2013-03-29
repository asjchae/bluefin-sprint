$(function(){
	$(document).ready(function(){
		$("div").hide();
		$(".twitter-timeline").hide();
	});

/*	$("#showtweets").click(function(){
		$("#tweets").show();
	});
	$("#hidetweets").click(function(){
		$("#tweets").hide();
	});*/

	$(document).on("click", ".article", function() {
		$(".twitter-timeline").show();
		var x = ($(this).attr("value"));
		var y = '#'+x;
		$(y).show();
	});

	$(document).on("click", ".hidearticle", function() {
		$(".twitter-timeline").hide();
		var x = ($(this).attr("value"));
		var y = '#'+x;
		$(y).hide();
	});

	$(function(d,s,id){
      	var js,fjs=d.getElementsByTagName(s)[0];
      	if(!d.getElementById(id)){js=d.createElement(s);
      		js.id=id;js.src="//platform.twitter.com/widgets.js";
      		fjs.parentNode.insertBefore(js,fjs);
      	}
      }(document,"script","twitter-wjs"));


});

