export class Message {
    get msgText(): string {
        return this._msgText;
    }

    set msgText(value: string) {
        this._msgText = value;
    }

    private _msgText: string;

    constructor(msgText: string = "") {
        this._msgText = msgText;
    }
}