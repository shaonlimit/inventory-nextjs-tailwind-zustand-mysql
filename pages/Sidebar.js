import Link from 'next/link';
import React, { useState } from 'react';
import { SidebarItems } from '../json_data/SidebarItems';

const Sidebar = () => {
  return (
    <div className='sidebar w-64 bg-primary-100'>
      <h1>Inventory Management</h1>
      <ul>
        {SidebarItems.map((item, index) => (
          <li key={index}>
            {item.title}
            {item.subMenu &&
              item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem.title}</li>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
