var removeParent = function() {
	$(this).parent().remove();
};

var post = function () {
	var listInput = $('#iteminput').val();
	var listItem = $('<li>');
	var deleteButton = $('<a>');
	listItem.text(listInput);
	$(listItem).append(deleteButton);
	$('#list').append(listItem);
	$(deleteButton).text('\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'delete').on('click', removeParent);
	$('#iteminput').val("");
};

$(document).ready(function() {
	$('#postit').on('click', post);
});