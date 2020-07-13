package main

import (
	"testing"
)

type TestSuite struct {
	input  string
	result string
}

func TestPrinterError(t *testing.T) {
	ts := []TestSuite{
		TestSuite{"aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz", "3/56"},
		TestSuite{"kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz", "6/60"},
		TestSuite{"kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu", "11/65"},
		TestSuite{"aaabbbbhaijjjm", "0/14"},
		TestSuite{"aaaxbbbbyyhwawiwjjjwwm", "8/22"},
	}

	for _, test := range ts {
		got := printerError(test.input)
		if got != test.result {
			t.Errorf("printerError(%v) = %v; want %v", test.input, got, test.result)
		}
	}
}
