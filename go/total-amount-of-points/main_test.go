package main

import "testing"

type TestSuite struct {
	points []string
	result int
}

func TestPoints(t *testing.T) {
	ts := []TestSuite{
		TestSuite{[]string{"1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"}, 30},
		TestSuite{[]string{"1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"}, 10},
		TestSuite{[]string{"0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"}, 0},
		TestSuite{[]string{"1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"}, 15},
		TestSuite{[]string{"1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"}, 12},
	}

	for _, test := range ts {
		got := points(test.points)
		if got != test.result {
			t.Errorf("points(%v) = %v; want %v", test.points, got, test.result)
		}
	}
}
