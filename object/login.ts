import {element, $, browser} from "protractor";
import { userInfo } from "os";
import { ElementFinder } from "protractor/built/element";


interface user{
    username: string,
    password: string
}

export class LoginForm  {
    
    username: ElementFinder;
    password: ElementFinder;
    tableUrl: string;
    constructor() {
        this.username =  $('[placeholder = "ім\'я"]')
        this.password = $('[placeholder = "пароль"]')
        this.tableUrl = 'http://localhost:5555/table'

    }

    async url() {
        return await browser.getCurrentUrl();
        
    }

    async loginGo(user: user ) {
        await this.username.sendKeys(user.username);
        await this.password.sendKeys(user.password);
        await $('.btn.btn-primary').click();
    }
}

