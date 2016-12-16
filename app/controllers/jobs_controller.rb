class JobsController < ApplicationController
  before_action :get_job, only: [:show, :edit, :update, :destroy]

  def index
    # jobs = Job.find_by(user:  params[:user])
    @jobs = Job.all
    if @jobs
      render json: @jobs, status: 201
    else
      render json: {errors: @jobs.errors.full_messages}, status: :unprocessable_entity_message
    end
  end

  def show
    if @job
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity_message
    end
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity_message
    end
  end

  def edit
    if @job
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity_message
    end
  end

  def update
    if @job.update(job_params)
      render json: @job, status: 201
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity_message
    end
  end

  def destroy
  end

  private

  def get_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:job_name, :title, :company, :description, :salary, :date_posted, :date_found, :app_url, :status)
  end

end
