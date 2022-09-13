(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["puzzle-image-puzzle-image-module"],{

/***/ "NC7O":
/*!******************************************************************!*\
  !*** ./node_modules/cdk-drag-scroll/fesm2015/cdk-drag-scroll.js ***!
  \******************************************************************/
/*! exports provided: AutoScroll, DragDebugService, DragScrollDirective, DragScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDebugService", function() { return DragDebugService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollDirective", function() { return DragScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollModule", function() { return DragScrollModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoScroll {
    /**
     * @param {?} container
     * @param {?=} scrollCallback
     */
    constructor(container, scrollCallback) {
        this.container = container;
        this.scrollCallback = scrollCallback;
        this.margin = 30;
        this.maxSpeed = 25;
        this.point = { x: 0, y: 0 };
        this.boundaryRect = this.container.getBoundingClientRect();
    }
    /**
     * @param {?} point
     * @return {?}
     */
    onMove(point) {
        this.point = point;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame((/**
         * @return {?}
         */
        () => this.scrollTick()));
    }
    /**
     * @return {?}
     */
    scrollTick() {
        cancelAnimationFrame(this.animationFrame);
        if (this.autoScroll()) {
            this.animationFrame = requestAnimationFrame((/**
             * @return {?}
             */
            () => this.scrollTick()));
        }
    }
    /**
     * @return {?}
     */
    autoScroll() {
        /** @type {?} */
        let scrollx;
        /** @type {?} */
        let scrolly;
        if (this.point.x < this.boundaryRect.left + this.margin) {
            scrollx = Math.floor(Math.max(-1, (this.point.x - this.boundaryRect.left) / this.margin - 1) * this.maxSpeed);
        }
        else if (this.point.x > this.boundaryRect.right - this.margin) {
            scrollx = Math.ceil(Math.min(1, (this.point.x - this.boundaryRect.right) / this.margin + 1) * this.maxSpeed);
        }
        else {
            scrollx = 0;
        }
        if (this.point.y < this.boundaryRect.top + this.margin) {
            scrolly = Math.floor(Math.max(-1, (this.point.y - this.boundaryRect.top) / this.margin - 1) *
                this.maxSpeed);
        }
        else if (this.point.y > this.boundaryRect.bottom - this.margin) {
            scrolly = Math.ceil(Math.min(1, (this.point.y - this.boundaryRect.bottom) / this.margin + 1) * this.maxSpeed);
        }
        else {
            scrolly = 0;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (scrolly) {
                this.scrollY(scrolly);
            }
            if (scrollx) {
                this.scrollX(scrollx);
            }
        }));
        return scrollx || scrolly;
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    scrollY(amount) {
        // ToDo for window: window.scrollTo(window.pageXOffset, window.pageYOffset + amount);
        this.container.scrollTop += amount;
        if (this.scrollCallback) {
            this.scrollCallback({ x: 0, y: amount });
        }
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    scrollX(amount) {
        // ToDo for window: window.scrollTo(window.pageXOffset + amount, window.pageYOffset);
        this.container.scrollLeft += amount;
        if (this.scrollCallback) {
            this.scrollCallback({
                x: amount,
                y: 0
            });
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        cancelAnimationFrame(this.animationFrame);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDebugService {
    constructor() {
        this.debugInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.enabled = false;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    log(info) {
        this.debugInfo.next(info);
    }
    /**
     * @return {?}
     */
    reset() {
        this.debugInfo.next(null);
    }
}
DragDebugService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DragDebugService.ctorParameters = () => [];
/** @nocollapse */ DragDebugService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DragDebugService_Factory() { return new DragDebugService(); }, token: DragDebugService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DragScrollDirective {
    /**
     * @param {?} cdkDrag
     * @param {?} dragDebugService
     * @param {?} zone
     * @param {?} changeDetectorRef
     */
    constructor(cdkDrag, dragDebugService, zone, changeDetectorRef) {
        this.cdkDrag = cdkDrag;
        this.dragDebugService = dragDebugService;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stopDragging$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lastScroll = {
            top: 0,
            left: 0
        };
        this.dragRef = this.cdkDrag['_dragRef'];
        if (this.dragRef) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.dragRef.started.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Started', event, this.dragRef.isDragging());
                    this.started();
                }));
                this.dragRef.ended.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Ended', event);
                    this.ended();
                }));
                this.dragRef.entered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Entered', event);
                    this.entered();
                }));
                this.dragRef.exited.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Exited', event);
                    this.exited();
                }));
            }));
        }
        else {
            this.log('CdkDrag not found', this.cdkDrag, this.dragRef);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dragConnectedIds) {
            if (this.dragRef.isDragging()) {
                // https://github.com/angular/material2/issues/15343
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.syncSiblings();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.stopDragging$.next();
        this.stopDragging$.complete();
        this.destroyAutoScroll();
    }
    /**
     * @return {?}
     */
    started() {
        if (!this.scrollContainer) {
            return;
        }
        this.destroyAutoScroll();
        this.addDebugInfo();
        this.autoScroll = new AutoScroll(this.scrollContainer);
        this.lastScroll.top = this.scrollContainer.scrollTop;
        this.lastScroll.left = this.scrollContainer.scrollLeft;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.scrollContainer, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopDragging$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const deltaX = this.scrollContainer.scrollLeft - this.lastScroll.left;
            /** @type {?} */
            const deltaY = this.scrollContainer.scrollTop - this.lastScroll.top;
            if (deltaX || deltaY) {
                this.handleScroll(deltaX, deltaY);
            }
            this.lastScroll.top = this.scrollContainer.scrollTop;
            this.lastScroll.left = this.scrollContainer.scrollLeft;
        }));
        this.dragRef.moved
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopDragging$))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.autoScroll.onMove(e.pointerPosition);
        }));
    }
    /**
     * @return {?}
     */
    ended() {
        this.destroyAutoScroll();
        this.stopDragging$.next();
        this.dragDebugService.reset();
    }
    /**
     * @return {?}
     */
    entered() {
        this.dragFixContainer();
    }
    /**
     * @return {?}
     */
    exited() {
        this.dragFixContainer();
    }
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    handleScroll(x, y) {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        // adjust containers
        this.adjustContainers();
        // adjust items
        this.adjustItems(x, y);
        // ToDo: better condition for changed items
        if (dropListRef._draggables.length > dropListRef._itemPositions.length) {
            this.syncItems();
        }
        this.addDebugInfo();
    }
    /**
     * @private
     * @return {?}
     */
    destroyAutoScroll() {
        if (this.autoScroll) {
            this.autoScroll.destroy();
            this.autoScroll = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getDropListRef() {
        return this.dragRef['_dropContainer'];
    }
    /**
     * @private
     * @return {?}
     */
    addDebugInfo() {
        if (!this.dragDebugService.enabled) {
            return;
        }
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        /** @type {?} */
        const draws = [
            ...dropListRef._itemPositions.map((/**
             * @param {?} it
             * @return {?}
             */
            it => ({
                clientRect: it.clientRect,
                color: 'blue',
                id: it.drag.data.data.name
            }))),
            ...dropListRef._siblings.map((/**
             * @param {?} it
             * @return {?}
             */
            it => ({
                clientRect: it._clientRect,
                color: 'green',
                id: ''
            }))),
            {
                clientRect: dropListRef._clientRect,
                color: '#2FD1BB',
                id: ''
            }
        ];
        this.dragDebugService.log(draws.filter((/**
         * @param {?} d
         * @return {?}
         */
        d => d.clientRect)));
    }
    /**
     * @private
     * @return {?}
     */
    dragFixContainer() {
        // https://github.com/angular/material2/issues/15227
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dropListRef = this.getDropListRef();
            dropListRef._cacheOwnPosition();
            this.addDebugInfo();
        }));
        // fix for issue when classes is not resetted
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    syncSiblings() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        this.log('syncSiblings before', dropListRef._siblings.length);
        dropListRef.beforeStarted.next();
        this.log('syncSiblings after', dropListRef._siblings.length);
        this.adjustContainers();
    }
    /**
     * @private
     * @return {?}
     */
    syncItems() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        /** @type {?} */
        const oldPositions = dropListRef._itemPositions;
        dropListRef._activeDraggables = dropListRef._draggables.slice();
        dropListRef._cacheItemPositions();
        /** @type {?} */
        const newPositions = dropListRef._itemPositions;
        dropListRef._itemPositions = [...oldPositions];
        newPositions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            if (!oldPositions.find((/**
             * @param {?} p1
             * @return {?}
             */
            p1 => p.drag === p1.drag))) {
                dropListRef._itemPositions.push(p);
            }
        }));
        dropListRef._activeDraggables.push(this.dragRef);
    }
    /**
     * @private
     * @return {?}
     */
    adjustContainers() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        dropListRef._cacheOwnPosition();
        dropListRef._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => {
            sibling._cacheOwnPosition();
        }));
    }
    /**
     * @private
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    adjustItems(deltaX, deltaY) {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        dropListRef._itemPositions.forEach((/**
         * @param {?} it
         * @return {?}
         */
        it => {
            it.originalRect = it.originalRect || it.clientRect;
            it.clientRect = Object.assign({}, it.clientRect, { left: it.clientRect.left - deltaX, right: it.clientRect.right - deltaX, top: it.clientRect.top - deltaY, bottom: it.clientRect.bottom - deltaY });
        }));
    }
    /**
     * @private
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    log(message, ...optionalParams) {
        if (this.dragDebugService.enabled) {
            console.log(message, optionalParams);
        }
    }
}
DragScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[vsDragScroll]',
                exportAs: 'vsDragScroll'
            },] }
];
/** @nocollapse */
DragScrollDirective.ctorParameters = () => [
    { type: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"] },
    { type: DragDebugService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DragScrollDirective.propDecorators = {
    dragConnectedIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['vsDragScrollConnectedTo',] }],
    scrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['vsDragScrollContainer',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragScrollModule {
}
DragScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]],
                declarations: [DragScrollDirective],
                exports: [DragScrollDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cdk-drag-scroll.js.map


/***/ }),

