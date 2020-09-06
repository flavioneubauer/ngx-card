import { Directive, Input, ContentChildren } from '@angular/core';
import { NgxCardNumberTemplate, NgxCardNameTemplate, NgxCardExpiryTemplate, NgxCardCvcTemplate } from './inputs';
import * as i0 from "@angular/core";
var defaultPlaceholders = {
    number: '•••• •••• •••• ••••',
    name: 'Full Name',
    expiry: '••/••',
    cvc: '•••',
};
var defaultMessages = {
    validDate: 'valid\nthru',
    monthYear: 'month/year',
};
var NgxCard = /** @class */ (function () {
    function NgxCard(element) {
        this.element = element;
        this.formatting = true; // optional - default true
        // if true, will log helpful messages for setting up Card
        this.debug = false; // optional - default false
    }
    Object.defineProperty(NgxCard.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        set: function (_messages) {
            this._messages = Object.assign({}, defaultMessages, _messages);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NgxCard.prototype, "placeholders", {
        get: function () {
            return this._placeholders;
        },
        set: function (_placeholders) {
            this._placeholders = Object.assign({}, defaultPlaceholders, _placeholders);
        },
        enumerable: false,
        configurable: true
    });
    NgxCard.prototype.ngAfterViewInit = function () {
        console.log("NgxCardIonicDirective::ngAfterViewInit()");
        console.dir(this.element);
        new Card({
            form: this.element.nativeElement,
            container: this.container,
            width: this.width,
            formSelectors: {
                numberInput: this.findInputSelectors(this.numbers),
                expiryInput: this.findInputSelectors(this.expiries),
                cvcInput: this.findInputSelectors(this.cvcs),
                nameInput: this.findInputSelectors(this.names),
            },
            formatting: this.formatting,
            messages: this.messages,
            placeholders: this.placeholders,
            masks: this.masks,
            debug: this.debug,
        });
    };
    /*
        findSelectors(list: QueryList<any>): string {
            return list.map(template => template.elementRef.nativeElement.tagName.toLowerCase() + '[name="' + template.name + '"]').join(', ');
        }
    */
    NgxCard.prototype.findInputSelectors = function (list) {
        return list.map(function (template) { return "input[name=\"" + template.name + "\"]"; }).join(', ');
    };
    NgxCard.ɵfac = function NgxCard_Factory(t) { return new (t || NgxCard)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NgxCard.ɵdir = i0.ɵɵdefineDirective({ type: NgxCard, selectors: [["", "card", ""]], contentQueries: function NgxCard_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgxCardNumberTemplate, true);
            i0.ɵɵcontentQuery(dirIndex, NgxCardNameTemplate, true);
            i0.ɵɵcontentQuery(dirIndex, NgxCardExpiryTemplate, true);
            i0.ɵɵcontentQuery(dirIndex, NgxCardCvcTemplate, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numbers = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.names = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expiries = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cvcs = _t);
        } }, inputs: { container: "container", width: ["card-width", "width"], messages: "messages", placeholders: "placeholders", masks: "masks", formatting: "formatting", debug: "debug" } });
    return NgxCard;
}());
export { NgxCard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxCard, [{
        type: Directive,
        args: [{
                selector: '[card]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { container: [{
            type: Input
        }], width: [{
            type: Input,
            args: ['card-width']
        }], messages: [{
            type: Input
        }], placeholders: [{
            type: Input
        }], masks: [{
            type: Input
        }], formatting: [{
            type: Input
        }], debug: [{
            type: Input
        }], numbers: [{
            type: ContentChildren,
            args: [NgxCardNumberTemplate, { descendants: true }]
        }], names: [{
            type: ContentChildren,
            args: [NgxCardNameTemplate, { descendants: true }]
        }], expiries: [{
            type: ContentChildren,
            args: [NgxCardExpiryTemplate, { descendants: true }]
        }], cvcs: [{
            type: ContentChildren,
            args: [NgxCardCvcTemplate, { descendants: true }]
        }] }); })();
;
//# sourceMappingURL=card.js.map