// Chalk - EECS 368's library for teaching and understanding JavaScript
// Version 20170308
//
// Jamison Walrod
// EECS 448
// Project 1
// 31 January 2018
//



var chalk = {
    print: function(str) {
            $("#chalk").append(str.replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/>/g, '&gt;')
								  .replace(/ /g, '&nbsp;')
								  .replace(/\r?\n|\r/g, "<br />"));
    },
    newline: function() {
            $("#chalk").append("<BR/>");
    },
    hr: function() {
            $("#chalk").append("<hr/>");
    },
    println: function(str) {
            chalk.print(str);
            chalk.newline();
    },
    canvas: function(w,h) {
	var canvas = $("<canvas/>");
	$("#chalk").append(canvas);
	$("#chalk").append("<BR>");
	canvas.css("border","1pt solid black");
	canvas.css("background","white");
	canvas.attr("width",w);
	canvas.attr("height",h);
	return canvas[0].getContext("2d");
    },
    entrybox: function() {
	return new Promise(function (fulfill, reject){
		var input = $("<input/>");
		$("#chalk").append(input);
                $("#chalk").append("<BR>");
                input.attr("size",20);
                input.css("color","maroon");
                input.focus();
                input.on('keyup',function(e) {
                        if (e.keyCode == 13) {
                            input.off();
                            var str = input.val();
                            input.attr("disabled",true);
			    input.css("color","gray");
                            input.css("background","#f8f8f8");
                            fulfill(str);
                        }
                        if (e.keyCode == 27) {
                            input.off();
                            var str = input.val();
                            input.attr("disabled",true);
			    input.css("color","gray");
                            input.css("background","#FF8800");
                            reject(str);
                        }
                    });
	    })
    },
    delay: function(time) {
	return new Promise(function (fulfill) {
		setTimeout(fulfill, time);
	    });
    }
}

main = function() {

	//chalk.print("Let's schedule a meeting!");
	chalk.newline();
}


// Do this when document is ready
$(function(){
        $("#chalk").css("border","solid black 1px");
        $("#chalk").css("background","#b0c4de");
        main();
});        