/***/ "NecZ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/puzzle-image/puzzle-image.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<div class=\"ios-toolbar\">\n  <ion-title>\n    Puzzle image\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\n  </ion-title>\n</div>\n<ion-icon class=\"help-icon\" (click)=\"presentModal()\" name=\"help-circle-outline\"></ion-icon>\n\n<ion-content>\n\n<ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<ion-slides class=\"swiper-no-swiping\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n\n<ion-slide>\n\n  <div cdkDropListGroup class=\"drag-group\">\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-md=\"6\" size-sm=\"6\"  class=\"scrollable\">\n          <!-- Question -->\n          \n            <div\n              #container2\n              *ngFor=\"let item of questionsArray\" \n                class=\"example-box elements\"\n                cdkDropList\n                dropListScroller\n\n                [cdkDropListData]=\"item\"\n                cdkDropListSortingDisabled\n                (cdkDropListDropped)=\"drop($event)\"\n              >\n              <div *ngFor=\"let item2 of item\" >\n\n                <ion-img\n                class=\"image-question\"\n                loading=\"lazy\" *ngIf=\"item2.type === 'question' \"\n                (click)=\"presentPopover($event, item2)\"\n                [src]=\"item2.imagePath\" cdkDrag [cdkDragDisabled]=\"true\">\n\n                </ion-img>\n\n\n                <div class=\"drag-answer\" *ngIf=\"item2.type === 'answer' \">\n                  <ion-grid class=\"puzzle-answer\">\n                    <ion-row>\n\n                      <ion-col>\n                        <div class=\"puzzle-fix\" cdkDrag [cdkDragDisabled]=\"false\">\n                          <div class=\"title\"> {{ item2.keyword }}</div>\n                          <div class=\"sound\" *ngIf=\"item2.voicePath\">\n                            <div class=\"sound-bg\">\n                              <div class=\"img-volume\">\n                                <ion-img\n                                class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePath)\">\n                              </ion-img>\n                              </div>\n                            </div>\n                            <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                          </div>\n                          <div class=\"sound\" *ngIf=\"item2.voicePathDanish\">\n                            <div class=\"sound-bg\">\n                              <div class=\"img-volume\">\n                                <ion-img\n                                loading=\"lazy\"\n                                class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePathDanish)\">\n                              </ion-img>\n                              </div>\n                            </div>\n                            <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                          </div>\n                        </div>\n                      </ion-col>\n\n                    </ion-row>\n                  </ion-grid>\n\n                </div>\n              </div>\n\n            </div>\n          <!-- Question -->\n        </ion-col>\n\n        <ion-col size-xs=\"12\" size-md=\"6\" size-sm=\"6\" class=\"puzzle-answer\" cdkDropList [cdkDropListData]=\"answersArray\" (cdkDropListDropped)=\"drop($event)\">\n          <div class=\"puzzle_animation-element\"></div>\n          <!-- Answer -->\n            <div class=\"puzzle-fix\" *ngFor=\"let item of answersArray\" cdkDrag>\n              <div class=\"title\"> {{ item.keyword }}</div>\n                <div class=\"sound\" *ngIf=\"item.voicePath\">\n                  <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-img\n                      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePath)\">\n                    </ion-img>\n                    </div>\n                  </div>\n                  <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                </div>\n                <div class=\"sound\" *ngIf=\"item.voicePathDanish\">\n                  <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-img\n                      loading=\"lazy\"\n                      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePathDanish)\">\n                    </ion-img>\n                    </div>\n                  </div>\n                  <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                </div>\n            </div>\n          <!-- Answer -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class=\"ion-padding ion-justify-content-center\">\n\n        <ion-col size=\"12\" size-lg=\"6\">\n          <ion-button *ngIf=\"nextButton\" (click)=\"slidePrev()\">\n            Prev\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"12\" size-lg=\"6\">\n          <ion-button *ngIf=\"nextButton\" (click)=\"slideNext()\">\n            Next\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-slide>\n\n</ion-slides>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "PFl2":
/*!**************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.module.ts ***!
  \**************************************************************/
