class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name, null: false
      t.integer :row, null: false
      t.integer :column, null: false

      t.timestamps null: false
    end
  end
end
