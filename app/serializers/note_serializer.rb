class NoteSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :note, :created_at
end
