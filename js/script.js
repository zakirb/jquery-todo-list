var post = function () {
	var listInput = $('#iteminput').val();
	var listItem = $('<li>');
	listItem.text(listInput);
	$('#list').append(listItem);
	$('#iteminput').val("")
	$(listItem).on('dblclick', removeItem);
};

var removeItem = function() {
	$(this).remove();

};




$(document).ready(function() {
	$('#postit').on('click', post);
	$('li').on('dblclick', removeItem);

});



