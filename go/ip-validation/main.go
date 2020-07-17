// https://www.codewars.com/kata/515decfd9dcfc23bb6000006
package main

import (
	"strconv"
	"strings"
)

func main() {

}

func isValidIP(ip string) bool {
	octets := strings.Split(ip, ".")
	if len(octets) != 4 {
		return false
	}

	for _, v := range octets {
		i, error := strconv.Atoi(v)
		if error != nil {
			return false
		}

		if i > 255 || i < 0 {
			return false
		}

		if strconv.Itoa(i) != v {
			return false
		}
	}

	return true
}
