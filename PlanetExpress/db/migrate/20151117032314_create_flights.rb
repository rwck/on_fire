class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :number, null: false
      t.string :origin, null: false
      t.string :destination, null: false
      t.date :date, null: false
      t.integer :seating_array, array: true
      t.references :airplane, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
