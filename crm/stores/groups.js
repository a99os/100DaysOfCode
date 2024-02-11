import { defineStore } from "pinia";

export const useGroupStore = defineStore("groupsData", () => {
  const groups = ref([
    {
      id: 1,
      name: "1-guruh",
      direction: { id: 3, name: "Ingliz tili" },
      teachers: [
        { id: 1, full_name: "Abbos Ashirboyev" },
        { id: 3, full_name: "Sa'dullayev Abdulla" },
      ],
      lessons: {},
      mainTeacher: { id: 1, full_name: "Abbos Ashirboyev" },
      room: "125",
      weekDays: [
        { id: 2, name: "Seshanba" },
        { id: 3, name: "Chorshanba" },
        { id: 4, name: "Payshanba" },
      ],
      startTime: "08:00",
      students: [
        { id: 1, full_name: "John Jones" },
        { id: 2, full_name: "Islam Makhachev" },
        { id: 3, full_name: "Conor McGregor" },
        { id: 4, full_name: "John Jones" },
        { id: 5, full_name: "Islam Makhachev" },
        { id: 6, full_name: "Conor McGregor" },
        { id: 7, full_name: "John Jones" },
        { id: 8, full_name: "Islam Makhachev" },
        { id: 9, full_name: "Conor McGregor" },
        { id: 10, full_name: "John Jones" },
      ],
    },
    {
      id: 2,
      name: "2-guruh",
      direction: { id: 1, name: "Matematika" },
      teachers: [{ id: 2, full_name: "Palonchiyev Palonchi" }],
      mainTeacher: { id: 2, full_name: "Palonchiyev Palonchi" },
      room: "222",
      weekDays: [
        { id: 2, name: "Seshanba" },
        { id: 3, name: "Chorshanba" },
        { id: 5, name: "Juma" },
      ],
      lessons: {
        "2/10/2024": {
          attendance: [4, 1, 2, 3],
          date: "2/11/2024",
          theme: "njknjnk jnnkj knjkk",
          reasons: {},
        },
        "2/9/2024": {
          attendance: [1, 2],
          date: "2/11/2024",
          theme: "njknjnk jnnkj knjkk",
          reasons: {},
        },
        "2/8/2024": {
          attendance: [3, 1],
          date: "2/11/2024",
          theme: "njknjnk jnnkj knjkk",
          reasons: {},
        },
        "2/7/2024": {
          attendance: [2, 1, 4],
          date: "2/11/2024",
          theme: "njknjnk jnnkj knjkk",
          reasons: {},
        },
      },
      startTime: "18:00",
      students: [
        { id: 4, full_name: "John Jones" },
        { id: 3, full_name: "Conor McGregor" },
        { id: 2, full_name: "Islam Makhachev" },
        { id: 1, full_name: "John Jones" },
      ],
    },
    {
      id: 3,
      name: "3-guruh",
      direction: { id: 5, name: "Arab tili" },
      lessons: {},
      teachers: [{ id: 3, full_name: "Sa'dullayev Abdulla" }],
      mainTeacher: { id: 3, full_name: "Sa'dullayev Abdulla" },
      room: "777",
      weekDays: [{ id: 5, name: "Juma" }],
      startTime: "07:00",
      students: [{ id: 2, full_name: "Islam Makhachev" }],
    },
  ]);

  function getLessonToday() {
    let ind = useGroupStore().groups.findIndex(
      (el) => el.id == useRoute().params.id
    );
    let date = new Date().toLocaleDateString();
    if (this.groups[ind]?.lessons[date]) {
      return new Object(this?.groups[ind]?.lessons[date]);
    } else {
      {
      }
    }
  }

  function getGroup(id) {
    return new Object(this.groups.find((g) => g.id == id));
  }

  return { groups, getGroup, getLessonToday };
});
