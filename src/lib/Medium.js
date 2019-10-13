import { async } from "q";

export class Medium{
    constructor(){
        // this.API = `https://api.medium.com/v1/users/{{9ad83c7225c}}/publications`;
        this.API = `https://api.medium.com/v1/9ad83c7225c`;
    }

    getArticles = async () => {
        const response = await fetch(this.API);
        const data = await response.json();

        return data;
    }
}