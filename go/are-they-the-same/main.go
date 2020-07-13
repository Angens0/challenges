// https://www.codewars.com/kata/550498447451fbbd7600041c
package main

import (
	"sort"
)

func main() {

}

func comp(a []int, b []int) bool {
	if a == nil || b == nil || len(a) != len(b) {
		return false
	}

	for i := range a {
		if a[i] < 0 {
			a[i] = -a[i]
		}
	}

	sort.Ints(a)
	sort.Ints(b)

	for i := range a {
		if a[i]*a[i] != b[i] {
			return false
		}
	}

	return true
}
