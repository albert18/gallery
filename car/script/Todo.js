// Check off Specific 
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

// Click on X to delete 
$("ul").on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	});
	event.stopPropagation();
})
											
// Input Press
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// Grabbing to Do
		var todoText = $(this).val();
		$('this').val('');
		// create a new li and add to ul
		$('ul').append("<li><span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>")
	}
});

//  Plus Square
	$('fa-plus-square').click(function() {
		$("input[type='text']").fadeToggle()
	});
