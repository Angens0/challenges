// https://www.codewars.com/kata/526571aae218b8ee490006f4
package main

import (
	"fmt"
)

func main() {
	fmt.Println(countBits(1234))
}

func countBits(n uint) int {
	var c uint = 0

	for n > 0 {
		c += n % 2
		n /= 2
	}

	return int(c)
}
