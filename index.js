function handleFileSelect(e) {

  var files = e.dataTransfer.files; 

    var reader = new FileReader();
    
    reader.onload = function(e) {
      document.querySelector("#dropArea").classList.remove("active");
      var json = e.target.result;
 
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(json, null, "\t" )));
      element.setAttribute('download', "edited.json");
      element.click();    
    }
    reader.readAsText(files[0]);

  };

function handleDragOver(e) {
  document.querySelector("#dropArea").classList.add("active");
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}

var dropZone = document.getElementById('dropArea');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
dropZone.addEventListener('dragleave', function(){
  document.querySelector("#dropArea").classList.remove("active");
}, false);

