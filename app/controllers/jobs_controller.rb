class JobsController < ApplicationController
  before_action :get_job, only: [:show, :edit, :update]

  def index
    @jobs = Job.where(user: current_user)
    if @jobs
      render json: @jobs, status: 201
    else
      render json: {errors: @jobs.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    if @job
      render json: @job, status: 201
    else
      render json:'', status: 404
    end
  end

  def create
    @job = Job.new(job_params)
    @job.user = current_user
    if @job.save
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def edit
    if @job
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def get_job
    @job = Job.find_by(id: params[:id], user: current_user)
  end

  def job_params
    params.require(:job).permit(:job_name, :title, :company, :description, :salary, :date_posted, :date_found, :app_url, :status)
  end

end
