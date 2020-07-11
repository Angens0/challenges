package main

import "testing"

type TestSuite struct {
	name   string
	result string
}

func TestAbbrevName(t *testing.T) {
	ts := []TestSuite{
		TestSuite{"Sam Harris", "S.H"},
		TestSuite{"Patrick Feenan", "P.F"},
		TestSuite{"Evan Cole", "E.C"},
		TestSuite{"P Favuzzi", "P.F"},
		TestSuite{"David Mendieta", "D.M"},
		TestSuite{"david mendieta", "D.M"},
	}

	for _, test := range ts {
		got := abbrevName(test.name)
		if got != test.result {
			t.Errorf("abbrevName(%v) = %v; want %v", test.name, got, test.result)
		}
	}
}
