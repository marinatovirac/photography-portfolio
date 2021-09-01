window.addEventListener('load', function() {
  let imgList = []
  for (let index = 0; index < 28; index++) {
    imgList.push(`<div class="col-lg-3 col-md-4 col-6"> <a href='images/IMG_${index}.jpg' class="d-block mb-4 h-100"> <img class="img-fluid img-thumbnail" src='images/thumbnails/IMG_${index}.jpg' alt=""> </a> </div>`)
  }
  const element = document.getElementById("gallery")
  element.innerHTML = imgList.join('')
  baguetteBox.run('.gallery')
})