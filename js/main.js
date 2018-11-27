
$(document).ready(function(){

	var newVariable;

	$.ajax({

		url: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=UK5FFU366ZNDHCT2",

		type: "GET",

        dataType: "JSON",

        success: function(data) {

            console.log(data);
            console.log(data["Global Quote"]["05. price"]);
            $("div").html("AAPL Stock is Priced at: $" + data["Global Quote"]["05. price"]);
        	if(data["Global Quote"]["10. change percent"] >= "0.00"){
        		$("div").css("background", "green");
        	}
        	if("0.00" >= data["Global Quote"]["10. change percent"]){
        		$("div").css("background", "red");
        	}
        	if("0.00" == data["Global Quote"]["10. change percent"]){
        		$("div").css("background", "yellow");
        	}
        },
        error: function(data, textStatus, errorThrown) {
        	console.log("Error");
            console.log(errorThrown);
        }	
	});

});