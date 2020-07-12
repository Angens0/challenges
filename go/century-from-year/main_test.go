package main

import (
	"testing"
)

type TestSuite struct {
	year   int
	result int
}

func TestCentury(t *testing.T) {
	ts := []TestSuite{
		TestSuite{1705, 18},
		TestSuite{1900, 19},
		TestSuite{1601, 17},
		TestSuite{2000, 20},
		TestSuite{89, 1},
		TestSuite{1990, 20},
		TestSuite{1, 1},
	}

	for _, test := range ts {
		got := century(test.year)
		if got != test.result {
			t.Errorf("century(%v) = %v; want %v", test.year, got, test.result)
		}
	}
}
