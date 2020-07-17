package main

import (
	"testing"
)

type TestSuite struct {
	ip     string
	result bool
}

func TestIsValidIP(t *testing.T) {
	ts := []TestSuite{
		TestSuite{"12.255.56.1", true},
		TestSuite{"", false},
		TestSuite{"abc.def.ghi.jkl", false},
		TestSuite{"123.456.789.0", false},
		TestSuite{"12.34.56", false},
		TestSuite{"12.34.56 .1", false},
		TestSuite{"12.34.56.-1", false},
		TestSuite{"123.045.067.089", false},
		TestSuite{"0.0.0.0", true},
		TestSuite{"0.34.82.53", true},
		TestSuite{"192.168.1.300", false},
	}

	for _, test := range ts {
		got := isValidIP(test.ip)
		if got != test.result {
			t.Errorf("isValidIp(%v) = %v; want %v", test.ip, got, test.result)
		}
	}
}
