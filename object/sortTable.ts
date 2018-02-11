import {element, $, $$, browser, protractor, ExpectedConditions} from "protractor";
import { userInfo } from "os";
import { ElementFinder, ElementArrayFinder } from "protractor/built/element";

interface tableSort {
    systemUrl: string,
    buttonGroup: string,
    price: number
}

export class SortTable {
    
    buttonGroup:ElementArrayFinder;
    price: ElementArrayFinder;
    
    constructor() {
        this.buttonGroup = $$('.btn.btn-default'),
        this.price = $$('.active.price')
    }

    get sortByPrice() {
        return { 

            lowToHight: async () => {
                let EC = protractor.ExpectedConditions;
                await browser.wait(EC.elementToBeClickable($('.btn.btn-default')), 2000);
                const but = await this.buttonGroup.get(1);
                await but.click();
                },

            higthToLow: async () => {
                let EC = protractor.ExpectedConditions;
                await browser.wait(EC.elementToBeClickable($('.btn.btn-default')), 2000);
                const but = await this.buttonGroup.get(2);
                await but.click(); 
            }
            

        }
    }

    async textArraySortPrice(asertType) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable($('.active.price')), 2000);
        let textArr = [];
        textArr = await this.price.map(async (element) => {
                return await element.getText()   
                });
        let testSort = true;              

        for(let i = 0;i < textArr.length-1; i++) {
            const aserter = () => {
                return asertType == 'lowToHight' ? +textArr[i] > +textArr[i+1] : +textArr[i] < +textArr[i+1]
            }
                if (aserter()) {
                testSort = false
                break
            };
        };
        return testSort 
    }
}