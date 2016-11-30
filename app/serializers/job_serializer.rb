class JobSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :job
end
