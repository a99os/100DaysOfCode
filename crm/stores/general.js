import { defineStore } from "pinia";

export const useGeneralStore = defineStore("useGeneralStore", () => {
  let showAttendance = ref(false);
  let showModal = ref(false);
  let showGroupAdd = ref(false);
  let teachers = ref([
    { id: 1, full_name: "Abbos Ashirboyev" },
    { id: 2, full_name: "Palonchiyev Palonchi" },
    { id: 3, full_name: "Sa'dullayev Abdulla" },
  ]);
  let students = ref([
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
    { id: 11, full_name: "Islam Makhachev" },
    { id: 12, full_name: "Conor McGregor" },
    { id: 13, full_name: "John Jones" },
    { id: 14, full_name: "Islam Makhachev" },
    { id: 15, full_name: "Conor McGregor" },
  ]);
  let weekDays = ref([
    { id: 1, name: "Dushanba" },
    { id: 2, name: "Seshanba" },
    { id: 3, name: "Chorshanba" },
    { id: 4, name: "Payshanba" },
    { id: 5, name: "Juma" },
    { id: 6, name: "Shanba" },
    { id: 7, name: "Yakshanba" },
  ]);
  let directions = ref([
    { id: 1, name: "Matematika" },
    { id: 2, name: "Fizika" },
    { id: 3, name: "Ingliz tili" },
    { id: 4, name: "Rus tili" },
    { id: 5, name: "Arab tili" },
  ]);
  return {
    showAttendance,
    showModal,
    showGroupAdd,
    teachers,
    weekDays,
    students,
    directions,
  };
});
