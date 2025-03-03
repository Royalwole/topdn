import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API calls

const CreateListing = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/properties', { // API endpoint for creating a listing
        title,
        price,
        description,
      });
      console.log('Listing created:', response.data);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Listing</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Create Listing</button>
    </form>
  );
};

export default CreateListing;