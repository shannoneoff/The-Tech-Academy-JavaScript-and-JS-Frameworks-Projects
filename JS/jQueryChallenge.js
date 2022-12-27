$(document).ready(function() {              //Kicks off the function once the document has finished loading/is "ready"
    $("#test_button").click(function() {    //Function begins when button is clicked
        $("h1").hide();                     //Hides the heading (h1)
    });
});

$(document).ready(function() {
    $("#second_button").click(function() {
        $("#test").hide();                  //Hides a paragraph assigned this id(#test) above it
    });
});

$(document).ready(function() {
    $("#third_button").click(function() {
        $(".test").hide();                  //Hides the heading and paragraph assigned this class(.test) above it
    });
});

$(document).ready(function() {
    $("#fourth_button").click(function () {
        $("ul li:first-child").hide();      //Hides the first item in each list
    });
});

$(document).ready(function() {
    $("#p9").hover(function() {
        alert("You have entered p9!");      //Alert is shown when the mouse hovers over the paragraph element
    },
    function() {
        alert("See ya later!  You have left p9.");  //Alert is shown when the mouse leaves the paragraph element
    });
});

$(document).ready(function() {
    $("input").focus(function() {                   //Function occurs when the element is clicked within
        $(this).css("background-color", "purple");  //The element will then be given a purple background
    });
    $("input").blur(function () {                   //Function occurs when another element is clicked within
        $(this).css("background-color", "green");   //The element will then be given a green background
    });
});

$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide(2000);                          //Function hides all paragraphs on the page in 2 seconds
    });
    $("#show").click(function () {
        $("p").show(2000);                          //Function shows all paragraphs on the page in 2 seconds
    });
});

$(document).ready(function() {
    $("#fifth_button").click(function() {
        $("#toggleps").toggle(500);                 //Function toggles the paragraph between show and hide
    });
});

$(document).ready(function() {
    $("#sixth_button").click(function() {
        $("#div1").fadeOut();                       //Function fades out the box(div element)
        $("#div2").fadeOut("slow");
    });
});

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideDown();                    //Function causes a panel to slide down
    });
});

$(document).ready(function () {
    $("#seventh_button").click(function () {
        $("#div3").animate({                        //Animates the box to move elsewhere on the page, and grow in 
                                                    //size and visibility
            left: '300px',
            bottom: '+=500px',
            opacity: '2',
            height: '150px',
            width: '150px'
        });
    });
});

$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideDown(5000);               //Causes a panel to slide down over a period of 5 seconds
    });
    $("#stop").click(function () {
        $("#panel2").stop();                        //Stops the panel while it is sliding down (stops the animation)
    });
});

$(document).ready(function () {
    $("#eighth_button").click(function () {
        $("#hidep").hide("slow", function () {      //Hides the paragraph
            alert("The paragraph disappeared!");    //Alert is given as a callback after the paragraph is hidden completely
        });
    });
});

$(document).ready(function () {
    $("#ninth_button").click(function () {
        $("#chainp").css("color", "orange").slideUp(1500).slideDown(2500);  //A chain of methods, called "chaining".
                                                                    //The text changes color and moves up and down.
    });
});

$(document).ready(function () {
    $("#tenth_button").click(function () {
        alert("Text: " + $("#textp").text());       //An alert box displays the text of the designated paragraph
    });
    $("#eleventh_button").click(function () {
        alert("HTML: " + $("#textp").html());       //An alert box displays the HTML of the designated paragraph
    });
});

$(document).ready(function () {
    $("#twelfth_button").click(function () {
        alert($("#tTA").attr("href"));              //An alert box displays the href of the designated hyperlink
    });
});
