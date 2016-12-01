class NotesController < ApplicationController
  before_action :get_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = Notes.find_by(job_id: params[:job_id])
    if @notes
      render json: @notes, serializer: NoteSerializer, status: 201
    end
  end

  def show
    if @note
      render json: @note, serializer: NoteSerializer, status: 201
    end

  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note, serializer: NoteSerializer, status: 201
    else
      render status: 400
    end
  end

  def edit
    if @note
      render json: @note, serializer: NoteSerializer, status: 201
    else
      render status: 400
    end
  end

  def update
    if @note.update(note_params)
      render json: @note, serializer: NoteSerializer, status: 200
    else
      render status: 400
    end
  end

  def destroy
  end

  private

  def get_note
    @note = Note.find_by(id: params[:id], job_id: params[:job_id])
  end

  def note_params
    params.require(:note).permit(:job_id, :note)
  end

end
