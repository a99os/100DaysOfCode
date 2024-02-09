import { defineStore } from "pinia";

export const useGeneralStore = defineStore("useGeneralStore", () => {
  let showAttendance = ref(false);
  let showAttendanceModal = ref(false);
  return { showAttendance, showAttendanceModal };
});
