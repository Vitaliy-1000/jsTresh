import {element, by, browser } from "protractor"
import {expect} from "chai"


describe('angularjs homepage todo list', function() {
    it('should add a todo', async function() {
      await browser.get('https://angularjs.org');
      //browser.sleep(5000);
      await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      await element(by.css('[value="add"]')).click();
      
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      console.log(todoList.count())
      expect(await todoList.count()).to.eql(3);
      
      expect(await todoList.get(2).getText()).to.eql('write first protractor test');
  
      // // You wrote your first test, cross it off the list
      await todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(await completedAmount.count()).to.eql(2);
    });
  });