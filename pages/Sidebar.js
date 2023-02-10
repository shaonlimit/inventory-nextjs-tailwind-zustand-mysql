import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
	const [selected, setSelected] = useState(null)

	const handleClick = (item) => {
		setSelected(selected === item ? null : item)
	}

	return (
		<div className='sidebar w-64 bg-primary-100'>
			<h1>Inventory Management</h1>
			<ul>
				<Link href='/'>
					<li>Dashboard</li>
				</Link>
				<li className='group'>
					Inventory
					<ul className='hidden group-hover:grid gap-1 pl-5'>
						<Link href='/items'>
							<li>Items</li>
						</Link>
						<Link href='/item-groups'>
							<li>Item Groups</li>
						</Link>
						<Link href='/inventory-adjustment'>
							<li>Inventory Adjustment</li>
						</Link>
					</ul>
				</li>
				<li className='group'>
					{' '}
					Sales
					<ul className='hidden group-hover:grid gap-1 pl-5'>
						<Link href='/customers'>
							<li>Customers</li>
						</Link>
						<Link href='/sales-orders'>
							<li>Sales Orders</li>
						</Link>
						<Link href='/packages'>
							<li>Packages</li>
						</Link>
						<Link href='/shipments'>
							<li>Shipments</li>
						</Link>
						<Link href='/invoices'>
							<li>Invoices</li>
						</Link>
						<Link href='/slaes-receipts'>
							<li>Sales Receipts</li>
						</Link>

						<Link href='/payments-received'>
							<li>Payments Reveived</li>
						</Link>

						<Link href='/sales-returns'>
							<li>Sales Returns</li>
						</Link>

						<Link href='/credit-notes'>
							<li>Credit Notes</li>
						</Link>
					</ul>
				</li>

				<li className='group'>
					Purchases
					<ul className='hidden group-hover:grid gap-1 pl-5'>
						<Link href='/vendors'>
							<li>Vendors</li>
						</Link>
						<Link href='/expenses'>
							<li>Expenses</li>
						</Link>
						<Link href='/purchase-orders'>
							<li>Purchase Orders</li>
						</Link>
						<Link href='/purchase-receives'>
							<li>Purchase Receives</li>
						</Link>
						<Link href='/bills'>
							<li>Bills</li>
						</Link>
						<Link href='/payments-made'>
							<li>Payments Made</li>
						</Link>
						<Link href='/vendor-credits'>
							<li>Vendor Credits</li>
						</Link>
					</ul>
				</li>
				<li>Integrations</li>
				<li>Reports</li>
				<li>Documents</li>
			</ul>
		</div>
	)
}

export default Sidebar