/*! exports provided: PuzzleImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePageModule", function() { return PuzzleImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _puzzle_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./puzzle-image-routing.module */ "fcSu");
/* harmony import */ var _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.component */ "idoe");
/* harmony import */ var _puzzle_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./puzzle-image.page */ "szV/");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cdk-drag-scroll */ "NC7O");
/* harmony import */ var _puzzle_sound_puzzle_sound_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.module */ "dtX3");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");













let PuzzleImagePageModule = class PuzzleImagePageModule {
};
PuzzleImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _puzzle_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["PuzzleImagePageRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _puzzle_sound_puzzle_sound_module__WEBPACK_IMPORTED_MODULE_10__["PuzzleSoundModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_11__["HelpModalModule"],
            cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_9__["DragScrollModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ],
        declarations: [_puzzle_image_page__WEBPACK_IMPORTED_MODULE_7__["PuzzleImagePage"]],
        exports: [],
        entryComponents: [_puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_6__["PuzzleSoundComponent"]],
    })
], PuzzleImagePageModule);



/***/ }),

/***/ "Tv6U":
/*!********************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1enpsZS1zb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q0E7RUFDRSwyQkFBQTtBQXZDRiIsImZpbGUiOiJwdXp6bGUtc291bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZXh0LWljb24tdmx1bWUge1xuLy8gICB3aWR0aDogMjRweDtcbi8vICAgaGVpZ2h0OiAyNHB4O1xuLy8gfVxuXG5cblxuXG4vLyAuc291bmQtcG9wdXAge1xuXG5cblxuLy8gICBwYWRkaW5nOiAyMHB4O1xuXG4vLyAgIC5zb3VuZCB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuLy8gICAgIHBhZGRpbmc6IDVweCA0cHg7XG4vLyAgICAgbWFyZ2luOiAxMHB4O1xuXG4vLyAgICAgLnNvdW5kLWJnIHtcbi8vICAgICAgIHdpZHRoOiAyMHB4O1xuLy8gICAgICAgaGVpZ2h0OiAyMHB4O1xuLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuLy8gICAgICAgLmltZy12b2x1bWUge1xuLy8gICAgICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLmRhbmlzaC1mbGFnIHtcbi8vICAgd2lkdGg6IDMwcHg7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vIH1cblxuLnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "cmRR":
/*!**************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .puzzle-answer .puzzle-fix .sound .sound-bg .img-volume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\nion-grid {\n  padding: 0;\n}\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\nion-img.image-question {\n  width: 60px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n  position: relative;\n}\n\n.puzzle-answer .puzzle_animation-element {\n  position: absolute;\n  top: 11px;\n  left: 3px;\n  transform: translate(0, 0);\n  z-index: 2000;\n  width: 50%;\n  height: 57px;\n  border: 5px dashed #062F87;\n  border-radius: 32px;\n  background-color: #fff;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  animation: selectAnimate 4s ease-in 2 3s forwards;\n}\n\n@keyframes selectAnimate {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(170px, -255px);\n  }\n  100% {\n    transform: translate(170px, -255px);\n    visibility: hidden;\n  }\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 5px 10px;\n  margin: 10px 0;\n  border: 2px solid #003182a6;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  color: var(--ion-color-second-app);\n}\n\n.puzzle-answer .puzzle-fix .sound {\n  display: flex;\n}\n\n.puzzle-answer .puzzle-fix .sound .sound-bg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.drag-answer .puzzle-img ion-img {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.drag-answer .puzzle-answer {\n  margin-top: 0;\n  padding: 5px 0 !important;\n}\n\n.drag-answer .title {\n  margin-top: 0 !important;\n}\n\n.drag-answer .sound {\n  display: flex;\n}\n\n.drag-answer .sound .sound-bg img {\n  width: 50px !important;\n  height: auto;\n}\n\n.drag-answer .sound .img-volume ion-img {\n  width: 20px;\n  height: auto;\n}\n\n/************* DRAG AND DROP *****************/\n\n.example-box {\n  border: 2px solid #8afa6f !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: move;\n  background: white;\n  font-size: 16px;\n  border-radius: 0;\n  margin: 5px 0;\n  height: 70px;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.example-box .sound {\n  padding: 0 5px 0 10px;\n}\n\n.example-box .title {\n  margin-right: 5px;\n}\n\n.example-box img.danish-flag {\n  width: 24px;\n  height: auto;\n}\n\n.example-box .drag-answer ion-img {\n  width: 50px;\n  height: auto;\n  position: relative;\n  top: -2px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .sound-bg {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n.cdk-drag-preview .img-volume {\n  width: 28px;\n  height: 28px;\n  position: relative;\n  top: 15px;\n}\n\n.cdk-drag-preview .puzzle-fix .title {\n  font-weight: 600 !important;\n  padding: 0 5px !important;\n  width: 30% !important;\n}\n\n.cdk-drag-preview .puzzle-fix img.danish-flag {\n  width: 24px;\n  height: 24px;\n  max-width: 50%;\n}\n\n.cdk-drop-list-receiving {\n  height: auto;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  height: 150px;\n  width: 100%;\n  border: 3px dotted var(--ion-color-second-app);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 120ms cubic-bezier(0, 0, 0.2, 3);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n@media (min-width: 767px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  ion-img.image-question {\n    width: 70px;\n    height: auto;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n\n  .ion-text-center {\n    font-size: 14px;\n  }\n\n  .cdk-drag-preview {\n    box-sizing: border-box;\n    width: 80% !important;\n  }\n  .cdk-drag-preview .sound-bg {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n  .cdk-drag-preview .img-volume {\n    width: 20px;\n    height: 20px;\n    padding: 10px 0;\n  }\n  .cdk-drag-preview .puzzle-fix .title {\n    font-weight: 600 !important;\n    padding: 0 5px !important;\n    width: 30% !important;\n    font-size: 16px;\n  }\n  .cdk-drag-preview .puzzle-fix img.danish-flag {\n    width: 24px;\n    height: 24px;\n    max-width: 50%;\n  }\n\n  .example-box {\n    margin: 10px 0;\n  }\n  .example-box .puzzle-answer .puzzle-fix {\n    padding: 5px 0px !important;\n  }\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    display: flex;\n    border: 2px dotted var(--ion-color-second-app);\n    border-radius: 10px;\n    padding: 5px 0px;\n    margin: 0;\n  }\n  .example-box .title {\n    width: 35% !important;\n  }\n\n  .cdk-drop-list-receiving {\n    height: auto;\n    color: var(--ion-color-second-app);\n  }\n\n  .cdk-drop-list-dragging {\n    background-color: rgba(167, 247, 129, 0.6);\n    height: 150px;\n    width: 100%;\n    border: 3px dotted var(--ion-color-second-app);\n    color: var(--ion-color-second-app);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 2000px) {\n  .example-box {\n    height: 90px;\n  }\n}\n\n@media (max-width: 449px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 225px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 66%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 11px !important;\n  }\n}\n\n@media (min-width: 420px) and (max-width: 450px) {\n  .example-box .puzzle-fix {\n    width: 330px;\n  }\n}\n\n@media (min-width: 450px) and (max-width: 600px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 400px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 12px !important;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n  .example-box .puzzle-fix {\n    width: 260px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 20%;\n  }\n}\n\n@media (min-width: 300px) and (max-width: 370px) {\n  @keyframes selectAnimate {\n    0% {\n      transform: translate(0, 0);\n    }\n    25% {\n      transform: translate(130px, -270px);\n    }\n    100% {\n      transform: translate(130px, -270px);\n      visibility: hidden;\n    }\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1enpsZS1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBSUU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0E7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBSEY7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUtBLGlEQUFBO0FBTEo7O0FBUUE7RUFDRTtJQUNFLDBCQUFBO0VBTkY7RUFRQTtJQUNFLG1DQUFBO0VBTkY7RUFXQTtJQUNFLG1DQUFBO0lBQ0Esa0JBQUE7RUFURjtBQUNGOztBQWVFO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQWROOztBQW1CSTtFQUNFLGFBQUE7QUFqQk47O0FBbUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqQlI7O0FBOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUE1QkY7O0FBbUNFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFqQ0o7O0FBb0NFO0VBQ0Usd0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsYUFBQTtBQW5DSjs7QUF1Q007RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFyQ1I7O0FBeUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF2Q047O0FBOENBLDhDQUFBOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE1Q0Y7O0FBOENFO0VBQ0UscUJBQUE7QUE1Q0o7O0FBK0NFO0VBQVEsaUJBQUE7QUE1Q1Y7O0FBOENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE1Q0o7O0FBK0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUE3Q0Y7O0FBaURBO0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0VBR0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFqREY7O0FBcURFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW5ESjs7QUF1REU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXJESjs7QUF5REk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF2RE47O0FBMERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBeEROOztBQStEQTtFQUVFLFlBQUE7RUFDQSxrQ0FBQTtBQTdERjs7QUFnRUE7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtBQTdERjs7QUFpRUE7RUFDRSxVQUFBO0FBOURGOztBQWlFQTtFQUNFLHNEQUFBO0FBOURGOztBQWlFQTtFQUNFLFlBQUE7QUE5REY7O0FBaUVBO0VBQ0Usc0RBQUE7QUE5REY7O0FBbUVBLDhDQUFBOztBQUdBO0VBQ0EsMkJBQUE7QUFsRUE7O0FBcUVBO0VBQ0UsV0FBQTtBQWxFRjs7QUFzRUE7RUFDRTtJQUNFLHFCQUFBO0VBbkVGO0FBQ0Y7O0FBeUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXZFRjs7RUEwRUE7SUFDRSwwQkFBQTtFQXZFRjs7RUEyRUY7SUFDRSxlQUFBO0VBeEVBOztFQTRFQTtJQUVFLHNCQUFBO0lBQ0EscUJBQUE7RUExRUY7RUE0RUU7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQTFFSjtFQTZFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQTNFSjtFQWlGSTtJQUNFLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUEvRU47RUFrRkk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFoRk47O0VBdUZBO0lBQ0UsY0FBQTtFQXBGRjtFQXNGRTtJQUNFLDJCQUFBO0VBcEZKO0VBdUZFO0lBQ0UsYUFBQTtJQUNBLDhDQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFyRko7RUF3RkU7SUFFRSxxQkFBQTtFQXZGSjs7RUEyRkE7SUFFRSxZQUFBO0lBQ0Esa0NBQUE7RUF6RkY7O0VBNEZBO0lBQ0UsMENBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLDhDQUFBO0lBQ0Esa0NBQUE7RUF6RkY7QUFDRjs7QUFnR0E7RUFDRTtJQUNFLFlBQUE7RUE5RkY7QUFDRjs7QUF5R0E7RUFDRTtJQUNFLHVCQUFBO0VBdkdGOztFQTBHQTtJQUNFLHNCQUFBO0VBdkdGOztFQTBHRjtJQUEwQixZQUFBO0VBdEd4Qjs7RUF1R0Y7SUFBZ0QsVUFBQTtJQUFZLFVBQUE7SUFBWSxTQUFBO0VBakd0RTs7RUFrR0Y7SUFBZ0QsMEJBQUE7RUE5RjlDOztFQStGRjtJQUNFLDBCQUFBO0VBNUZBO0FBQ0Y7O0FBZ0dBO0VBRUE7SUFBMEIsWUFBQTtFQTlGeEI7QUFDRjs7QUFrR0E7RUFDRTtJQUNFLHVCQUFBO0VBaEdGOztFQW1HQTtJQUNFLHNCQUFBO0VBaEdGOztFQW1HRjtJQUEwQixZQUFBO0VBL0Z4Qjs7RUFnR0Y7SUFBZ0QsVUFBQTtJQUFZLFVBQUE7SUFBWSxTQUFBO0VBMUZ0RTs7RUEyRkY7SUFBZ0QsMEJBQUE7RUF2RjlDOztFQXdGRjtJQUNFLDBCQUFBO0VBckZBO0FBQ0Y7O0FBeUZBO0VBRUU7SUFBMEIsWUFBQTtFQXZGMUI7O0VBd0ZBO0lBQWdELFVBQUE7RUFwRmhEO0FBQ0Y7O0FBdUZBO0VBQ0U7SUFDQTtNQUNFLDBCQUFBO0lBckZBO0lBdUZGO01BQ0UsbUNBQUE7SUFyRkE7SUF1RkY7TUFDRSxtQ0FBQTtNQUNBLGtCQUFBO0lBckZBO0VBQ0Y7QUFDRiIsImZpbGUiOiJwdXp6bGUtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZsdW1lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxufVxuXG4gIGlvbi1pbWcuaW1hZ2UtcXVlc3Rpb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4ucHV6emxlLWFuc3dlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gQW5pbWF0aW9uXG4ucHV6emxlX2FuaW1hdGlvbi1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMXB4O1xuICAgIGxlZnQ6IDNweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIGJvcmRlcjogNXB4IGRhc2hlZCAjMDYyRjg3O1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSA0cyBlYXNlLWluIDIgM3MgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDRzIGVhc2UtaW4gMiAzcyBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSA0cyBlYXNlLWluIDIgM3MgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDRzIGVhc2UtaW4gMiAzcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzZWxlY3RBbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTcwcHgsIC0yNTVweCk7XG4gIH1cbiAgLy8gNTAlIHtcbiAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgLy8gfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNzBweCwgLTI1NXB4KTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuICAvLyBBbmltYXRpb25cblxuXG4gIC5wdXp6bGUtZml4IHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAzMTgyYTY7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIH1cblxuICAgIC5zb3VuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAuc291bmQtYmcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAuaW1nLXZvbHVtZSB7XG4gICAgICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLmltZy1sYW5nYXVnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuXG4uZHJhZy1hbnN3ZXIge1xuXG5cbiAgLnB1enpsZS1pbWcgaW9uLWltZ3tcbiAgICB3aWR0aDogMjBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMHB4IWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdXp6bGUtYW5zd2Vye1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNvdW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuc291bmQtYmcge1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1nLXZvbHVtZSBpb24taW1nIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIH1cblxufVxuXG5cbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXG5cbi5leGFtcGxlLWJveCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4YWZhNmYhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnNvdW5kIHtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XG4gIH1cblxuICAudGl0bGUge21hcmdpbi1yaWdodDogNXB4O31cblxuICBpbWcuZGFuaXNoLWZsYWcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmRyYWctYW5zd2VyIGlvbi1pbWd7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuXG5cblxuICAuc291bmQtYmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy8gbWFyZ2luOiAxMHB4IDIwcHg7XG4gIH1cblxuICAuaW1nLXZvbHVtZSB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1cHg7XG4gIH1cblxuICAucHV6emxlLWZpeCB7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwIDVweCFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMzAlIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpbWcuZGFuaXNoLWZsYWcge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbi5jZGstZHJvcC1saXN0LXJlY2VpdmluZyB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG59XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG59XG5cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAzKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cblxuXG4vKioqKioqKioqKioqKiBEUkFHIEFORCBEUk9QICoqKioqKioqKioqKioqKioqL1xuXG5cbi5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQge1xucG9zaXRpb246IHN0YXRpYyFpbXBvcnRhbnQ7XG59XG5cbi5kcmFnLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICB3aWR0aDogMzAlIWltcG9ydGFudDtcbiAgICB9XG5cbn1cblxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIGlvbi1pbWcuaW1hZ2UtcXVlc3Rpb257XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xuICB9XG5cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XG5cbiAgICAuc291bmQtYmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmltZy12b2x1bWUge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgfVxuXG4gICAgLnB1enpsZS1maXgge1xuXG5cbiAgICAgIC50aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC5leGFtcGxlLWJveCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgICAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCB7XG4gICAgICBwYWRkaW5nOiA1cHggMHB4IWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgIG1hcmdpbjogMDtcbn1cblxuICAgIC50aXRsZSB7XG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIHdpZHRoOiAzNSUhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5jZGstZHJvcC1saXN0LXJlY2VpdmluZyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIH1cblxuICAuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogM3B4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgfVxuXG5cblxuXG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XG4gIC5leGFtcGxlLWJveCB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG5cbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuLy8gICAuc2Nyb2xsYWJsZSB7XG4vLyAgICAgaGVpZ2h0OiAyMzBweDtcbi8vICAgICBvdmVyZmxvdzogYXV0bztcbi8vICAgfVxuLy8gfVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ0OXB4KSB7XG4gIC5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXggLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG59XG5cbi5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDIyNXB4O31cbi5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge3dpZHRoOiA2NiU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDt9XG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnRpdGxlIHtmb250LXNpemU6IDEycHggIWltcG9ydGFudDt9XG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogMzMwcHg7fVxufVxuXG5cblxuQG1lZGlhKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICB9XG5cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiA0MDBweDt9XG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogNDUlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7fVxuLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC50aXRsZSB7Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7fVxuLnRpdGxle1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogMjYwcHg7fVxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogMjAlO31cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIEBrZXlmcmFtZXMgc2VsZWN0QW5pbWF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEzMHB4LCAtMjcwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEzMHB4LCAtMjcwcHgpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxufSJdfQ== */");

/***/ }),

