class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_name, :title, :company, :description, :salary, :date_posted, :date_found, :app_url, :status, :created_at, :updated_at
end
