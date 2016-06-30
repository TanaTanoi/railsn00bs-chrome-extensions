$.ajax({
    url: "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pizza+cat",
    success: function(result) {
        image_url = result.data.image_url;
				$("body").append(
					`<div class='box'><img width=500 src="${image_url}"></div>`
				);
    }
});