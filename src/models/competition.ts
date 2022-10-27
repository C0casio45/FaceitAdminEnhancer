export default class Competition {
    guid: string;
    game: string;
    name: string;
    organizerGuid: string;
    avatar: string;
    category: string;

    constructor(guid: string, game: string, name: string, organizerGuid: string, avatar: string, category: string) {
        this.guid = guid;
        this.game = game;
        this.name = name;
        this.organizerGuid = organizerGuid;
        this.avatar = avatar;
        this.category = category;
    }

    static fromJson(json: any) {
        return new Competition(json.guid, json.game, json.name, json.organizerGuid, json.avatar, json.category);
    }
    
}