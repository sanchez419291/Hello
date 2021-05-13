var photos = ["https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg"];
for (let image of photos) {
        $(".gallery").append("<img src=" + image + ">");
    }
$(".add").click(function() {
    let image = $(".picture-url").val();
    photos.push(image);
    console.log(photos);
    $(".gallery").html("");
    for (let image of photos) {
        $(".gallery").append("<img src=" + image + ">");
    }
});