/**
 * Created by david on 20/05/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
describe('HomeComponent (inline template)', function () {
    var comp;
    beforeEach(function () {
        comp = new home_component_1.HomeComponent();
    });
    it('should define title when HomeComponent gets initialise', function () {
        expect(comp.title).toEqual('Tour of Heroes');
    });
});
//# sourceMappingURL=home.component.spec.js.map