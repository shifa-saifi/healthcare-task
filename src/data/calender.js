function getRandomSlots() {
  const possibleSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00"
  ];
  const shuffled = possibleSlots.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).sort();
}

export const DAYS = [
  { label: "Mon", num: 25, slots: getRandomSlots() },
  { label: "Tues", num: 26, slots: getRandomSlots(), active: true },
  { label: "Wed", num: 27, slots: getRandomSlots() },
  { label: "Thurs", num: 28, slots: getRandomSlots() },
  { label: "Fri", num: 29, slots: getRandomSlots() },
  { label: "Sat", num: 30, slots: getRandomSlots() },
  { label: "Sun", num: 31, slots: getRandomSlots(), dim: true }
];
