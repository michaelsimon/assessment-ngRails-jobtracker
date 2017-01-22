(function(){

  'use strict'

  angular
    .module('app')
    .controller('NoteController', ['NoteFactory', '$state', function(NoteFactory, $state) {
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
  }]);

}())
