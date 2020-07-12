package main

import (
	"testing"
)

type TestSuite struct {
	number int
	result int
}

func TestSummation(t *testing.T) {
	ts := []TestSuite{
		TestSuite{1, 1},
		TestSuite{2, 3},
		TestSuite{8, 36},
		TestSuite{22, 253},
		TestSuite{100, 5050},
		TestSuite{213, 22791},
	}

	for _, test := range ts {
		got := summation(test.number)
		if got != test.result {
			t.Errorf("summation(%v) = %v; want %v", test.number, got, test.result)
		}
	}
}
