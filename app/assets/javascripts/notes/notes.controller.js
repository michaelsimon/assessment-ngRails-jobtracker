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

  NoteController.$inject = ['NoteFactory', '$state'];

  angular
    .module('app')
    .controller('NoteController', NoteController);
}())
