class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :job_name
      t.string :title
      t.string :company
      t.string :description
      t.string :salary
      t.date :date_posted
      t.date :date_found
      t.string :app_url
      t.integer :status
      t.timestamps null: false
    end
  end
end
