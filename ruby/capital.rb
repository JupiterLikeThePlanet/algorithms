# Write a program that will correct the input string to use proper capitalization and spacing. Allowed punctuations are the period ( . ), question mark ( ? ), and exclamation ( ! ). Make sure that commas ( , ), colons ( : ), semicolons ( ; ) and all other punctuation are always followed by spaces. Input string will be a valid English sentence.

# Example: "first, solve the problem.then, write the code."
# Output:  "First, solve the problem. Then, write the code."

# Example: "this is a test... and another test."
# Output:  "This is a test... And another test."

def capitalize(phrase)
	if phrase.include?("...")
		array = phrase.split(" ")
		ind_num = 0
		array[ind_num].capitalize!
		array.each_with_index do |element, ind| 
		 	if element.include?("...") || element.include?(".")
		 		ind_num = ind
		 		unless array[ind_num+1] == nil 
		 			array[ind_num+1].capitalize!
		 		end 
		 	else
		 		next
		 	end
		 end
		 answer = array.join(" ")
		 p answer
		 return answer	 
	else
		array = phrase.split(".")
		array.map do |s| 
			if s[0] == " "
				s.slice!(0)
				s.capitalize!
			else
				s.capitalize!
			end
		end

		answer = array.join(". ")
		p answer
		return answer
	end
end

capitalize("this is a test... and another test.")
capitalize("first, solve the problem.then, write the code.")
capitalize("hello, dr. morris.")

# capitalize("this")