/***/ "dtX3":
/*!***************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.module.ts ***!
  \***************************************************************************/
/*! exports provided: PuzzleSoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundModule", function() { return PuzzleSoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _puzzle_sound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./puzzle-sound.component */ "idoe");





let PuzzleSoundModule = class PuzzleSoundModule {
};
PuzzleSoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_4__["PuzzleSoundComponent"]]
    })
], PuzzleSoundModule);



/***/ }),

/***/ "fcSu":
/*!**********************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PuzzleImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePageRoutingModule", function() { return PuzzleImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _puzzle_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle-image.page */ "szV/");




const routes = [
    {
        path: '',
        component: _puzzle_image_page__WEBPACK_IMPORTED_MODULE_3__["PuzzleImagePage"]
    }
];
let PuzzleImagePageRoutingModule = class PuzzleImagePageRoutingModule {
};
PuzzleImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PuzzleImagePageRoutingModule);



/***/ }),

/***/ "idoe":
/*!******************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.ts ***!
  \******************************************************************************/
/*! exports provided: PuzzleSoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundComponent", function() { return PuzzleSoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_sound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-sound.component.html */ "lz/e");
/* harmony import */ var _puzzle_sound_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-sound.component.scss */ "Tv6U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");







let PuzzleSoundComponent = class PuzzleSoundComponent {
    constructor(modalController, navParams, authService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        //howler
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.voicePath = this.navParams.data.voicePath;
        this.voicePathDanish = this.navParams.data.voicePathDanish;
        this.imagePath = this.navParams.data.imagePath;
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_5__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    ngOnDestroy() {
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleSoundComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
PuzzleSoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puzzle-sound',
        template: _raw_loader_puzzle_sound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_sound_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleSoundComponent);



/***/ }),

