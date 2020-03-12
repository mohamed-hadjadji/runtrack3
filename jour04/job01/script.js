$(function(){
	$("#button").click(function(){
		$.ajax({
			url:'expression.txt',
			method:'POST',
			datatype:'text',
		success: function(data){
			$('#message').text(data) 
		}
		})
	})
	});
