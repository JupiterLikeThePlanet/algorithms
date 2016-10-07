def left_rotation (array_length, rotations)
	array = []
	array_numbers = 1
	# until array_length == 0 do
	until array_numbers > array_length do
		array << array_numbers
		array_numbers += 1
	end
	# array.rotate!(-rotations)
	rotated_array = []

	until rotations == 0 do
		rotated_array << array.shift
		rotations -= 1
		# array.insert(element, array.delete_at(-rotations))
	end

	if array.any?
		p "rotated array: "
		p rotated_array
		p 'array: '
		p array
		# array.push(rotated_array.flatten!)
		array.push(rotated_array)
		array.flatten!
		p array
		return array
	else 
		p rotated_array
		return rotated_array
	end

end

left_rotation(4, 7)




