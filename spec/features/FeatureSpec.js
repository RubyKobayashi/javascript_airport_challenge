'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});

// describe ('Airport', function() {
//
//   var airport;
//   var plane;
//
//   beforeEach(function() {
//       airport = new Airport();
//       plane = new Plane();
//     });
//
//     describe('landing a plane', function() {
//       it('lands a plane', function(){
//       expect(airport.land(plane)).toEqual([plane]);
//
//       });
//      });
//     });
