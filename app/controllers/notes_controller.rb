class NotesController < ApplicationController
  def index
    @notes = Note.where(job_id: params[:id]).order(created_at: :desc)
    if @notes
      render json: @notes, status: 201
    end
  end

  def create
    @note = Note.new(note_params)
    @note.job_id = params[:id]
    if @note.save
      render json: @note,  status: 201
    else
      render status: 400
    end
  end

  private

  def note_params
    params.require(:note).permit( :note)
  end

end
