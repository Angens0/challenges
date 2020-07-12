// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
package main

func main() {

}

func century(year int) int {
	c := year / 100

	if year%100 > 0 {
		c++
	}

	return c
}
