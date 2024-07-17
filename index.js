document.addEventListener('DOMContentLoaded', () => {
  // Fetch images from server
  // fetch("http://localhost:8080/path/to/images.db")
  //   .then((resp) => resp.json())
  //   .then((json) => console.log(json));

  // Add click event listener to a specific element, for example a button
  // const addPdf = document.getElementById('pdf');
  // const addExcel = document.getElementById('excel');
  // const addPpt = document.getElementById('ppt');
  //const renderFile = wordDocuments[0].fileName 

  myForm.addEventListener('submit', (event) => {
    // navigate to word page
    event.preventDefault();

  const addWord = document.getElementById('word').value;
  const fileName = document.getElementById('title').value;
  const wordDocuments = [
    {
      fileName: fileName,
      addWord: addWord,
    },
  ];
  postWordDocument(wordDocuments)
  });
function postWordDocument(wordDocuments){
fetch("http://localhost:3000/documents", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(wordDocuments),
})
.then((response) => {
  if(!response.ok){
    throw new Error("Upload not successful!");
  }
  return response.json();
})
.then((data) => {
  alert("Upload successful!", data);
   myForm.reset()
})
.catch((error) => {
  alert("Upload not successful!", error)
});

  //addWord.addEventListener('click', function() {
  //     promptSubmitForm('word.html');
  // });
}
});

//   // Navigate to pdf page
//   addPdf.addEventListener('click', function() {
//       promptSubmitForm('pdf.html');
//   });

//   // Navigate to excel page
//   addExcel.addEventListener('click', function() {
//       promptSubmitForm('excel.html');
//   });
      
//   // Navigate to ppt page
//   addPpt.addEventListener('click', function() {
//       promptSubmitForm('powerpoints.html');
//   });
// };
//   // Function to prompt for form submission
//   function promptSubmitForm(destination) {
//     if (confirm('Are you sure you want to submit the form?')) {
//         // Navigate to the desired destination
//         window.location.href = destination;
//     } else {
//         return false;
//     }
// }
// });
