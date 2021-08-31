<template>
  <label class="subtitle-2 text--primary">
    <slot></slot>
    <span v-if="required" class="red--text">*</span>
    <span v-if="optional" class="caption text--secondary">(Optional)</span>
  </label>
</template>

<script>
export default {
  props: {
    required: { type: Boolean, default: false },
    optional: { type: Boolean, default: false },
  },
};
</script>
