package main

import (
	"testing"
)

type TestSuite struct {
	n      int
	x      int
	y      int
	result bool
}

func TestIsDivisible(t *testing.T) {
	ts := []TestSuite{
		TestSuite{3, 3, 4, false},
		TestSuite{12, 3, 4, true},
		TestSuite{8, 3, 4, false},
		TestSuite{48, 3, 4, true},
		TestSuite{100, 5, 10, true},
		TestSuite{100, 5, 3, false},
		TestSuite{4, 4, 2, true},
		TestSuite{5, 2, 3, false},
		TestSuite{17, 17, 17, true},
		TestSuite{17, 1, 17, true},
	}

	for _, test := range ts {
		got := isDivisible(test.n, test.x, test.y)
		if got != test.result {
			t.Errorf("isDivisible(%v, %v, %v) = %v; want %v", test.n, test.x, test.y, got, test.result)
		}
	}
}
