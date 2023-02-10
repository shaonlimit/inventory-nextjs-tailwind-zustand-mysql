import Link from 'next/link';
import React, { useState } from 'react';
import { SidebarItems } from '../json_data/SidebarItems';

const Sidebar = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (item) => {
    setSelected(selected === item ? null : item);
  };

  return (
    <div className='sidebar w-64 bg-primary-100'>
      <h1>Inventory Management</h1>
      <ul>
        {SidebarItems.map((item) => (
          <React.Fragment key={item.title}>
            {!item.subitems ? (
              <Link href={item.link}>
                <li>{item.title}</li>
              </Link>
            ) : (
              <li onClick={() => handleClick(item.title)}>
                {item.title}
                {selected === item.title && (
                  <ul>
                    {item.subitems.map((subitem) => (
                      <Link href={subitem.link} key={subitem.title}>
                        <li>{subitem.title}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
