var GRAPE_STATE = {
  ACTIVE : 0,
  SELECTED : 1,
  INACTIVE : 2
};

function Grape(index) {
  var self = this;
  var isEdgeGrape = function() {
    return index == 4 || index == 8 ||
           index == 11 || index == 13 ||
           index == 14;
  };
  self.getIndex = function() {
    return index;
  };
  self.isNeighbor = function(grape) {
    var i = grape.getIndex();
    if (i == 4 || i == 
  };
  self.state = new ko.observable(GRAPE_STATE.ACTIVE);
  self.onClick = function() {
    self.state(GRAPE_STATE.INACTIVE);
    vm.selectionMade();
  };
  self.grapeStyling = ko.computed(function() {
    var style = "";
    switch(self.state()) {
      case GRAPE_STATE.ACTIVE:
        style = "active";
        break;
      case GRAPE_STATE.SELECTED:
        style = "selected";
        break;
      case GRAPE_STATE.INACTIVE:
        style = "inactive";
        break;
    }
    return style;
  }, self);
}