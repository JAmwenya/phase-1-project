document.addEventListener('DOMContentLoaded', () => {
  // Fetch images from server
  fetch("http://localhost:8080/path/to/images.db")
    .then((resp) => resp.json())
    .then((json) => console.log(json));

  // Add click event listener to a specific element, for example a button
  const addWord = document.getElementById('word');
  const addPdf = document.getElementById('pdf');
  const addExcel = document.getElementById('excel');
  const addPpt = document.getElementById('ppt');
  const addImage = document.getElementById('image-icon');

  addWord.addEventListener('click', () => {
    // navigate to word page
    window.location.href = 'word.html';});

    //navigate to pdf page
    addPdf.addEventListener('click', () => {
      window.location.href = 'pdf.html';});

    //navigate to excel page
    addExcel.addEventListener('click', () => {
      window.location.href = 'excel.html';});
        
    //navigate to ppt page
    addPpt.addEventListener('click', () => {
      window.location.href = 'powerpoints.html';});

    //navigate to image page
    addImage.addEventListener('click', () => {
      window.location.href = 'images.html';});
})