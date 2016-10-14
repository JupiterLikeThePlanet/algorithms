# Input Format

# The first line contains a single string, a. 
# The second line contains a single string, b.

# Constraints

# It is guaranteed that a  and   bconsist of lowercase English alphabetic letters (i.e.,  through ).

# Output Format

# Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.


def anagram(a,b)
	a = a.split('')
	b = b.split('')

	a_length = a.length-1
	# b_length = b.length-1

	match = []
	non_match = []

	while a_length >= 0
		b.map do |i|
			if i == a[a_length]
				match << i
			elsif i != a[a_length]
				non_match << i
			else
				next
			end
		end
		a_length -= 1
	end

	p match
	# p non_match
	
end


anagram("cde", "abc")