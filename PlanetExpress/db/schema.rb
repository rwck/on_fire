# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151117122725) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airplanes", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "row",        null: false
    t.integer  "column",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flights", force: :cascade do |t|
    t.integer  "number",        null: false
    t.string   "origin",        null: false
    t.string   "destination",   null: false
    t.date     "date"
    t.integer  "seating_array",              array: true
    t.integer  "airplane_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "flights", ["airplane_id"], name: "index_flights_on_airplane_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.string   "seat_reserved", null: false
    t.integer  "user_id",       null: false
    t.integer  "flight_id",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "reservations", ["flight_id"], name: "index_reservations_on_flight_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "password"
    t.string   "user_type",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "flights", "airplanes"
  add_foreign_key "reservations", "flights"
  add_foreign_key "reservations", "users"
end
