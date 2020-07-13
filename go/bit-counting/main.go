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
