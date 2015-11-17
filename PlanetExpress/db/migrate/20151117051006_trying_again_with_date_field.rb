class TryingAgainWithDateField < ActiveRecord::Migration
  def change
    change_column_null :flights, :date, false
  end
end
