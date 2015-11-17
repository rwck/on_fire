class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|

      t.string :seat_reserved, null: false

      t.references :user, index: true, foreign_key: true, null: false

      t.references :flight, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
