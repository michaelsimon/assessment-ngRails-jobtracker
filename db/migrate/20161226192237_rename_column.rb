class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :jobs, :user, :user_id
  end
end
