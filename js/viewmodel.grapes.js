function Grapes() {
	var self = this;
	self.grapes = new ko.observableArray([]);
  self.mouseDown = false;
  self.addGrape = function() {
    self.grapes.push(new Grape());
  };
  self.selectionMade = function() {
    self.grapes().forEach(function(g) {
      if (g.state() == GRAPE_STATE.SELECTED) {
        g.state(GRAPE_STATE.INACTIVE);
      }    
    });
  };
  self.onUp = function() {
    self.grapes().forEach(function(g) {
      if (g.state() == GRAPE_STATE.SELECTED) {
        g.state(GRAPE_STATE.ACTIVE);
      }    
    });
    self.mouseDown = false;
  }
}