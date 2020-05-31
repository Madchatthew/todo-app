// Check off specific todos by clicking

$("ul").on("click", "li", function() {

// All of this code can be replaced by one line
    // if li is gray
        // if($(this).css("color") === "rgb(128, 128, 128)") {
        //     $(this).css({
        //         color: "black",
        //         textDecoration: "none"
        //     });
        // } else {
        //     $(this).css({
        //         color: "gray",
        //         textDecoration: "line-through"
        //     });
        // };
    $(this).toggleClass("completed");
});

// Click on x to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Adding a new shit todo list item using the input field

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // Grabbing the text that is typed into the input field
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li using that value
        $("ul").append("<li>" + "<span><i class='fas fa-toilet fa-lg'></i></span> " + todoText + "</li>");
    }
});

// Toggles the poo to be able to add more tasks

$(".fa-poo").click(function() {
    $("input[type='text']").fadeToggle();
});