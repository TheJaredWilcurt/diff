<template>
  <div class="input-field">
    <label :for="id">Input {{ id.toUpperCase() }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: [
    'update:modelValue'
  ]
};
</script>

<style>
.input-field {
  position: relative;
  display: flex;
  height: 100%;
  background: #F00;
  label {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    font-size: 0.7rem;
  }
}
</style>
