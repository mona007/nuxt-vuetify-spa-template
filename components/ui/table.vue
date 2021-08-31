<template>
  <v-data-table class="elevation-1" v-bind="$attrs" v-on="$listeners">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope" v-bind="$attrs">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  //   props: {
  // loading: { type: Boolean, default: false },
  // total: { type: Number, default: 0 },
  // metadata: {
  //   type: Object,
  //   default() {
  //     return { total: 10 };
  //   },
  // },
  //   },
  data() {
    return {
      footerProps: {
        itemsPerPageOptions: [10, 30, 50, 100],
      },
      options: {
        itemsPerPage: 10,
      },
    };
  },
  watch: {
    options: {
      handler({ page, itemsPerPage, sortBy, sortDesc }) {
        let order = '';
        if (sortBy.length) {
          /**
           * id = order by id ASC
           * -id = order by id DESC
           * */
          order = sortDesc[0] ? `-${sortBy[0]}` : sortBy[0];
        }

        /** find offset */
        const offset = (page - 1) * itemsPerPage || 0;

        /** update metadata */
        this.$emit('update:metadata', {
          limit: itemsPerPage || 10,
          offset,
          order,
          total: this.total,
        });

        /** emit on change event */
        this.$emit('change', {
          limit: itemsPerPage || 10,
          offset,
          order,
          total: this.total,
        });
      },
      deep: true,
    },
  },
  mounted() {},
};
</script>
