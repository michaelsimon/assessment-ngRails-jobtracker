class JobsController < ApplicationController
  before_action :get_job, only: [:show, :edit, :update, :destroy]

  def index
    @jobs = Job.find_by(user:  params[:user])
    if @jobs
      render json: @jobs, serializer: JobSerializer, status: 201
    end
  end

  def show
    if @job
      render json: @job, serializer: JobSerializer, status: 201
    else
      render status: 400
    end
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render json: @job, serializer: JobSerializer, status: 201
    else
      render status: 400
    end
  end

  def edit
    if @job
      render json: @job, serializer: JobSerializer, status: 201
    else
      render status: 400
    end
  end

  def update
    if @job.update(job_params)
      render json: @job, serializer: JobSerializer, status: 201
    else
      render status: 400
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
