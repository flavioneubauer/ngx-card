import { Directive, Attribute } from "@angular/core";
import { uniqueId } from "./util";
import * as i0 from "@angular/core";
var NgxCardNumberTemplate = /** @class */ (function () {
    function NgxCardNumberTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardNumberTemplate.prototype.ngOnInit = function () {
        this.name = this.name || uniqueId("number");
        if (!this.elementRef.nativeElement.name) {
            this.elementRef.nativeElement.setAttribute("name", this.name);
        }
    };
    NgxCardNumberTemplate.ɵfac = function NgxCardNumberTemplate_Factory(t) { return new (t || NgxCardNumberTemplate)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵinjectAttribute("name")); };
    NgxCardNumberTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NgxCardNumberTemplate, selectors: [["", "card-number", ""]], hostVars: 1, hostBindings: function NgxCardNumberTemplate_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("name", ctx.name);
        } } });
    return NgxCardNumberTemplate;
}());
export { NgxCardNumberTemplate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxCardNumberTemplate, [{
        type: Directive,
        args: [{
                selector: "[card-number]",
                host: {
                    "[name]": "name"
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ["name"]
            }] }]; }, null); })();
var NgxCardNameTemplate = /** @class */ (function () {
    function NgxCardNameTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardNameTemplate.prototype.ngOnInit = function () {
        this.name = this.name || uniqueId("name");
        if (!this.elementRef.nativeElement.name) {
            this.elementRef.nativeElement.setAttribute("name", this.name);
        }
    };
    NgxCardNameTemplate.ɵfac = function NgxCardNameTemplate_Factory(t) { return new (t || NgxCardNameTemplate)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵinjectAttribute("name")); };
    NgxCardNameTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NgxCardNameTemplate, selectors: [["", "card-name", ""]], hostVars: 1, hostBindings: function NgxCardNameTemplate_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("name", ctx.name);
        } } });
    return NgxCardNameTemplate;
}());
export { NgxCardNameTemplate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxCardNameTemplate, [{
        type: Directive,
        args: [{
                selector: "[card-name]",
                host: {
                    "[name]": "name"
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ["name"]
            }] }]; }, null); })();
var NgxCardExpiryTemplate = /** @class */ (function () {
    function NgxCardExpiryTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardExpiryTemplate.prototype.ngOnInit = function () {
        this.name = this.name || uniqueId("expiry");
        if (!this.elementRef.nativeElement.name) {
            this.elementRef.nativeElement.setAttribute("name", this.name);
        }
    };
    NgxCardExpiryTemplate.ɵfac = function NgxCardExpiryTemplate_Factory(t) { return new (t || NgxCardExpiryTemplate)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵinjectAttribute("name")); };
    NgxCardExpiryTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NgxCardExpiryTemplate, selectors: [["", "card-expiry", ""]], hostVars: 1, hostBindings: function NgxCardExpiryTemplate_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("name", ctx.name);
        } } });
    return NgxCardExpiryTemplate;
}());
export { NgxCardExpiryTemplate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxCardExpiryTemplate, [{
        type: Directive,
        args: [{
                selector: "[card-expiry]",
                host: {
                    "[name]": "name"
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ["name"]
            }] }]; }, null); })();
var NgxCardCvcTemplate = /** @class */ (function () {
    function NgxCardCvcTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardCvcTemplate.prototype.ngOnInit = function () {
        this.name = this.name || uniqueId("cvc");
        if (!this.elementRef.nativeElement.name) {
            this.elementRef.nativeElement.setAttribute("name", this.name);
        }
    };
    NgxCardCvcTemplate.ɵfac = function NgxCardCvcTemplate_Factory(t) { return new (t || NgxCardCvcTemplate)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵinjectAttribute("name")); };
    NgxCardCvcTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NgxCardCvcTemplate, selectors: [["", "card-cvc", ""]], hostVars: 1, hostBindings: function NgxCardCvcTemplate_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("name", ctx.name);
        } } });
    return NgxCardCvcTemplate;
}());
export { NgxCardCvcTemplate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxCardCvcTemplate, [{
        type: Directive,
        args: [{
                selector: "[card-cvc]",
                host: {
                    "[name]": "name"
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ["name"]
            }] }]; }, null); })();
//# sourceMappingURL=inputs.js.map