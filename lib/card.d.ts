import { QueryList, ElementRef } from '@angular/core';
import { NgxCardNumberTemplate, NgxCardNameTemplate, NgxCardExpiryTemplate, NgxCardCvcTemplate } from './inputs';
import * as i0 from "@angular/core";
export declare class NgxCard {
    private element;
    container: any;
    width: number;
    _messages: any;
    set messages(_messages: any);
    get messages(): any;
    _placeholders: any;
    set placeholders(_placeholders: any);
    get placeholders(): any;
    masks: any;
    formatting: boolean;
    debug: boolean;
    numbers: QueryList<NgxCardNumberTemplate>;
    names: QueryList<NgxCardNameTemplate>;
    expiries: QueryList<NgxCardExpiryTemplate>;
    cvcs: QueryList<NgxCardCvcTemplate>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    findInputSelectors(list: QueryList<any>): string;
    static ɵfac: i0.ɵɵFactoryDef<NgxCard, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxCard, "[card]", never, { "container": "container"; "width": "card-width"; "messages": "messages"; "placeholders": "placeholders"; "masks": "masks"; "formatting": "formatting"; "debug": "debug"; }, {}, ["numbers", "names", "expiries", "cvcs"]>;
}
