import { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new item object
    const newItem = {
      id: Math.random().toString(36).substr(2, 9), // Generate random ID
      name: name,
      category: category,
    };
    
    // Call the callback with the new item
    onItemFormSubmit(newItem);
    
    // Reset form
    setName('');
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;