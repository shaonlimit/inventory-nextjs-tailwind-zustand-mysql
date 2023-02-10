import { SidebarItems } from '../json_data/SidebarItems'

const Sidebar = () => {
	return (
		<div className=' w-64 bg-primary-100'>
			<ul className='grid gap-5'>
				{SidebarItems.map((menu, index) => (
					<li key={index} className='group'>
						{menu.title}
						{menu.subMenu
							? menu.subMenu.map((item, index) => (
									<ul className='hidden group-hover:grid pl-5'>
										<li>{item.title}</li>
									</ul>
							  ))
							: null}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
