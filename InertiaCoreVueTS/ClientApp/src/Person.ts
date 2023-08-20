export class Person {
    get familyName(): string {
        return this._familyName;
    }

    set familyName(value: string) {
        this._familyName = value;
    }

    get givenName(): string {
        return this._givenName;
    }

    set givenName(value: string) {
        this._givenName = value;
    }

    private _givenName: string;
    private _familyName: string;

    constructor(givenName: string = "", familyName: string = "") {
        this._givenName = givenName;
        this._familyName = familyName;
    }

}