(function(){

  'use strict'

  angular
    .module('app')
    .controller('NoteController', ['NoteFactory', function(NoteFactory) {
    var vm = this;

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
  }]);

}())
