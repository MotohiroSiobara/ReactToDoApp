class AddColumnTodolists < ActiveRecord::Migration[5.0]
  def change
    add_column :todo_lists, :title, :string
    add_column :todo_lists, :checked, :boolean, default: :false
  end
end
