export default class User {
    avatarUrl: string;
    nickname: string;
    guid: string;
    country: string;

    constructor(avatarUrl: string, nickname: string, guid: string, country: string) {
        this.avatarUrl = avatarUrl;
        this.nickname = nickname;
        this.guid = guid;
        this.country = country;
    }

    static fromJson(json: any) {
        return new User(json.avatarUrl, json.nickname, json.guid, json.country);
    }

}