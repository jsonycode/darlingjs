'use strict';
/**
 * Project: darlingjs / GameEngine.
 * Copyright (c) 2013, Eugene-Krevenets
 */

var darlingjs = require('./../../../../');
var sinon = require('sinon');
require('./../../../../src/extensions/space/flatland.js');

describe('flatland', function() {
    var world;

    beforeEach(function() {
        world = darlingjs.world('theWorld', ['ngFlatland']);
    });

    afterEach(function() {
        darlingjs.removeWorld(world);
    });

    describe('ng2DMovingSystem', function() {
        beforeEach(function() {
            world.$add('ng2DShiftMovingSystem');
        });

        it('should move ng2D on update', function() {
            var e = world.$e({
                'ng2D': {
                    x: 0.0,
                    y: 0.0
                },
                'ngShiftMove': {
                    dx: 0.1,
                    dy: 0.2
                }
            });

            world.$update(2000);

            expect(e.ng2D.x).toBe(0.2);
            expect(e.ng2D.y).toBe(0.4);
        });

        it('shouldn\'t move ng2D on update without node shift', function() {
            var e = world.$e({
                'ng2D': {
                    x: 0.0,
                    y: 0.0
                },
                'ngShiftMove': {
                }
            });

            world.$update(2000);

            expect(e.ng2D.x).toBe(0.0);
            expect(e.ng2D.y).toBe(0.0);
        });
    });
});