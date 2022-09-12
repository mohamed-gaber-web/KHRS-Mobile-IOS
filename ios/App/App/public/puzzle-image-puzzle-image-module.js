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
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<div class=\"ios-toolbar\">\n  <ion-title>\n    Puzzle image\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\n  </ion-title>\n</div>\n<ion-icon class=\"help-icon\" (click)=\"presentModal()\" name=\"help-circle-outline\"></ion-icon>\n\n<ion-content>\n\n<ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<ion-slides class=\"swiper-no-swiping\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n\n<ion-slide>\n\n  <div cdkDropListGroup class=\"drag-group\">\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-md=\"6\" size-sm=\"6\"  class=\"scrollable\">\n          <!-- Question -->\n          \n            <div\n              #container2\n              *ngFor=\"let item of questionsArray\" \n                class=\"example-box elements\"\n                cdkDropList\n                dropListScroller\n\n                [cdkDropListData]=\"item\"\n                cdkDropListSortingDisabled\n                (cdkDropListDropped)=\"drop($event)\"\n              >\n              <div *ngFor=\"let item2 of item\" >\n\n                <ion-img\n                class=\"image-question\"\n                loading=\"lazy\" *ngIf=\"item2.type === 'question' \"\n                (click)=\"presentPopover($event, item2)\"\n                [src]=\"item2.imagePath\" cdkDrag [cdkDragDisabled]=\"true\">\n\n                </ion-img>\n\n\n                <div class=\"drag-answer\" *ngIf=\"item2.type === 'answer' \">\n                  <ion-grid class=\"puzzle-answer\">\n                    <ion-row>\n\n                      <ion-col>\n                        <div class=\"puzzle-fix\" cdkDrag [cdkDragDisabled]=\"false\">\n                          <div class=\"title\"> {{ item2.keyword }}</div>\n                          <div class=\"sound\" *ngIf=\"item2.voicePath\">\n                            <div class=\"sound-bg\">\n                              <div class=\"img-volume\">\n                                <ion-img\n                                class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePath)\">\n                              </ion-img>\n                              </div>\n                            </div>\n                            <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                          </div>\n                          <div class=\"sound\" *ngIf=\"item2.voicePathDanish\">\n                            <div class=\"sound-bg\">\n                              <div class=\"img-volume\">\n                                <ion-img\n                                loading=\"lazy\"\n                                class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePathDanish)\">\n                              </ion-img>\n                              </div>\n                            </div>\n                            <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                          </div>\n                        </div>\n                      </ion-col>\n\n                    </ion-row>\n                  </ion-grid>\n\n                </div>\n              </div>\n\n            </div>\n          <!-- Question -->\n        </ion-col>\n\n        <ion-col size-xs=\"12\" size-md=\"6\" size-sm=\"6\" class=\"puzzle-answer\" cdkDropList [cdkDropListData]=\"answersArray\" (cdkDropListDropped)=\"drop($event)\">\n          <!-- Answer -->\n            <div class=\"puzzle-fix\" *ngFor=\"let item of answersArray\" cdkDrag>\n              <div class=\"title\"> {{ item.keyword }}</div>\n                <div class=\"sound\" *ngIf=\"item.voicePath\">\n                  <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-img\n                      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePath)\">\n                    </ion-img>\n                    </div>\n                  </div>\n                  <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                </div>\n                <div class=\"sound\" *ngIf=\"item.voicePathDanish\">\n                  <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-img\n                      loading=\"lazy\"\n                      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePathDanish)\">\n                    </ion-img>\n                    </div>\n                  </div>\n                  <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                </div>\n            </div>\n          <!-- Answer -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class=\"ion-padding ion-justify-content-center\">\n\n        <ion-col size=\"12\" size-lg=\"6\">\n          <ion-button *ngIf=\"nextButton\" (click)=\"slidePrev()\">\n            Prev\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"12\" size-lg=\"6\">\n          <ion-button *ngIf=\"nextButton\" (click)=\"slideNext()\">\n            Next\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-slide>\n\n</ion-slides>\n\n</ion-content>\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .puzzle-answer .puzzle-fix .sound .sound-bg .img-volume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\nion-grid {\n  padding: 0;\n}\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\nion-img.image-question {\n  width: 60px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 5px 10px;\n  margin: 10px 0;\n  border: 2px solid #003182a6;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  color: var(--ion-color-second-app);\n}\n\n.puzzle-answer .puzzle-fix .sound {\n  display: flex;\n}\n\n.puzzle-answer .puzzle-fix .sound .sound-bg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.drag-answer .puzzle-img ion-img {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.drag-answer .puzzle-answer {\n  margin-top: 0;\n  padding: 5px 0 !important;\n}\n\n.drag-answer .title {\n  margin-top: 0 !important;\n}\n\n.drag-answer .sound {\n  display: flex;\n}\n\n.drag-answer .sound .sound-bg img {\n  width: 50px !important;\n  height: auto;\n}\n\n.drag-answer .sound .img-volume ion-img {\n  width: 20px;\n  height: auto;\n}\n\n/************* DRAG AND DROP *****************/\n\n.example-box {\n  border: 2px solid #8afa6f !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: move;\n  background: white;\n  font-size: 16px;\n  border-radius: 0;\n  margin: 5px 0;\n  height: 70px;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.example-box .sound {\n  padding: 0 5px 0 10px;\n}\n\n.example-box .title {\n  margin-right: 5px;\n}\n\n.example-box img.danish-flag {\n  width: 24px;\n  height: auto;\n}\n\n.example-box .drag-answer ion-img {\n  width: 50px;\n  height: auto;\n  position: relative;\n  top: -2px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .sound-bg {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n.cdk-drag-preview .img-volume {\n  width: 28px;\n  height: 28px;\n  position: relative;\n  top: 15px;\n}\n\n.cdk-drag-preview .puzzle-fix .title {\n  font-weight: 600 !important;\n  padding: 0 5px !important;\n  width: 30% !important;\n}\n\n.cdk-drag-preview .puzzle-fix img.danish-flag {\n  width: 24px;\n  height: 24px;\n  max-width: 50%;\n}\n\n.cdk-drop-list-receiving {\n  height: auto;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  height: 150px;\n  width: 100%;\n  border: 3px dotted var(--ion-color-second-app);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 120ms cubic-bezier(0, 0, 0.2, 3);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n@media (min-width: 767px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  ion-img.image-question {\n    width: 70px;\n    height: auto;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n\n  .ion-text-center {\n    font-size: 14px;\n  }\n\n  .cdk-drag-preview {\n    box-sizing: border-box;\n    width: 80% !important;\n  }\n  .cdk-drag-preview .sound-bg {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n  .cdk-drag-preview .img-volume {\n    width: 20px;\n    height: 20px;\n    padding: 10px 0;\n  }\n  .cdk-drag-preview .puzzle-fix .title {\n    font-weight: 600 !important;\n    padding: 0 5px !important;\n    width: 30% !important;\n    font-size: 16px;\n  }\n  .cdk-drag-preview .puzzle-fix img.danish-flag {\n    width: 24px;\n    height: 24px;\n    max-width: 50%;\n  }\n\n  .example-box {\n    margin: 10px 0;\n  }\n  .example-box .puzzle-answer .puzzle-fix {\n    padding: 5px 0px !important;\n  }\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    display: flex;\n    border: 2px dotted var(--ion-color-second-app);\n    border-radius: 10px;\n    padding: 5px 0px;\n    margin: 0;\n  }\n  .example-box .title {\n    width: 35% !important;\n  }\n\n  .cdk-drop-list-receiving {\n    height: auto;\n    color: var(--ion-color-second-app);\n  }\n\n  .cdk-drop-list-dragging {\n    background-color: rgba(167, 247, 129, 0.6);\n    height: 150px;\n    width: 100%;\n    border: 3px dotted var(--ion-color-second-app);\n    color: var(--ion-color-second-app);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 2000px) {\n  .example-box {\n    height: 90px;\n  }\n}\n\n@media (max-width: 449px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 225px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 66%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 11px !important;\n  }\n}\n\n@media (min-width: 420px) and (max-width: 450px) {\n  .example-box .puzzle-fix {\n    width: 330px;\n  }\n}\n\n@media (min-width: 450px) and (max-width: 600px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 400px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 12px !important;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n  .example-box .puzzle-fix {\n    width: 260px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1enpsZS1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBSUU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUlFO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBSE47O0FBUUk7RUFDRSxhQUFBO0FBTk47O0FBUU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQW1CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBakJGOztBQXdCRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFyQko7O0FBd0JFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBdEJKOztBQXlCRTtFQUNFLHdCQUFBO0FBdkJKOztBQTBCRTtFQUNFLGFBQUE7QUF4Qko7O0FBNEJNO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBMUJSOztBQThCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNUJOOztBQW1DQSw4Q0FBQTs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakNGOztBQW1DRTtFQUNFLHFCQUFBO0FBakNKOztBQW9DRTtFQUFRLGlCQUFBO0FBakNWOztBQW1DRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBakNKOztBQW9DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBbENGOztBQXNDQTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBdENGOztBQTBDRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Q0o7O0FBNENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUExQ0o7O0FBOENJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBNUNOOztBQStDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQTdDTjs7QUFvREE7RUFFRSxZQUFBO0VBQ0Esa0NBQUE7QUFsREY7O0FBcURBO0VBQ0UsMENBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0NBQUE7QUFsREY7O0FBc0RBO0VBQ0UsVUFBQTtBQW5ERjs7QUFzREE7RUFDRSxzREFBQTtBQW5ERjs7QUFzREE7RUFDRSxZQUFBO0FBbkRGOztBQXNEQTtFQUNFLHNEQUFBO0FBbkRGOztBQXdEQSw4Q0FBQTs7QUFHQTtFQUNBLDJCQUFBO0FBdkRBOztBQTBEQTtFQUNFLFdBQUE7QUF2REY7O0FBMkRBO0VBQ0U7SUFDRSxxQkFBQTtFQXhERjtBQUNGOztBQThEQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUE1REY7O0VBK0RBO0lBQ0UsMEJBQUE7RUE1REY7O0VBZ0VGO0lBQ0UsZUFBQTtFQTdEQTs7RUFpRUE7SUFFRSxzQkFBQTtJQUNBLHFCQUFBO0VBL0RGO0VBaUVFO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUEvREo7RUFrRUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFoRUo7RUFzRUk7SUFDRSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VBcEVOO0VBdUVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBckVOOztFQTRFQTtJQUNFLGNBQUE7RUF6RUY7RUEyRUU7SUFDRSwyQkFBQTtFQXpFSjtFQTRFRTtJQUNFLGFBQUE7SUFDQSw4Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VBMUVKO0VBNkVFO0lBRUUscUJBQUE7RUE1RUo7O0VBZ0ZBO0lBRUUsWUFBQTtJQUNBLGtDQUFBO0VBOUVGOztFQWlGQTtJQUNFLDBDQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSw4Q0FBQTtJQUNBLGtDQUFBO0VBOUVGO0FBQ0Y7O0FBcUZBO0VBQ0U7SUFDRSxZQUFBO0VBbkZGO0FBQ0Y7O0FBOEZBO0VBQ0U7SUFDRSx1QkFBQTtFQTVGRjs7RUErRkE7SUFDRSxzQkFBQTtFQTVGRjs7RUErRkY7SUFBMEIsWUFBQTtFQTNGeEI7O0VBNEZGO0lBQWdELFVBQUE7SUFBWSxVQUFBO0lBQVksU0FBQTtFQXRGdEU7O0VBdUZGO0lBQWdELDBCQUFBO0VBbkY5Qzs7RUFvRkY7SUFDRSwwQkFBQTtFQWpGQTtBQUNGOztBQXFGQTtFQUVBO0lBQTBCLFlBQUE7RUFuRnhCO0FBQ0Y7O0FBdUZBO0VBQ0U7SUFDRSx1QkFBQTtFQXJGRjs7RUF3RkE7SUFDRSxzQkFBQTtFQXJGRjs7RUF3RkY7SUFBMEIsWUFBQTtFQXBGeEI7O0VBcUZGO0lBQWdELFVBQUE7SUFBWSxVQUFBO0lBQVksU0FBQTtFQS9FdEU7O0VBZ0ZGO0lBQWdELDBCQUFBO0VBNUU5Qzs7RUE2RUY7SUFDRSwwQkFBQTtFQTFFQTtBQUNGOztBQThFQTtFQUVFO0lBQTBCLFlBQUE7RUE1RTFCOztFQTZFQTtJQUFnRCxVQUFBO0VBekVoRDtBQUNGIiwiZmlsZSI6InB1enpsZS1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0LWljb24tdmx1bWUge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG59XG5cbiAgaW9uLWltZy5pbWFnZS1xdWVzdGlvbiB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbi5wdXp6bGUtYW5zd2VyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAucHV6emxlLWZpeCB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMzE4MmE2O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcblxuICAgICAgLy8gbWFyZ2luLXRvcDogMTdweDtcbiAgICB9XG5cbiAgICAuc291bmQge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLnNvdW5kLWJnIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgLmltZy12b2x1bWUge1xuICAgICAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi5pbWctbGFuZ2F1Z2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxM3B4O1xuICB0b3A6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cblxuLmRyYWctYW5zd2VyIHtcblxuXG4gIC5wdXp6bGUtaW1nIGlvbi1pbWd7XG4gICAgd2lkdGg6IDIwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHV6emxlLWFuc3dlcntcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zb3VuZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnNvdW5kLWJnIHtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmltZy12b2x1bWUgaW9uLWltZyB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgfVxuICB9XG5cbn1cblxuXG4vKioqKioqKioqKioqKiBEUkFHIEFORCBEUk9QICoqKioqKioqKioqKioqKioqL1xuXG4uZXhhbXBsZS1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOGFmYTZmIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDVweCAwO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5zb3VuZCB7XG4gICAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xuICB9XG5cbiAgLnRpdGxlIHttYXJnaW4tcmlnaHQ6IDVweDt9XG5cbiAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kcmFnLWFuc3dlciBpb24taW1ne1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcblxuXG5cbiAgLnNvdW5kLWJnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vIG1hcmdpbjogMTBweCAyMHB4O1xuICB9XG5cbiAgLmltZy12b2x1bWUge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNXB4O1xuICB9XG5cbiAgLnB1enpsZS1maXgge1xuICAgIC50aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMCA1cHghaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuXG4gIH1cblxufVxuXG4uY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmcge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMyk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cblxuLyoqKioqKioqKioqKiogRFJBRyBBTkQgRFJPUCAqKioqKioqKioqKioqKioqKi9cblxuXG4ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1kIHtcbnBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xufVxuXG4uZHJhZy1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgfVxuXG59XG5cblxuXG5AbWVkaWEobWF4LXdpZHRoOiAzNzBweCkge1xuICBpb24taW1nLmltYWdlLXF1ZXN0aW9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgfVxuXG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuICAuY2RrLWRyYWctcHJldmlldyB7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuXG4gICAgLnNvdW5kLWJnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5pbWctdm9sdW1lIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cblxuICAgIC5wdXp6bGUtZml4IHtcblxuXG4gICAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwIDVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAzMCUhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIGltZy5kYW5pc2gtZmxhZyB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICAuZXhhbXBsZS1ib3gge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXgge1xuICAgICAgcGFkZGluZzogNXB4IDBweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG59XG5cbiAgICAudGl0bGUge1xuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMzUlIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmcge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB9XG5cbiAgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIH1cblxuXG5cblxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xuICAuZXhhbXBsZS1ib3gge1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbi8vICAgLnNjcm9sbGFibGUge1xuLy8gICAgIGhlaWdodDogMjMwcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIH1cbi8vIH1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA0NDlweCkge1xuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICB9XG5cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiAyMjVweDt9XG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogNjYlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7fVxuLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC50aXRsZSB7Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7fVxuLnRpdGxle1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA0MjBweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbi5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDMzMHB4O31cbn1cblxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgfVxuXG4gIC5leGFtcGxlLWJveCAucHV6emxlLWZpeCAudGl0bGUge1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogNDAwcHg7fVxuLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDQ1JTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO31cbi5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAudGl0bGUge2ZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O31cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gIC5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDI2MHB4O31cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDIwJTt9XG59XG5cblxuIl19 */");

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













let PuzzleImagePage = class PuzzleImagePage {
    constructor(storageService, route, router, toastController, navController, exerciseService, popoverController, modalController) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.exerciseService = exerciseService;
        this.popoverController = popoverController;
        this.modalController = modalController;
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
                this.errorMessage("There are no available questions in this exercise");
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
                this.successMessage('Thanks the answer is correct');
                if (this.player) {
                    this.player.stop();
                }
                this.currentIndex += 1;
                this.getQuestionAndAnswer();
                this.slides.slideNext();
                if (this.currentIndex === this.lengthQuestion) {
                    this.successMessage('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot([
                            '/exercise',
                            { courseId: this.courseId },
                        ]);
                    }, 100);
                }
            }
            else if (isCorrect === false) {
                this.errorMessage('The answer is wrong and please choose correct answer');
            }
        });
    }
    successMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                cssClass: 'ion-success',
                color: 'success',
            });
            toast.present();
        });
    }
    errorMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
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