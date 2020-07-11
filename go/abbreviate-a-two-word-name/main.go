// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "Sam Harris"

	fmt.Println(abbrevName(s))
}

func abbrevName(name string) string {
	bs := []byte(name)

	for i, b := range bs {
		if b == 32 {
			return strings.ToUpper(string([]byte{bs[0], 46, bs[i+1]}))
		}
	}

	return ""
}
