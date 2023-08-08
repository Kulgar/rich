var rich = rich || {};

rich.Uploader = function(){

	var dropzone = new Dropzone("form#file-upload-form")

  dropzone.on("success", function(file) {
    var uploadElt = document.getElementById("uploadBlock")
    var html = JSON.parse(file.xhr.response)
    uploadElt.insertAdjacentHTML("afterend", html.file_html)
  })
};
