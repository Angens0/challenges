// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
package main

func main() {
	summation(2)
}

func summation(n int) int {
	f := float32(n)
	return int((1 + f) / 2 * f)
}
