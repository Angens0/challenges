// https://www.codewars.com/kata/5715eaedb436cf5606000381
package main

func main() {

}

func positiveSum(numbers []int) int {
	sum := 0

	for _, n := range numbers {
		if n > 0 {
			sum += n
		}
	}

	return sum
}
