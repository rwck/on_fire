class RemoveNotNullIDasItsbreakingthings < ActiveRecord::Migration
  def change
    change_column_null :flights, :airplane_id, true
  end
end
