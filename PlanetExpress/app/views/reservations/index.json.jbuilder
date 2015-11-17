json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :flight_id, :user_id, :seat_reserved
  json.url reservation_url(reservation, format: :json)
end
