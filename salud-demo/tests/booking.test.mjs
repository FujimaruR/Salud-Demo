import test from "node:test";
import assert from "node:assert/strict";
import {
  availableSlots,
  specialistFor,
  upcomingDates,
} from "../src/site/booking.mjs";

test("booking offers a bounded future window across month and year boundaries", () => {
  const dates = upcomingDates(new Date(2026, 11, 30, 12));
  assert.equal(dates.length, 21);
  assert.equal(dates[0], "2026-12-31");
  assert.equal(dates[1], "2027-01-01");
  assert.equal(dates[20], "2027-01-20");
  assert.equal(new Set(dates).size, 21);
});
test("availability excludes closed Sundays, unknown profiles and dates outside the window", () => {
  const dates = upcomingDates(new Date(2026, 9, 8, 12));
  assert.deepEqual(availableSlots("2026-10-11", "ana", dates), []);
  assert.deepEqual(availableSlots("2026-10-09", "unknown", dates), []);
  assert.deepEqual(availableSlots("2026-10-08", "ana", dates), []);
  const weekday = availableSlots("2026-10-09", "ana", dates);
  assert.ok(weekday.length > 0);
  assert.equal(new Set(weekday).size, weekday.length);
  assert.notDeepEqual(weekday, availableSlots("2026-10-09", "mateo", dates));
  assert.ok(availableSlots("2026-10-10", "ana", dates).length < weekday.length);
  assert.deepEqual(specialistFor.children, ["sofia"]);
  assert.deepEqual(specialistFor.orthodontics, ["mateo"]);
});
