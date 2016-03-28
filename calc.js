var result = 0;
var result2 = 0;
var first = 1;
var error = 0;
var operation = "null";
$(document).ready(function() {
	function calcula(){
		if(operation == "mas"){
				result2 = $("#pantalla").val().split("+");
				if(!isNaN(parseFloat(result2[1]))){
					result = parseFloat(result) + parseFloat(result2[1]);
				}	
			}
			else if(operation == "menos"){	
				result2 = $("#pantalla").val().split("-");
				if(!isNaN(parseFloat(result2[1]))){
					result = parseFloat(result) - parseFloat(result2[1]);
				}
			}
			else if(operation == "multi"){	
				result2 = $("#pantalla").val().split("*");
				if(!isNaN(parseFloat(result2[1]))){
					result = parseFloat(result) * parseFloat(result2[1]);
				}
			}
			else if(operation == "divide"){	
				result2 = $("#pantalla").val().split("/");
				if(!isNaN(parseFloat(result2[1]))){
					result = parseFloat(result) / parseFloat(result2[1]);
				}
			}
			$("#pantalla").val(result);
	}
	$('#pantalla').numeric();
	$('#pantalla').numeric('.');
	$('#pantalla').numeric(',');
	$("#C").click(function(){
          $("#pantalla").val("");
          result = 0;
          first = 1;
    });
    $("#mas").click(function(){
		if(!first){
			calcula();
			result2 = $("#pantalla").val().split("+");
			if(!isNaN(parseFloat(result2[1]))){
				result = parseFloat(result) + parseFloat(result2[1]);
			}	
			if(isNaN(result)){
				$("#pantalla").val("Syntax Error");
				error = 1;
			}
			else{
				$("#pantalla").val(result);
			}
		}
		else{
			result = $("#pantalla").val();
			first = 0;
		}
		operation = "mas";
    });
    $("#menos").click(function(){
		if(!first){
			calcula();
			result2 = $("#pantalla").val().substring(1).split("-");
			if(!isNaN(parseFloat(result2[1]))){
				result = parseFloat(result) - parseFloat(result2[1]);
			}	
			if(isNaN(result)){
				$("#pantalla").val("Syntax Error");
				error = 1;
			}
			else{
				$("#pantalla").val(result);
			}
		}
		else{
			result = $("#pantalla").val();
			first = 0;
		}
		operation = "menos";
    });
    $("#multi").click(function(){
		if(!first){
			calcula();
			result2 = $("#pantalla").val().split("*");
			if(!isNaN(parseFloat(result2[1]))){
				result = parseFloat(result) * parseFloat(result2[1]);
			}	
			if(isNaN(result)){
				$("#pantalla").val("Syntax Error");
				error = 1;
			}
			else{
				$("#pantalla").val(result);
			}
		}
		else{
			result = $("#pantalla").val();
			first = 0;
		}
		operation = "multi";
    });
    $("#divide").click(function(){
		if(!first){
			calcula();
			result2 = $("#pantalla").val().split("/");
			if(!isNaN(parseFloat(result2[1]))){
				result = parseFloat(result) - parseFloat(result2[1]);
			}	
			if(isNaN(result)){
				$("#pantalla").val("Syntax Error");
				error = 1;
			}
			else{
				$("#pantalla").val(result);
			}
		}
		else{
			result = $("#pantalla").val();
			first = 0;
		}
		operation = "divide";
    });
    $("#sen").click(function(){
		if(!first){
			calcula();
			result = Math.sin(result);	
			$("#pantalla").val(result);
		}
		else{
			result = $("#pantalla").val();
			result = Math.sin(result);	
			$("#pantalla").val(result);
			first = 0;
		}
    });
    $("#cos").click(function(){
		if(!first){
			calcula();
			result = Math.cos(result);	
			$("#pantalla").val(result);
		}
		else{
			result = $("#pantalla").val();
			result = Math.cos(result);	
			$("#pantalla").val(result);
			first = 0;
		}
    });
    $("#tan").click(function(){
		if(!first){
			calcula();
			result = Math.tan(result);	
			$("#pantalla").val(result);
		}
		else{
			result = $("#pantalla").val();
			result = Math.tan(result);	
			$("#pantalla").val(result);
			first = 0;
		}
    });
    $("#equal").click(function(){
		if(first){
			$("#pantalla").val(result);
		}
		else{
			calcula();
			first = 1;
		}
		
	});
	$(":button").click(function(event) {
		var a = $(this).attr("value");
		if(!error){
			if(a == "(-)"){
				$("#pantalla").val("-" + $("#pantalla").val());
			}
			if(a != "C" && a != "=" && a != "sen" && a != "cos" && a != "tan" && a != "(-)"){
				$("#pantalla").val($("#pantalla").val() + a);
			}
		}
		else{
			error = 0;
		}	
	});
});
