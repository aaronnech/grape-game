var vm = new Grapes();
ko.applyBindings(vm);

for(var i = 0; i < 15; i++) {
  vm.addGrape();
}