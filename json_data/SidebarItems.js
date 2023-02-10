export const SidebarItems = [
  { title: 'Dashboard', link: '/' },
  {
    title: 'Inventory',
    subMenu: [
      { title: 'Items', link: '/items' },
      { title: 'Item Groups', link: '/item-groups' },
      { title: 'Inventory Adjustment', link: '/inventory-adjustment' },
    ],
  },
  {
    title: 'Sales',
    subMenu: [
      {
        title: 'Customers',
        link: '/customers',
      },
      {
        title: 'Sales Orders',
        link: '/sales-orders',
      },
      {
        title: 'Packages',
        link: '/packages',
      },
      {
        title: 'Shipments',
        link: '/shipments',
      },
      {
        title: 'Invoices',
        link: '/invoices',
      },
      {
        title: 'Sales Receipts',
        link: '/slaes-receipts',
      },
      {
        title: 'Payments Received',
        link: '/payments-received',
      },
      {
        title: 'Sales Returns',
        link: '/sales-returns',
      },
      {
        title: 'Credit Notes',
        link: '/credit-notes',
      },
    ],
  },
  {
    title: 'Purchases',
    subMenu: [
      {
        title: 'Vendors',
        link: '/vendors',
      },
      {
        title: 'Expenses',
        link: '/expenses',
      },
      {
        title: 'Purchase Orders',
        link: '/purchase-orders',
      },
      {
        title: 'Purchase Receives',
        link: '/purchase-receives',
      },
      {
        title: 'Bills',
        link: '/bills',
      },
      {
        title: 'Payments Made',
        link: '/payments-made',
      },
      {
        title: 'Vendor Credits',
        link: '/vendor-credits',
      },
    ],
  },
  {
    title: 'Integrations',
  },
  {
    title: 'Reports',
  },
  {
    title: 'Documents',
  },
];
