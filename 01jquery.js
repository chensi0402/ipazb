$(function () {
    //这里写代码
    $("#myId").html("hello world");
    function $(selector, context) {
        //other code
        return new jQuery.fn.init(selector, context);
    }
    $("#my2d").html("The id is my2d!");
    $("#my3d").html("The class is myclass");
    $("li:first").html("This is the first li!");
    $("li:eq(1)").html("my number is 1,but i am second!");
    $("li:contains('飞机')").html("I am 飞机!");
    $("li:has('span')").html("I have span!");
    $("li:hidden").css({ "display": "block", "color": "red" });
    $("li:visible").css("background-color", "green");
    $("li[title='web']").html("My title is web!");
    $("li[title!='web']").css("color", "blue");
    $("li[class*='ep'").css("background-color", "yellow");
});

$(function () {
    var youngerBrotherNum = 0;
    var elderBrotherNum = 0;
    var youngerChildrenNum = 0;
    var elderChildrenNum = 0;
    $('#addYoungerBrother').on('click',function(){
        $('#me').after('<div class="me">Younger brother No.'+youngerBrotherNum+'</div>');
        youngerBrotherNum += 1;
    });
});