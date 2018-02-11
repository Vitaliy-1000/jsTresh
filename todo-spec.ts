import {element, by, browser } from "protractor";
import {expect} from "chai";
import {LoginForm} from "./object/login";
import {AddMachines} from "./object/addMachines";
import {SortTable} from "./object/sortTable";

const sortTable = new SortTable();
const addMachines = new AddMachines();
const loginForm = new LoginForm();

const userded = {
  username: 'ded',
  password: 'ded'
};

const machine = {
  mark: 'Sapa-200',
  volume: '12',
  length: '12',
  width: '23',
  weight: '32',
  power: '4643',
  price: '5000463'
}

describe('angularjs homepage todo list', function() {
    it('should add a todo', async function() {
      await browser.get('http://localhost:5555');
      
      await loginForm.loginGo(userded);

      expect(await loginForm.url()).to.eql(loginForm.tableUrl);
    
      await sortTable.sortByPrice.lowToHight();
      const sortResult = await sortTable.textArraySortPrice('lowToHight');

      expect(sortResult).to.eql(true);

      await sortTable.sortByPrice.higthToLow();
      const sortResultH = await sortTable.textArraySortPrice('higthToLow');

      expect(sortResultH).to.eql(true);
    
      await addMachines.addMachines(machine);

      expect(await addMachines.checkTheAudition('Sapa-200')).to.eql(true);
    
      //expect(await addMachines.removeMachine()).to.eql(true);

      expect(await addMachines.filterMark('ITALMIX DUPLEX 10 MC')).to.eql(true);
    });
  });