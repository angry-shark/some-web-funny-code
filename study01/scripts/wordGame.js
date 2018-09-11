var replaceIt = function() {
    var storyDiv = document.getElementById("story");
    var adj1 = "<span class='replacement'>" + document.getElementById('adj1').value + "</span>";

    var theStory = "<h1>Douglas's Dance Party</h1>"
    theStory += "One" + adj1 + "day,";

    storyDiv.innerHTML = theStory;
}