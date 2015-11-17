json.array!(@users) do |user|
  json.extract! user, :id, :name, :password, :type, :this_is_a_test
  json.url user_url(user, format: :json)
end
