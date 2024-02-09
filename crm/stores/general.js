import { defineStore } from "pinia";

export const useGeneralStore = defineStore("useGeneralStore", () => {
  let showAttendance = ref(false);
  return { showAttendance };
});
