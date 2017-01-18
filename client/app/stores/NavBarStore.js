import alt from '../alt';
import NavBarActions from '../actions/NavBarActions';

class NavBarStore {
	constructor() {
		this.bindActions(NavBarActions);
		this.totalCharacters = 0;
		this.onlineUsers = 0;
		this.searchQuery = '';
		this.ajaxAnimationClass = '';
	}

	onFindCharacterSuccess(payload) {
		payload.history.pushState(null, '/characters/' + payload.characterId);
	}

	onFindCharacterFail(payload) {
		payload.searchForm.classList.add('shake');
		setTimeout(() => {
			payload.searchForm.classList.remove('shake');
		}, 1000);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}
}