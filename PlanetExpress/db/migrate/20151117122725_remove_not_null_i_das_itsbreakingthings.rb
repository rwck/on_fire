class RemoveNotNullIDasItsbreakingthings < ActiveRecord::Migration
  def change
    # possibly get rid of this - it was needed to make some stuff work with the database
    change_column_null :flights, :airplane_id, true
  end
end
