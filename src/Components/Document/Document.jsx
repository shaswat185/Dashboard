import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./document.css"; // Custom CSS for styling

const Document = () => {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments([...documents, { name: file.name, file }]);
    }
  };

  const handleDelete = (index) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocs);
  };

  return (
    <div className="document-section">
      <h2>Document Section</h2>
      
      
      <div className="upload-container">
        <input
          type="file"
          id="file-upload"
          onChange={handleUpload}
        />
        <label htmlFor="file-upload" className="upload-label">
          Upload Document
        </label>
      </div>

      
      <div className="document-list">
        {documents.map((doc, index) => (
          <div key={index} className="document-item">
            <p>{doc.name}</p>
            <div className="document-actions">
             
              <button
                className="action-btn download-btn"
                onClick={() => console.log("Download:", doc.name)}
              >
                <FontAwesomeIcon icon={faDownload} />
              </button>
              
              <button
                className="action-btn delete-btn"
                onClick={() => handleDelete(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
