import {element, $, $$, browser} from "protractor";
import { userInfo } from "os";
import { ElementFinder, ElementArrayFinder } from "protractor/built/element";

interface addMachines {
    mark: string,
    volume: number,
    length: number,
    width: number,
    weight: number,
    power: number,
    price: number
}

export class AddMachines {
    
    mark: ElementFinder;
    volume: ElementFinder;
    length: ElementFinder;
    width: ElementFinder;
    weight: ElementFinder;
    power: ElementFinder;
    price: ElementFinder;

    buttonAddMachine: ElementFinder
    valuesAddMachines: ElementArrayFinder;
    removeMachines: ElementFinder;
    inputSortMark: ElementFinder;
    buttonFilter: ElementArrayFinder;

    constructor() {
        this.mark = $('[placeholder="Марка"]')
        this.volume = $('[placeholder = "Робочий о\'єм , метрів кубічних"]')
        this.length = $('[placeholder = "Довжина ,метрів"]')
        this.width = $('[placeholder = "Ширина ,метрів"]')
        this.weight = $('[placeholder = "Масса ,кг"]')
        this.power = $('[placeholder = "Потужність трактора , кВт"]')
        this.price = $('[placeholder = "Ціна"]')

        this.buttonAddMachine = $('.btn.btn-success')

        this.valuesAddMachines = $$('.active.brand')

        this.removeMachines = $('.btn.btn-warning')

        this.inputSortMark = $('input[placeholder="марка"]')

        this.buttonFilter = $$('.btn.btn-default')
    }

    async addMachines(machine) {
        const keys = Object.keys(machine);
        for( const key of keys) {
            //await this[key].waitForElement(1000);
            await this[key].sendKeys(machine[key]);
        };

        await this.buttonAddMachine.click();
    }

    async checkTheAudition(text) {
        //await this.valuesAddMachines.waitForElements(1000);
        const addMachines  = await this.valuesAddMachines.map(async (element) => {
                return await element.getText()   
                });
        let trueAddMachines = false;
        for(let i = 0; i < addMachines.length; i++) {
            if(text == addMachines[i]){
                trueAddMachines = true;
                break;
            };
        };
        return trueAddMachines;
    }

    async removeMachine() {
    
        const addMachines  = await this.valuesAddMachines.map(async (element) => {
            return await element.getText()   
            });

        await this.removeMachines.click();
        //await this.valuesAddMachines.waitForElements(1000);
        const newMachines  = await this.valuesAddMachines.map(async (element) => {
            return await element.getText()   
            });
        
        let checkedLength = false; 
        
        if(addMachines.length > newMachines.length) {
                checkedLength = true;
        };

            return checkedLength;
    }

    async filterMark(textMachine) {
        await this.inputSortMark.sendKeys(textMachine);

        //await this.buttonFilter.waitForElements(1000);
        const but = await this.buttonFilter.get(0);
        await but.click();

        //await this.valuesAddMachines.waitForElements(1000);
        const addMachines  = await this.valuesAddMachines.map(async (element) => {
                return await element.getText()   
                });
        
        let endFilter = false;
        for(let i = 0; i < addMachines.length; i++) {
            if(textMachine == addMachines[i]) {
                endFilter = true;
            }
        }
        return endFilter;
    }
}
