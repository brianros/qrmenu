import { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenuItems() {
      const res = await fetch('/api/menuItems');
      const { data } = await res.json();
      setMenuItems(data);
    }
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h1>Our Menu</h1>
      {menuItems.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
}
