class GitHub {
	constructor() {
		this.client_id = "5cdd2d90d02be5e178ca";
		this.client_secret = "ec8a3f1a3dfd59616fb532b0921688c3bbb506e1";
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		};
	}
}