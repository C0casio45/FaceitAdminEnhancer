import Competition from './competition';
import User from './user';

export default class BanItem {
    user: User;
    competition: Competition;
    reason: string;
    createdBy: User;
    createdAt: string;

    constructor(user: User, competition: Competition, reason: string, createdBy: User, createdAt: string) {
        this.user = user;
        this.competition = competition;
        this.reason = reason;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }

    static fromJson(json: any) {
        return new BanItem(User.fromJson(json.user), Competition.fromJson(json.competition), json.reason, User.fromJson(json.createdBy), json.createdAt);
    }
}