**🦁🦓 Lion Hunt**

Out on the savannah, lions (`"L"`) are on the lookout for their next meal. Zebras (`"Z"`) graze peacefully, but they know danger could be close!

Mission is to help the lions decide **which zebra is closest to them**.

We are given a string where:

* `"L"` = a lion
* `"Z"` = a zebra
* `" "` (space) = an empty patch of land

my task: **find the shortest number of spaces between any lion and any zebra**.

---

## Requirements

1. **Input**: a string made up of `"L"`, `"Z"`, and `" "` characters.
2. **Output**:

   * The **minimum number of spaces** between a lion and a zebra (this represents the zebra most likely to be hunted).
   * If there are no lions or no zebras, return `-1`.
## Test Cases to Try

| Input         | Expected Output |
| ------------- | --------------- |
| `"LZ"`        | 0               |
| `"Z L"`       | 1               |
| `"L     Z"`   | 5               |
| `"L     L"`   | -1              |
| `"Z   Z   Z"` | -1              |
| `"L  ZL Z"`   | 0               |

for "L  ZL Z" ->
  First lion (`L`) sees a zebra (`Z`) two spaces away.
  A zebra next to another lion has 0 spaces (that zebra is in big trouble!).
  Another lion and zebra are 1 space apart.
  The closest hunt is at a distance of 0.

# problemss
how will I calcualte distance between lion and zebra.
-> first, find lion location and zebra location...
then, lion location - zebra location .

how will I find location of animals.

how will I calculate distance for "Z L"
-> use a decision making if "Z" location is less than "L" location then substract ("Z" lactation - "L" location) otherwise ("L" location - "Z" location)

so if there is no zebra or no lion then output is -1 ... how will i do this...?
-> everytime "distance" is changed in loop .... if any no change in "distance" than answer is -1. because we are not able to find zebra or lion.
