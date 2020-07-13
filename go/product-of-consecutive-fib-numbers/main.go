// https://www.codewars.com/kata/5541f58a944b85ce6d00006a
package main

import (
	"fmt"
)

func main() {
	fmt.Println(productFib(714))
	fmt.Println(productFib(800))
}

func productFib(n uint64) [3]uint64 {
	r := [...]uint64{0, 1, 0}

	for {
		prod := r[0] * r[1]
		if prod == n {
			r[2] = 1
			break
		}
		if prod > n {
			break
		}

		r[0], r[1] = r[1], r[0]+r[1]
	}

	return r
}
