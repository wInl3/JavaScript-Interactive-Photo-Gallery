/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Check if the function is triggered
    console.log("upDate triggered");

    // Log details about the previewPic
    console.log("Image Source: ", previewPic.src);
    console.log("Image Alt: ", previewPic.alt);

    // Change the background image of the div with id = "image"
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;

    // Change the text of the div with id = "image"
    document.getElementById("image").innerHTML = previewPic.alt;
}

	function unDo() {
    // Update the url for the background image of the div with the id = "image"
    document.getElementById("image").style.backgroundImage = "url('')";

    // Change the text of the div with id = "image" back to the original text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}