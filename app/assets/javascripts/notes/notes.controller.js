(function(){

  'use strict'

  function NoteController($state) {
    var vm = this

    vm.createNote = createNote;

    function createNote() {
      return NoteFactory.createNote(vm.newNote)
    }
  }

  angular
    .module('app')
    .controller('NoteController', NoteController)
}())




// function NoteController (NoteFactory) {
//   vm = this;
//   vm.test = 'Hello Notes World';
//   vm.getNotes = getNotes;
//   vm.getNote = getNote;
//   vm.createNote = createNote;
//   vm.updateNote = updateNote;
//   vm.deleteNote = deleteNote;
//
// }
//
//
// angular
//   .module('app')
//   .controller('NoteController', NoteController);