/***/ "lz/e":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div  class=\"sound-popup\">\n<div class=\"sound\" *ngIf=\"voicePath\">\n  <div class=\"sound-bg\">\n    <div class=\"img-volume\">\n      <ion-img\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\n      (click)=\"startAudio(voicePath)\" src=\"../../../assets/icon/Vector.png\">\n    </ion-img>\n    </div>\n  </div>\n  <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n</div>\n<div class=\"sound\" *ngIf=\"voicePathDanish\">\n  <div class=\"sound-bg\">\n    <div class=\"img-volume\">\n      <ion-img\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\n      (click)=\"startAudio(voicePathDanish)\" src=\"../../../assets/icon/Vector.png\">\n    </ion-img>\n    </div>\n  </div>\n  <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n</div>\n</div> -->\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-img class=\"image-question\" loading=\"lazy\" [src]=\"imagePath\"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "szV/":
/*!************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.page.ts ***!
  \************************************************************/
/*! exports provided: PuzzleImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePage", function() { return PuzzleImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_image_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-image.page.html */ "NecZ");
/* harmony import */ var _puzzle_image_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-image.page.scss */ "cmRR");
/* harmony import */ var _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.component */ "idoe");
/* harmony import */ var _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/models/puzzleImageTranslation */ "yFRR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "kxUF");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "A9xy");














