package main

import (
	"testing"
)

type TestSuite struct {
	input  uint64
	result [3]uint64
}

func TestProductFib(t *testing.T) {
	ts := [...]TestSuite{
		{4895, [3]uint64{55, 89, 1}},
		{5895, [3]uint64{89, 144, 0}},
		{74049690, [3]uint64{6765, 10946, 1}},
		{84049690, [3]uint64{10946, 17711, 0}},
	}

	for _, test := range ts {
		got := productFib(test.input)
		if got != test.result {
			t.Errorf("productFib(%v) = %v; want %v", test.input, got, test.result)
		}
	}
}
