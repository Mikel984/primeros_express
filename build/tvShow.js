"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _tvShow_title, _tvShow_seasons, _tvShow_delivered, _tvShow_gender, _tvShow_author;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvShow = void 0;
class tvShow {
    constructor(title, seasons, gender, author) {
        _tvShow_title.set(this, void 0);
        _tvShow_seasons.set(this, 3);
        _tvShow_delivered.set(this, false);
        _tvShow_gender.set(this, void 0);
        _tvShow_author.set(this, void 0);
        __classPrivateFieldSet(this, _tvShow_title, title, "f");
        __classPrivateFieldSet(this, _tvShow_seasons, seasons, "f");
        __classPrivateFieldSet(this, _tvShow_gender, gender, "f");
        __classPrivateFieldSet(this, _tvShow_author, author, "f");
    }
    get title() {
        return __classPrivateFieldGet(this, _tvShow_title, "f");
    }
    set title(newTitle) {
        __classPrivateFieldSet(this, _tvShow_title, newTitle, "f");
    }
    get seasons() {
        return __classPrivateFieldGet(this, _tvShow_seasons, "f");
    }
    set seasons(newSeasons) {
        __classPrivateFieldSet(this, _tvShow_seasons, newSeasons, "f");
    }
    get gender() {
        return __classPrivateFieldGet(this, _tvShow_gender, "f");
    }
    set gender(newGender) {
        __classPrivateFieldSet(this, _tvShow_gender, newGender, "f");
    }
    get author() {
        return __classPrivateFieldGet(this, _tvShow_author, "f");
    }
    set author(newAuthor) {
        __classPrivateFieldSet(this, _tvShow_author, newAuthor, "f");
    }
    toString() {
        return `Name: ${__classPrivateFieldGet(this, _tvShow_title, "f")}\n Seasons: ${__classPrivateFieldGet(this, _tvShow_seasons, "f")}\n Gender: ${__classPrivateFieldGet(this, _tvShow_gender, "f")}\n Aitor: ${__classPrivateFieldGet(this, _tvShow_author, "f")}`;
    }
    //implementamos todos los metodos de la interface que implementamos
    deliver() {
        __classPrivateFieldSet(this, _tvShow_delivered, true, "f");
    }
    return() {
        __classPrivateFieldSet(this, _tvShow_delivered, false, "f");
    }
    isDelivered() {
        return __classPrivateFieldGet(this, _tvShow_delivered, "f");
    }
    compareTo(objectToCompare) {
        let longestShow = this;
        if (__classPrivateFieldGet(this, _tvShow_seasons, "f") < __classPrivateFieldGet(objectToCompare, _tvShow_seasons, "f"))
            longestShow = objectToCompare;
        return longestShow;
    }
}
exports.tvShow = tvShow;
_tvShow_title = new WeakMap(), _tvShow_seasons = new WeakMap(), _tvShow_delivered = new WeakMap(), _tvShow_gender = new WeakMap(), _tvShow_author = new WeakMap();
const miShow = new tvShow("Friends", 7, "Comedy", "Jano");
console.log(miShow.toString());
