<template lang="">
  <div
    id="windowWrapper2"
    @click="hiddenWindow"
    :class="
      useGeneralStore().showAttendance
        ? `translate-y-[0px] scale-y-100`
        : `translate-y-[-100px] scale-y-0`
    "
    class="fixed w-[100vw] flex justify-center items-center px-2 duration-300 top-0 z-[20] h-[100vh] bg-[#fffefe88] backdrop-blur-[2px]"
  >
    <div
      class="h-[90%] md:h-[80%] w-full overflow-x-scroll md:min-w-[920px] rounded-md bg-bgPrimary py-5 md:py-10 px-5 md:px-14"
    >
      <div class="flex w-full gap-10 item-center">
        <p class="w-[50px] md:w-[100px]">Sana:</p>
        <input
          type="Text"
          v-model="lesson.date"
          class="rounded-[7px] py-1 flex-grow px-2 outline-none border border-activeColor bg-transparent"
        />
      </div>
      <div class="flex gap-10 mt-5 item-center">
        <p class="w-[50px] md:w-[100px]">Mavzu:</p>
        <input
          required
          v-model="lesson.theme"
          type="Text"
          class="rounded-[7px] px-2 py-1 flex-grow outline-none border border-activeColor bg-transparent"
        />
      </div>
      <ul v-if="load" class="mt-10 h-[calc(100%-180px)] overflow-y-scroll">
        <li
          v-for="(item, i) in [...getStudents()]"
          class="flex gap-2 mt-2 items-center"
        >
          <p class="w-10 md:text-[24px]">{{ i + 1 }}.</p>
          <p class="md:text-[24px] min-w-[200px] md:min-w-[400px]">
            {{ item.full_name }}
          </p>
          <div class="flex flex-grow items-center">
            <button
              @click="attendanceChange('be', item.id)"
              :class="
                lesson?.attendance?.includes(item.id)
                  ? 'bg-green'
                  : 'bg-hoverColor'
              "
              class="uppercase py-1 px-2 duration-300 rounded-l-md"
            >
              Bor</button
            ><button
              @click="attendanceChange('not', item.id)"
              :class="
                lesson?.attendance?.includes(item.id)
                  ? 'bg-hoverColor'
                  : 'bg-red'
              "
              class="uppercase py-1 px-2 duration-300 rounded-r-md"
            >
              Yo'q
            </button>
            <input
              v-if="!lesson?.attendance?.includes(item.id)"
              v-model="reasons[item.id]"
              type="Text"
              placeholder="Sababi noma'lum"
              class="rounded-[7px] ml-2 px-2 py-1 placeholder:text-activeColor flex-grow outline-none border border-red bg-transparent"
            />
          </div>
        </li>
      </ul>

      <div v-else class="flex justify-center h-[50%] items-center">
        <span class="loader"></span>
      </div>

      <div class="grid items-center mt-3 grid-cols-2 py-1">
        <button
          @click="() => (useGeneralStore().showModal = true)"
          class="bg-green rounded-l-md px-2 hover:opacity-100 opacity-80 py-1 md:text-[24px] font-medium"
        >
          💾 Saqlash</button
        ><button
          @click="hiddenWindow2"
          class="bg-red rounded-r-md px-2 hover:opacity-100 opacity-80 py-1 md:text-[24px] font-medium"
        >
          ❌ Bekor qilish
        </button>
      </div>
    </div>

    <Modalka
      v-if="useGeneralStore().showAttendance == true"
      :text="'Davomatni saqlamoqchimisiz?'"
      @funcYes="yesFnc"
      @funcNo="
        () => {
          useGeneralStore().showModal = false;
        }
      "
    />
  </div>
</template>
<script setup>
let load = ref(false);
let reasons = ref({});
let lesson = ref({});
let ind = ref(null);
function yesFnc() {
  useGroupStore().groups[ind.value].lessons[getDate(lesson.value.date)] = {
    ...lesson.value,
    reasons: { ...reasons },
  };

  lesson.value = { ...useGroupStore().getLessonToday() };
  useGeneralStore().showAttendance = false;
  useGeneralStore().showModal = false;
}
function getStudents() {
  if (useGroupStore().groups[ind.value]?.students?.length) {
    return [...useGroupStore().groups[ind.value]?.students];
  } else {
    return [];
  }
}
function hiddenWindow2() {
  if (useGroupStore().getLessonToday()) {
    lesson.value = { ...useGroupStore().getLessonToday() };
  } else {
    addAllAttendance();
  }
  useGeneralStore().showAttendance = false;
}
function getDate(date) {
  return new Date(date).toLocaleDateString();
}
function addAllAttendance() {
  lesson.value.attendance = [...getStudents()]?.map((student) => student.id);
  lesson.value.date = new Date().toLocaleDateString();
}

function hiddenWindow(e) {
  if (e.target.id == "windowWrapper2") {
    useGeneralStore().showAttendance = false;
    if (useGroupStore().getLessonToday()) {
      lesson.value = { ...useGroupStore().getLessonToday() };
    } else {
      addAllAttendance();
    }
  }
}

function attendanceChange(type, id) {
  if (type == "be") {
    if (!lesson.value?.attendance?.includes(id)) {
      lesson.value.attendance.push(id);
    }
  } else {
    if (lesson.value?.attendance?.includes(id)) {
      lesson.value.attendance.splice(lesson.value.attendance.indexOf(id), 1);
    }
  }
}

onMounted(() => {
  ind.value = useGroupStore().groups.findIndex(
    (el) => el.id == useRoute().params.id
  );
  addAllAttendance();
  load.value = true;
  let date = new Date().toLocaleDateString();

  // if (useGroupStore()?.groups[ind.value]?.lessons[date]) {
  //   lesson.value = useGroupStore()?.groups[ind.value]?.lessons[date] || {};
  // }
  if (useGroupStore().getLessonToday()) {
    lesson.value = { ...useGroupStore().getLessonToday() };
    reasons.value = lesson.value.reasons;
  }
});
</script>
<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
