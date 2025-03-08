import React, { useState } from 'react';
import axios from 'axios';

// Define the shape of formData
interface FormData {
  imageUrls: string[];
  title: string;
  price: number;
  description: string;
}

const CreateListing: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>({
    imageUrls: [],
    title: '',
    price: 0,
    description: '',
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageUploadError, setImageUploadError] = useState('');

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setImageUploadError('Please select at least one image');
      return;
    }
    const formDataToSend = new FormData();
    files.forEach(file => {
      formDataToSend.append('images[]', file);
    });
    try {
      setUploading(true);
      const response = await axios.post('/api/upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormData(prev => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...response.data.imageUrls],
      }));
      setFiles([]);
      setImageUploadError('');
    } catch (err) {
      setImageUploadError('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.price || formData.imageUrls.length === 0) {
      setError('All fields are required, including at least one image.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('/api/properties', formData);
      console.log('Listing created:', response.data);
      setError('');
    } catch (error) {
      setError('Error creating listing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-listing-form">
      <h2>Create New Listing</h2>
      <div>
        <label>Title:</label>
        <input type="text" id="title" onChange={handleChange} required className="form-input" />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" id="price" onChange={handleChange} required className="form-input" />
      </div>
      <div>
        <label>Description:</label>
        <textarea id="description" onChange={handleChange} required className="form-textarea" />
      </div>
      <div>
        <label>Images:</label>
        <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="form-file" />
        <button type="button" onClick={handleImageSubmit} disabled={uploading} className="upload-button">
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
      </div>
      {formData.imageUrls.length > 0 && (
        <div>
          <h3>Uploaded Images</h3>
          {formData.imageUrls.map((url, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <img src={url} alt={`Uploaded image ${index + 1}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <button type="button" onClick={() => handleRemoveImage(index)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button type="submit" disabled={loading} className="create-button">
        {loading ? 'Creating...' : 'Create Listing'}
      </button>
      {error && <p className="error">{error}</p>}
      {imageUploadError && <p className="error">{imageUploadError}</p>}
    </form>
  );
};

export default CreateListing;
