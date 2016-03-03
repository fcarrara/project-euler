def multiplesOf3And5 input
	total = 0
	input.times do |i|
		if (i % 3 == 0) || (i % 5 == 0)
			total += i
		end
	end
	total
end

# Different way without checking if and mod. Every 3 numbers are even
# def fibonacci input
# 	timeStart = Time.now
# 	a, b, sum = 1, 2, 0
# 	while b <= input
# 		a, b, sum = a + 2 * b, 2 * a + 3 * b, sum + b
# 	end
# 	puts sum
# 	puts "Elapsed time: #{(Time.now - timeStart) * 1000} milliseconds"
# end

def fibonacci input
	timeStart = Time.now
	total = 0
	previous = 0
	i = 1
	while i <= input
		total += i if (i % 2 == 0)
		i, previous = previous, previous + i
	end
	puts total
	puts "Elapsed time: #{(Time.now - timeStart) * 1000} milliseconds"
end

def largestPrimeFactor num
	factor = 2
	while (num > factor)
		if (num % factor == 0)
			num = num / factor
			factor = 2
		else
			factor = factor + 1
		end
	end
	factor
end

puts multiplesOf3And5(10)
puts fibonacci(4000000)
puts largestPrimeFactor(600851475145)