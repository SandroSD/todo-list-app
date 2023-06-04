export interface IItem {
	uuid: string;
	content: string;
	isSelected: boolean;
	createdAt: Date;
}

export type TodoContextType = {
	list: IItem[];
	saveList: (item: string) => void;
	item: string;
	saveItem: (text: string) => void;
	handleDeleteTask: (id: string) => void;
	handleCompleteTask: (id: string) => void;
};

export interface IProvider {
	children?: React.ReactNode;
}
