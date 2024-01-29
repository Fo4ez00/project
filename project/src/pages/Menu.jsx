import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess, fetchError } from './MenuSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const { menuData, error } = useSelector((state) => state.menu);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch(fetchSuccess(data));
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };

    fetchMenuData();
  }, [dispatch]);

  useEffect(() => {
    // This effect runs whenever menuData changes
    console.log('Menu Data:', menuData);
  }, [menuData]);

  return (
    <div>
      <h2>Menu</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {menuData.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.unitPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;