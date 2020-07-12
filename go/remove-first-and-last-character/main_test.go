package main

import (
	"testing"
)

type TestSuite struct {
	word   string
	result string
}

func TestRemoveChar(t *testing.T) {
	ts := []TestSuite{
		TestSuite{"eloquent", "loquen"},
		TestSuite{"country", "ountr"},
		TestSuite{"person", "erso"},
		TestSuite{"place", "lac"},
		TestSuite{"is", ""},
	}

	for _, test := range ts {
		got := removeChar(test.word)
		if got != test.result {
			t.Errorf("removeChar(%v) = %v; want %v", test.word, got, test.result)
		}
	}
}
