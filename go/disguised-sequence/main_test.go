package main

import "testing"

type TestSuite struct {
	n      uint
	result uint
}

func TestFct(t *testing.T) {
	ts := []TestSuite{
		TestSuite{17, 131072},
		TestSuite{21, 2097152},
		TestSuite{14, 16384},
	}

	for _, test := range ts {
		got := fct(test.n)
		if got != test.result {
			t.Errorf("fct(%v) = %v; want %v", test.n, got, test.result)
		}
	}
}
