// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
package main

import (
	"fmt"
)

func main() {
	s := "Hello, World!"
	fmt.Println(removeChar(s))
}

func removeChar(s string) string {
	return string(s[1 : len(s)-1])
}
