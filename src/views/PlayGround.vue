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
  <OutputField
    class="output"
    :fieldA="fieldA"
    :fieldB="fieldB"
  />
</template>

<script>
import InputField from '@/components/InputField.vue';
import OutputField from '@/components/OutputField.vue';

export default {
  name: 'PlayGround',
  components: {
    InputField,
    OutputField
  },
  data: function () {
    return {
      fieldA: '',
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
  font-family: monospace;
}
</style>
