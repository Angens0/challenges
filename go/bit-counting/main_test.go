package main

import (
	"testing"
)

type TestSuite struct {
	input  uint
	result int
}

func TestCountBits(t *testing.T) {
	ts := [...]TestSuite{
		TestSuite{0, 0},
		TestSuite{4, 1},
		TestSuite{7, 3},
		TestSuite{9, 2},
		TestSuite{10, 2},
	}

	for _, test := range ts {
		got := countBits(test.input)
		if got != test.result {
			t.Errorf("countBits(%v) = %v; want %v", test.input, got, test.result)
		}
	}
}
