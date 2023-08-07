var rich = rich || {};

rich.Uploader = function(){

	let dropzone = new Dropzone("form#file-upload-form")

  dropzone.on("success", function(file) {
    let uploadElt = document.getElementById("uploadBlock")
    let html = JSON.parse(file.xhr.response)
    uploadElt.insertAdjacentHTML("afterend", html.file_html)
  })
};
