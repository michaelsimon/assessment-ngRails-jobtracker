class NotesController < ApplicationController
  before_action :get_note, only: [:destroy]
  def index
    @notes = Note.where(job_id: params[:job_id])
    if @notes
      render json: @notes, status: 201
    end
  end

  def create
    @note = Note.new(note_params)
    @note.job_id = params[:job_id]
    if @note.save
      render json: @note,  status: 201
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
    params.require(:note).permit( :note)
  end

end
