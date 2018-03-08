# find matches in an array.  X is integer, A is an array

# way 1 (recursive)
def solution(x, a)

  start=0
  last=(a.length)-1
  # num = 0
  mid = (start+last)/2

  if a[mid] == x
    # p a[mid]
    p mid
    return mid
  elsif a[mid] < x
    # a = a.slice(0, mid)
    solution(x, a[(mid+1)..last])
  elsif a[mid] > x
    # a = a.slice(mid, (a.length-1))
    solution(x, a[start..mid])
  else
    p 'Not found'
    return -1
  end


end


solution(45, [23, 45, 67, 89, 123, 568])

