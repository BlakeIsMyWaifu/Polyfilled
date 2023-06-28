export interface Commits {
	sha: string;
	node_id: string;
	commit: Commit;
	url: string;
	html_url: string;
	comments_url: string;
	author: PurpleAuthor;
	committer: PurpleAuthor;
	parents: Parent[];
}

export interface PurpleAuthor {
	login: Login;
	id: number;
	node_id: NodeID;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: GistsURL;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: EventsURL;
	received_events_url: string;
	type: Type;
	site_admin: boolean;
}

export enum EventsURL {
	HTTPSAPIGithubCOMUsersBlakeIsMyWaifuEventsPrivacy = 'https://api.github.com/users/BlakeIsMyWaifu/events{/privacy}',
	HTTPSAPIGithubCOMUsersRamletonEventsPrivacy = 'https://api.github.com/users/Ramleton/events{/privacy}',
}

export enum GistsURL {
	HTTPSAPIGithubCOMUsersBlakeIsMyWaifuGistsGistID = 'https://api.github.com/users/BlakeIsMyWaifu/gists{/gist_id}',
	HTTPSAPIGithubCOMUsersRamletonGistsGistID = 'https://api.github.com/users/Ramleton/gists{/gist_id}',
}

export enum Login {
	BlakeIsMyWaifu = 'BlakeIsMyWaifu',
	Ramleton = 'Ramleton',
}

export enum NodeID {
	MDQ6VXNlcjMzMTg4NzI3 = 'MDQ6VXNlcjMzMTg4NzI3',
	MDQ6VXNlcjc3MjU5NTUz = 'MDQ6VXNlcjc3MjU5NTUz',
}

export enum Type {
	User = 'User',
}

export interface Commit {
	author: FluffyAuthor;
	committer: FluffyAuthor;
	message: string;
	tree: Tree;
	url: string;
	comment_count: number;
	verification: Verification;
}

export interface FluffyAuthor {
	name: Name;
	email: Email;
	date: string;
}

export enum Email {
	The33188727BlakeIsMyWaifuUsersNoreplyGithubCOM = '33188727+BlakeIsMyWaifu@users.noreply.github.com',
	The77259553RamletonUsersNoreplyGithubCOM = '77259553+Ramleton@users.noreply.github.com',
}

export enum Name {
	BlakeIsMyWaifu = 'BlakeIsMyWaifu',
	IshaanSaini = 'Ishaan Saini',
}

export interface Tree {
	sha: string;
	url: string;
}

export interface Verification {
	verified: boolean;
	reason: Reason;
	signature: string;
	payload: string;
}

export enum Reason {
	UnknownKey = 'unknown_key',
	Valid = 'valid',
}

export interface Parent {
	sha: string;
	url: string;
	html_url: string;
}
