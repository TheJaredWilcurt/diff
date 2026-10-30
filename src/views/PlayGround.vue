<template>
  <div class="input">
    <InputField
      v-model="fieldA"
      id="a"
    />
    <InputField
      v-model="fieldB"
      id="b"
    />
  </div>
  <div class="output">
    <div>
      {{ fieldA }}
      {{ fieldB }}
    </div>
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
  name: 'PlayGround',
  components: {
    InputField
  },
  data: function () {
    return {
      fieldA: 'asdf',
      fieldB: ''
    };
  }
};
</script>

<style>
.input,
.output {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}
.output div {
  background: #F003;
}
</style>
