
#UNFINISHED


# The Fibonacci sequence is defined by the recurrence relation:
#
# Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
#
# Hence the first 12 terms will be:
#
# F1 = 1
# F2 = 1
# F3 = 2
# F4 = 3
# F5 = 5
# F6 = 8
# F7 = 13
# F8 = 21
# F9 = 34
# F10 = 55
# F11 = 89
# F12 = 144
#
# The 12th term, F12, is the first term to contain three digits.
#
# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?




def fib(first, second)

  fn = first + second
  first = second
  # n = 0


  if fn.to_s.length == 1000
    p fn
    return fn
  else
    # n += 1
    # p "in else"
    # p n
    fib(first, fn)
  end

  # while fn.to_s.length != 1000
  #   n = 0
  #
  #
  # end

end

fib(1,1)


# n = 1000
#
# def fibonnaci(n)
#   if n == 1
#     1
#   elsif n == 2
#     1
#   else
#
#   end
# end


