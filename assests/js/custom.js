// Check of specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on ("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Creating new Todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// New Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Toggle the Add new todo text box
$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle();
});