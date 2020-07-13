// https://www.codewars.com/kata/56541980fa08ab47a0000040
package main

import (
	"strconv"
)

func main() {

}

func printerError(s string) string {
	e := 0

	for _, b := range s {
		if b < 97 || b > 109 {
			e++
		}
	}

	return strconv.Itoa(e) + "/" + strconv.Itoa(len(s))
}
