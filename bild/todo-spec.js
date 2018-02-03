"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai_1 = require("chai");
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        protractor_1.browser.get('https://angularjs.org');
        protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test');
        protractor_1.element(protractor_1.by.css('[value="add"]')).click();
        var todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        chai_1.expect(todoList.count()).toEqual(3);
        chai_1.expect(todoList.get(2).getText()).toEqual('write first protractor test');
        // You wrote your first test, cross it off the list
        todoList.get(2).element(protractor_1.by.css('input')).click();
        var completedAmount = protractor_1.element.all(protractor_1.by.css('.done-true'));
        chai_1.expect(completedAmount.count()).toEqual(2);
    });
});
//# sourceMappingURL=todo-spec.js.map