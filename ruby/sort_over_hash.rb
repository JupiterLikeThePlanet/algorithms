
## QUESTION ##################################################################################################
# Write a function that sorts the keys in a hash by the length of the key as a string. For instance, the hash:
#
# { abc: 'hello', 'another_key' => 123, 4567 => 'third' }
#
# should result in:
#
# ["abc", "4567", "another_key"]
###############################################################################################################


def sort_hash_by_length(hash)

  hash.keys.collect(&:to_s).sort { |a, b| a.length <=> b.length }
end



p sort_hash_by_length({ abc: 'hello', 'another_key' => 123, 4567 => 'third' })
