import { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;