<template lang="">
  <div>
    <ul class="grid grid-cols-4 gap-4 p-5">
      <GroupCard
        v-for="i in 20"
        :data="{
          id: i,
          name: i + '-Guruh',
          teacher: 'Ashirboyev Abbos',
          studentCount: 12,
          createdGroup: new Date(),
          startTime: '12:00',
          weekDays: 'Du,Se,CH',
          room: i + '-xona',
          direction: 'Matematika',
        }"
      />
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
