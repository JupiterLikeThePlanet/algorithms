# find matches in an array.  X is integer, A is an array

def solution(x, a)
  
  start=0 
  last=(a.length)-1
  middle = (0 + (a.length - 1))/2
  # k = []
  if a[middle] == x
    k << middle
  elsif a[middle] < x
    solution(x, a)
  elsif a[middle] > x
    solution(x, a)
  else
    return nil
  end
  
  return k.length
  
  # length = a.length
  # a.each_slice( (a.size/2.0).round ).to_a
  
  
end


solution(5, [5, 5, 1, 7, 2, 3, 5])