$("form").on("submit", function() {
    let text = $("#message").val();
    alert(text);
    return false;
});
