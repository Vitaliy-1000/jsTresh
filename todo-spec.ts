import {element, by, browser } from "protractor";
import {expect} from "chai";
import {LoginForm} from "./object/login";

const loginForm = new LoginForm();
const userded = {
  username: 'ded',
  password: 'ded'
}

describe('angularjs homepage todo list', function() {
    it('should add a todo', async function() {
      await browser.get('http://localhost:5555');
      
      await loginForm.loginGo(userded);

      expect(await loginForm.url()).to.eql(loginForm.tableUrl);
    
    });
  });

