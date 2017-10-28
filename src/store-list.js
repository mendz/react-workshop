import { observable, action } from 'mobx';

const store = observable({
	filter: null,

	onFilterChange: action(filter => {
		store.filter = filter;
	})
});

export default store;