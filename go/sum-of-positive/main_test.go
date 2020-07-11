package main

import "testing"

type TestSuite struct {
	numbers []int
	result  int
}

func TestPositiveSum(t *testing.T) {
	ts := []TestSuite{
		TestSuite{[]int{1, 2, 3, 4, 5}, 15},
		TestSuite{[]int{1, -2, 3, 4, 5}, 13},
		TestSuite{[]int{}, 0},
		TestSuite{[]int{-1, -2, -3, -4, -5}, 0},
		TestSuite{[]int{-1, 2, 3, 4, -5}, 9},
	}

	for _, test := range ts {
		got := positiveSum(test.numbers)
		if got != test.result {
			t.Errorf("PositiveSum(%v) = %v; want %v", test.numbers, got, test.result)
		}
	}

}
