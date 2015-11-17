class TryingAgainWithDateFieldGrrrr < ActiveRecord::Migration
  def change
    change_column_null :flights, :date, true
  end
end
