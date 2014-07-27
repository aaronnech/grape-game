function Grapes() {
	var self = this;
	self.grapes = new ko.observableArray([]);
  self.addGrape = function() {
    self.grapes.push(new Grape());
  };
  self.selectionMade = function() {
  
  };
}