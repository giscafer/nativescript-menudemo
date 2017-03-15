"use strict";
var observableModule = require("data/observable");
var vm = new observableModule.Observable();
vm.set("segBaritemSelectedIndex", 0);
vm.set("isItemOneVisible", true);
vm.set("isItemTwoVisible", false);
vm.set("isItemThreeVisible", false);
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var segbar = page.getViewById("menu-bar");
    vm.addEventListener(observableModule.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName.toString() == 'segBaritemSelectedIndex') {
            switch (propertyChangeData.value) {
                case 0:
                    vm.set("isItemOneVisible", true);
                    vm.set("isItemTwoVisible", false);
                    vm.set("isItemThreeVisible", false);
                    vm.set("isItemFourVisible", false);
                    break;
                case 1:
                    vm.set("isItemOneVisible", false);
                    vm.set("isItemTwoVisible", true);
                    vm.set("isItemThreeVisible", false);
                    vm.set("isItemFourVisible", false);
                    break;
                case 2:
                    vm.set("isItemOneVisible", false);
                    vm.set("isItemTwoVisible", false);
                    vm.set("isItemThreeVisible", true);
                    vm.set("isItemFourVisible", false);
                    break;
                case 3:
                    vm.set("isItemOneVisible", false);
                    vm.set("isItemTwoVisible", false);
                    vm.set("isItemThreeVisible", false);
                    vm.set("isItemFourVisible", true);
                    break;
                default:
                    break;
            }
        }
    });
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
