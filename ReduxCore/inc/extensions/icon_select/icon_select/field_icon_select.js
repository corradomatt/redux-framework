/* global confirm, redux, redux_change */

jQuery(document).ready(function() {

/*
	jQuery('.redux-icon-select-selected').each(function() {
		var parent = jQuery(this).parents('.redux-icon-container:first');
		parent.animate({
			scrollTop: (jQuery(this).top + parent.scrollTop())
		}, 500);
	});
*/
	// On label click, change the input and class
	jQuery('.redux-icon-select label i, .redux-icon-select label .tiles').click(function(e) {
		var id = jQuery(this).closest('label').attr('for');
		jQuery(this).parents("fieldset:first").find('.redux-icon-select-selected').removeClass('redux-icon-select-selected');
		jQuery(this).closest('label').find('input[type="radio"]').prop('checked');
        redux_change(jQuery(this).closest('label').find('input[type="radio"]'));
		jQuery('label[for="' + id + '"]').addClass('redux-icon-select-selected').find("input[type='radio']").attr("checked",true);
	});

});
