import { defineStore } from "pinia";

export const useGroupStore = defineStore("groupsData", () => {
  const groups = ref([
    {
      id: 1,
      name: "1-Guruh",
      teacher: "Ashirboyev Abbos",
      studentCount: 12,
      createdGroup: new Date(),
      startTime: "12:00",
      weekDays: "Du,Se,CH",
      room: "101-xona",
      direction: "Matematika",
      img: "/groups/1.webp",
    },
    {
      id: 2,
      name: "2-Guruh",
      teacher: "Palonchiyev Palonchi",
      studentCount: 20,
      createdGroup: new Date(),
      startTime: "8:00",
      weekDays: "SH,Ya",
      room: "120-xona",
      direction: "Fizika",
      img: "/groups/2.jpeg",
    },
    {
      id: 3,
      name: "3-Guruh",
      teacher: "Abdullayev Sa'dulla",
      studentCount: 6,
      createdGroup: new Date(),
      startTime: "18:00",
      weekDays: "Se,Pa,SH",
      room: "110-xona",
      direction: "Ingliz tili",
      img: "/groups/3.jpeg",
    },
  ]);

  function getGroup(id) {
    return this.groups.find((g) => g.id == id);
  }

  return { groups, getGroup };
});
