import { async } from "q";

export class Github{
    constructor(username){
        this.API = `https://api.github.com/users/${username}`;
    }

    getRepo = async () => {
        const response = await fetch(`${this.API}/repos`);
        const data = await response.json();

        return data;
    }
}