class AddUsertoJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :user, :integer
  end
end
