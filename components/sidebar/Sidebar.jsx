import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItems } from '../../jsonData/NavigationItems';

const Sidebar = () => {
  const [showSubItems, setShowSubItems] = useState({});

  const handleSubItemClick = (index) => {
    setShowSubItems({
      ...showSubItems,
      [index]: !showSubItems[index],
    });
  };

  return (
    <div className='bg-primary-100  w-64'>
      <h1 className='text-xl font-medium m-6 text-white'>
        Inventory Management
      </h1>
      <ul className='list-none m-6 text-sm'>
        {NavigationItems.map((item, index) => (
          <React.Fragment key={item.label}>
            {item.subItems ? (
              <li className=' text-white mb-6 px-4 py-2 rounded hover:bg-primary-200 transition duration-150'>
                <div onClick={() => handleSubItemClick(index)}>
                  {item.label}
                </div>
                {showSubItems[index] && (
                  <ul className='pl-10 mt-2'>
                    {item.subItems.map((subItem) => (
                      <Link to={subItem.route} key={subItem.label}>
                        <li className='text-white mb-3 px-4 py-2 rounded hover:bg-sidebar-secondary transition duration-150'>
                          {subItem.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <Link to={item.route}>
                <li className='text-white mb-6 px-4 py-2 rounded hover:bg-sidebar-secondary transition duration-150'>
                  {item.label}
                </li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
