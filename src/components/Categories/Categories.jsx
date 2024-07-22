import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../stores/categoriesR';
function Categories() {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  console.log(categories);
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <ul>
      {categories.map((category) => {
        return <li key={category.id}>{ category.name}</li>
      })}
    </ul>
  )
}
export default Categories;