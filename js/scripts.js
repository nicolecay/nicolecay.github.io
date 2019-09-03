// JavaScript Document
$(function() {
	// prevent button page reload
	$("button").click(function(e){
		e.preventDefault();
		return false;
	});
	
	// list expand functionality
	// only fire when li clicked (not inner-content)
	$(".list > li .li-display").on("click", function(){
		var $active = $(this).parent("li");
		
		// active title style & open content
		$active.toggleClass("active");
		$active.children(".inner-list").toggleClass("hide");
		
		// one open at a time functionality
		$active.siblings("li").removeClass("active");
		$active.siblings("li").children(".inner-list").addClass("hide");
	});
});