let PuzzleImagePage = class PuzzleImagePage {
    constructor(storageService, route, router, toastController, navController, exerciseService, popoverController, modalController, utilityService) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.exerciseService = exerciseService;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.utilityService = utilityService;
        this.questionsArray = [];
        this.answersArray = [];
        this.nextButton = false;
        this.lengthQuestion = 0;
        //howler
        this.player = null;
        this.isPlaying = false;
        this.subs = [];
        this.isLoading = false;
        this.limit = 1;
        this.currentIndex = 0;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
            loop: false,
            noSwipingClass: 'swiper-no-swiping',
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        // ** get courseId And exerciseId
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        this.getQuestionAndAnswer();
    }
    // ** get question and answer puzzle text
    getQuestionAndAnswer() {
        this.isLoading = true;
        this.questionsArray = [];
        this.answersArray = [];
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe((response) => {
            console.log('puzzle with image', response);
            this.questionAndAnswerItems = response;
            this.lengthQuestion = response['length'];
            if (this.lengthQuestion == 0) {
                // this.utilityService.successMessage("There are no available questions in this exercise");
                setTimeout(() => {
                    this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                }, 100);
            }
            this.isLoading = false;
            //Questions
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImages.length; index++) {
                let arr = [];
                let qpz = new _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__["PuzzleImageTranslations"]();
                qpz.id = this.questionAndAnswerItems.puzzleImages[index].id;
                qpz.imagePath =
                    this.questionAndAnswerItems.puzzleImages[index].imagePath;
                qpz.guidId =
                    this.questionAndAnswerItems.puzzleImages[index].imageGuidId;
                qpz.type = 'question';
                qpz.voicePath = null;
                qpz.voicePathDanish = null;
                qpz.keyword = null;
                qpz.disabled = true;
                arr.push(qpz);
                this.questionsArray.push(arr);
            }
            //Answers
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImagesTranslation.length; index++) {
                let arr = [];
                let apz = new _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__["PuzzleImageTranslations"]();
                apz.id =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].id;
                apz.keywordId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keywordId;
                apz.keyword =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keyword;
                apz.guidId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].imageGuidId;
                apz.type = 'answer';
                apz.disabled = false;
                apz.voicePath =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePath;
                apz.voicePathDanish =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePathDanish;
                this.answersArray.push(apz);
            }
        }));
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides
            .getActiveIndex()
            .then((current) => (this.currentIndex = current));
    }
    // ** Drop Function
    drop(event) {
        if (this.player) {
            this.player.stop();
        }
        var prevData = event.previousContainer.data;
        var data = event.container.data;
        var prevIndex = event.previousIndex;
        var currIndex = event.currentIndex;
        if (event.previousContainer === event.container) {
            console.log("same");
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(data, prevIndex, this.currentIndex);
        }
        else {
            if (event.container.data.length == 1) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(prevData, data, prevIndex, 1);
            }
            else {
                if (data[0].type == "question" && prevData[0].type == "question") {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(prevData, data, 1, 2);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(data, prevData, 1, 1);
                }
            }
        }
        if (this.answersArray.length === 0) {
            this.nextButton = true;
        }
        else {
            this.nextButton = false;
        }
    }
    // ** Move to Next slide
    slideNext() {
        // ** get check
        let arrayPuzzle = [];
        this.questionsArray.forEach((values) => {
            console.log('values', values);
            arrayPuzzle.push({
                puzzleWithImageQuestionId: values[0].id,
                imageGuid: values[0].guidId,
                wordId: values[1].keywordId,
            });
        });
        this.exerciseService
            .checkAnswerPuzzleWithImage(arrayPuzzle)
            .subscribe((response) => {
            console.log(response);
            const isCorrect = response['result'].isCorrect;
            if (isCorrect === true) {
                this.utilityService.successMessage("<img src='../../../assets/images/22.gif' />");
                if (this.player) {
                    this.player.stop();
                }
                setTimeout(() => {
                    this.currentIndex += 1;
                    this.getQuestionAndAnswer();
                    this.slides.slideNext();
                }, 3000);
                if (this.currentIndex === this.lengthQuestion) {
                    this.utilityService.successMessage('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot([
                            '/exercise',
                            { courseId: this.courseId },
                        ]);
                    }, 100);
                }
            }
            else if (isCorrect === false) {
                this.utilityService.errorMessage("<img src='../../../assets/images/wr.gif' />");
            }
        });
    }
    presentPopover(ev, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_3__["PuzzleSoundComponent"],
                componentProps: {
                    voicePath: item.voicePath,
                    voicePathDanish: item.voicePathDanish,
                    imagePath: item.imagePath,
                },
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
            });
            yield popover.present();
        });
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_11__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_12__["HelpModalComponent"],
                componentProps: {
                    "modalLink": "https://khrs-admin.sdex.online/assets/tutorials/single_choice_tutorial.mp4",
                    "modalTitle": "Puzzle Wiith Image Tutorial"
                }
            });
            return yield modal.present();
        });
    }
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestionAndAnswer();
        this.slides.slidePrev();
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleImagePage.ctorParameters = () => [
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__["ExerciseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] }
];
PuzzleImagePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['slides',] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['image',] }]
};
PuzzleImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-puzzle-image',
        template: _raw_loader_puzzle_image_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_image_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleImagePage);



/***/ })

}]);
//# sourceMappingURL=puzzle-image-puzzle-image-module.js.map