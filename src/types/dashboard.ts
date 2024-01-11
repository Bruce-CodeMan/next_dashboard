// 定义单个菜单项的类型
export interface MenuItem {
	title: string;
	path: string;
	icon: React.ReactNode
}

// 定义具有子菜单列表的菜单项的类型
export interface MenuGroup {
	title: string;
	list: MenuItem[];
}