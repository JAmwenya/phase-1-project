document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('myForm');
  const documentList = document.getElementById('documentList');
  const submitButton = document.getElementById('submitButton');
  const updateButton = document.getElementById('updateButton');

  let editMode = false;
  let editId = null;

  myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const addWord = document.getElementById('word').value;
    const fileName = document.getElementById('title').value;
    const wordDocuments = {
      fileName: fileName,
      addWord: addWord,
    };

    if (editMode) {
      updateDocument(editId, wordDocuments);
    } else {
      postWordDocument(wordDocuments);
    }
  });

  function postWordDocument(wordDocuments) {
    fetch("http://localhost:3000/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wordDocuments),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Upload not successful!");
      }
      return response.json();
    })
    .then(() => {
      alert("Upload successful!");
      myForm.reset();
      renderDocuments();
    })
    .catch((error) => {
      alert("Upload not successful!", error);
    });
  }

  function deleteDocument(id) {
    fetch(`http://localhost:3000/documents/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Delete not successful!");
      }
      renderDocuments();
    })
    .catch((error) => {
      alert("Delete not successful!", error);
    });
  }

  function updateDocument(id, updatedDocument) {
    fetch(`http://localhost:3000/documents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDocument),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Update not successful!");
      }
      return response.json();
    })
    .then(() => {
      alert("Update successful!");
      myForm.reset();
      editMode = false;
      editId = null;
      submitButton.style.display = 'inline';
      updateButton.style.display = 'none';
      renderDocuments();
    })
    .catch((error) => {
      alert("Update not successful!", error);
    });
  }

  function renderDocuments() {
    fetch("http://localhost:3000/documents")
    .then((response) => response.json())
    .then((documents) => {
      documentList.innerHTML = '';
      documents.forEach((doc) => {
        const docElement = document.createElement('div');
        docElement.classList.add('document');
        docElement.innerHTML = `
          <p>Title: ${doc.fileName}</p>
          <p>Word Document: ${doc.addWord}</p>
          <button class="delete-button" data-id="${doc.id}">Delete</button>
          <button class="edit-button" data-id="${doc.id}">Edit</button>
        `;
        documentList.appendChild(docElement);
      });

      document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => {
          const id = button.getAttribute('data-id');
          const confirmDelete = confirm("Are you sure you want to delete this document?");
          if (confirmDelete) {
            deleteDocument(id);
          }
        });
      });

      document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', () => {
          const id = button.getAttribute('data-id');
          const documentToEdit = documents.find(doc => doc.id === id);
          if (documentToEdit) {
            document.getElementById('title').value = documentToEdit.fileName;
            document.getElementById('word').value = documentToEdit.addWord;
            editMode = true;
            editId = id;
            submitButton.style.display = 'none';
            updateButton.style.display = 'inline';
          }
        });
      });
    })
    .catch((error) => {
      console.error("Failed to fetch documents:", error);
    });
  }

  renderDocuments();
});
