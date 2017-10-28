import { observable, action } from 'mobx';
import { deleteSmurfs } from './services/smurf-service';

const store = observable({
	activeItem: null,
	data: [],
	selectedItems: [],
	width: 300,
	isEditMode: false,
	deleting: false,

	onItemClick: action((item) => {
		const newData = store.data.slice();
		newData.splice(newData.indexOf(item), 1, {...item, isRead: true});

		store.activeItem = item;
		store.data = newData;
	}),

	onSelectItem: action((item, isChecked) => {
		let selectedItems;
		if (isChecked) {
			selectedItems = store.selectedItems.concat(item);
		} else {
			selectedItems = store.selectedItems.filter(item2 => item2.name !== item.name);
		}

		store.selectedItems = selectedItems;
	}),

	onEdit: action(() => {
		store.isEditMode = !store.isEditMode;
	}),

	onDelete: action(() => {
		const { data, selectedItems } = store;
		store.deleting = true;

		deleteSmurfs(selectedItems).then(action(() => {
			store.data = data.filter(item => !selectedItems.find(item2 => item2.name === item.name));
			store.isEditMode = false;
			store.selectedItems = [];
			store.deleting = false;
		}));
	}),

	setWidth: action((width) => {
		store.width = width;
	}),
});

export default store;