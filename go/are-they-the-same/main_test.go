package main

import (
	"testing"
)

type TestSuite struct {
	a      []int
	b      []int
	result bool
}

func TestComp(t *testing.T) {
	ts := [...]TestSuite{
		TestSuite{[]int{121, 144, 19, 161, 19, 144, 19, 11}, []int{11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19}, true},
		TestSuite{[]int{121, 144, 19, 161, 19, 144, 19, 11}, []int{11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19}, false},
		TestSuite{nil, []int{11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19}, false},
		TestSuite{[]int{-121, -144, 19, 161, -19, 144, 19, -11}, []int{11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19}, true},
	}

	for _, test := range ts {
		got := comp(test.a, test.b)
		if got != test.result {
			t.Errorf("comp(%v, %v) = %v; want %v", test.a, test.b, got, test.result)
		}
	}
}
