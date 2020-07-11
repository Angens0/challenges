// https://www.codewars.com/kata/5bb904724c47249b10000131
package main

func main() {

}

func points(games []string) int {
	r := 0

	for _, s := range games {
		x := s[0]
		y := s[2]

		if x > y {
			r += 3
		} else if x == y {
			r++
		}
	}

	return r
}
