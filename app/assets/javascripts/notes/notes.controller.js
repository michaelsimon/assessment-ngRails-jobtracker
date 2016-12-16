(function(){

  'use strict'

  function NoteController(NoteFactory, $state) {
    var vm = this;
    vm.job_id = $state;

    vm.createNote = createNote;

    activate();

    function activate() {
      getNotes();
    }

    function getNotes() {
      return NoteFactory.getNotes()
        .then(setNotes)
    }

    function createNote() {
      return NoteFactory.createNote(vm.newNote)
      .then(getNotes())
    }

    function setNotes(data) {
      return vm.notes = data;
    }
  }

  angular
    .module('app')
    .controller('NoteController', NoteController);
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
