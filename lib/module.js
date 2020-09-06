import { NgModule } from '@angular/core';
import { NgxCardNumberTemplate, NgxCardNameTemplate, NgxCardExpiryTemplate, NgxCardCvcTemplate } from './inputs';
import { NgxCard } from './card';
import * as i0 from "@angular/core";
var CARD_DIRECTIVES = [
    NgxCard,
    NgxCardNumberTemplate,
    NgxCardNameTemplate,
    NgxCardExpiryTemplate,
    NgxCardCvcTemplate,
];
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardModule });
    CardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); } });
    return CardModule;
}());
export { CardModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardModule, { declarations: [NgxCard,
        NgxCardNumberTemplate,
        NgxCardNameTemplate,
        NgxCardExpiryTemplate,
        NgxCardCvcTemplate], exports: [NgxCard,
        NgxCardNumberTemplate,
        NgxCardNameTemplate,
        NgxCardExpiryTemplate,
        NgxCardCvcTemplate] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                declarations: [CARD_DIRECTIVES],
                exports: [CARD_DIRECTIVES],
            }]
    }], null, null); })();
//# sourceMappingURL=module.js.map