<template lang="">
  <div
    id="windowWrapper"
    @click="hiddenWindow"
    :class="
      useGeneralStore().showGroupAdd
        ? `translate-y-[0px] scale-y-100`
        : `translate-y-[-100px] scale-y-0`
    "
    class="fixed w-[100vw] overflow-y-scroll flex justify-center duration-300 items-center px-2 top-0 z-[20] h-[100vh] bg-[#fffefe88] backdrop-blur-[2px]"
  >
    <div
      class="min-h-[90%] flex justify-center items-start w-full overflow-x-scroll md:w-[920px] rounded-md bg-bgPrimary py-5 md:py-10 px-2 md:px-14"
    >
      <form class="grid md:grid-cols-2 gap-5 w-full justify-center items-start">
        <h1 class="md:col-span-2 text-[24px] text-center font-bold">
          Yangi Guruh qo'shish
        </h1>
        <div>
          <label for="group_name" class="px-2 block">Guruh nomi:</label>
          <input
            type="text"
            id="group_name"
            v-model="group.name"
            placeholder="Guruh nomini kiriting"
            class="rounded-[7px] w-full py-1 px-2 outline-none border border-activeColor bg-transparent"
          />
        </div>
        <div>
          <label for="direction" class="px-2 block">Fan:</label>
          <v-select
            :selectOnTab="true"
            :options="useGeneralStore().directions"
            placeholder="Fan"
            id="direction"
            v-model="group.direction"
            label="name"
          ></v-select>
        </div>

        <div class="md:md:col-span-2">
          <label for="teachers" class="px-2 block">Ustozlar:</label>
          <v-select
            :selectOnTab="true"
            :options="useGeneralStore().teachers"
            placeholder="Uztozlar"
            id="teachers"
            v-model="group.teachers"
            :closeOnSelect="false"
            label="full_name"
            :multiple="true"
          ></v-select>
        </div>
        <div>
          <label for="mainTeacher" class="px-2">Asosiy Ustoz:</label>
          <v-select
            :selectOnTab="true"
            id="mainTeacher"
            :options="group?.teachers?.length ? group.teachers : []"
            placeholder="Asosiy Ustoz"
            v-model="group.mainTeacher"
            :closeOnSelect="false"
            label="full_name"
          ></v-select>
        </div>
        <div>
          <label for="room" class="px-2 block">Xona:</label>
          <input
            type="text"
            id="room"
            v-model="group.room"
            placeholder="Xonani kiriting"
            class="rounded-[7px] w-full py-1 px-2 outline-none border border-activeColor bg-transparent"
          />
        </div>

        <div>
          <label for="weekDays" class="px-2">Dars bo'ladigan kunlar:</label>
          <v-select
            :multiple="true"
            :selectOnTab="true"
            id="weekDays"
            :options="useGeneralStore().weekDays"
            placeholder="Dars bo'ladigan kunlar"
            v-model="group.weekDays"
            :closeOnSelect="false"
            label="name"
          ></v-select>
        </div>
        <div>
          <label for="start_time" class="px-2 block">Boshlanish vaqti:</label>
          <input
            type="Time"
            id="start_time"
            v-model="group.startTime"
            placeholder="Guruh nomini kiriting"
            class="rounded-[7px] w-full py-1 px-2 outline-none border border-activeColor bg-transparent"
          />
        </div>
        <div class="md:md:col-span-2">
          <label for="students" class="px-2">O'quvchilar:</label>
          <v-select
            :multiple="true"
            :selectOnTab="true"
            id="students"
            :options="useGeneralStore().students"
            placeholder="O'quvchilar"
            v-model="group.students"
            :closeOnSelect="false"
            label="full_name"
          ></v-select>
        </div>
        <div class="grid md:col-span-2 items-center mt-3 grid-cols-2 py-1">
          <button
            type="button"
            @click="() => (useGeneralStore().showModal = true)"
            class="bg-green rounded-l-md px-2 hover:opacity-100 opacity-80 py-1 md:text-[24px] font-medium"
          >
            💾 Saqlash</button
          ><button
            type="button"
            @click="
              () => {
                group = { ...useGroupStore().groups[ind] };
                useGeneralStore().showGroupAdd = false;
              }
            "
            class="bg-red rounded-r-md px-2 hover:opacity-100 opacity-80 py-1 md:text-[24px] font-medium"
          >
            ❌ Bekor qilish
          </button>
        </div>
      </form>
    </div>

    <!-- Grurh nomi, teacher, weekDays, startTime, students, direction -->
  </div>
  <Modalka
    v-if="useGeneralStore().showGroupAdd == true"
    :text="messageModal"
    @funcYes="saveFunction"
    @funcNo="
      () => {
        useGeneralStore().showModal = false;
      }
    "
  />
</template>
<script setup>
let group = ref({});
import vSelect from "vue-select";
let ind = ref(null);
let messageModal = ref("Yangi guruh ochmoqchimisz?");
function saveFunction() {
  if (useRoute().params.id) {
    useGroupStore().groups[ind.value] = { ...group.value };
  } else {
    useGroupStore().groups.push({
      id: useGroupStore().groups.length + 1,
      ...group.value,
    });
    group = {};
  }
  useGeneralStore().showGroupAdd = false;
  useGeneralStore().showModal = false;
}
function hiddenWindow(e) {
  if (e.target.id == "windowWrapper") {
    useGeneralStore().showGroupAdd = false;
    group.value = { ...useGroupStore().groups[ind.value] };
  }
}
onMounted(() => {
  if (useRoute()?.params?.id) {
    ind.value = useGroupStore().groups.findIndex(
      (el) => el.id == useRoute().params.id
    );
    group.value = { ...useGroupStore().groups[ind.value] };
    messageModal.value = "Guruh ma'lumotlarini o'zgartirmoqchimisiz?";
  }
});
</script>
<style scoped>
.vs__dropdown-menu {
  height: 300px !important;
}
</style>
