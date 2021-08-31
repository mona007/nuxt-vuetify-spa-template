<template>
  <v-container class="align-self-start">
    <v-row>
      <v-col cols="12">
        <div class="headline">{{ $t('title.createNewGenre') }}</div>
        <v-breadcrumbs
          class="pa-0"
          :items="$store.state.breadcrumb.genre.create"
        />
      </v-col>
      <v-col cols="12">
        <VeeObserver v-slot="{ invalid, passes }">
          <v-form @submit.prevent="passes(onSubmit)">
            <v-card>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <ui-label required>Title</ui-label>
                    <VeeProvider
                      v-slot="{ errors }"
                      name="title"
                      rules="required|max:255"
                    >
                      <v-text-field
                        v-model="title"
                        dense
                        outlined
                        autofocus
                        counter="255"
                        :error-messages="errors"
                        :placeholder="placeholder.title"
                      />
                    </VeeProvider>
                  </v-col>
                  <v-col cols="12">
                    <ui-label optional>Description</ui-label>
                    <v-textarea
                      v-model="description"
                      dense
                      outlined
                      :placeholder="placeholder.description"
                    />
                  </v-col>
                  <v-col class="text-right" cols="12">
                    <v-btn type="submit" color="primary" :disabled="invalid">
                      <v-icon left small>mdi-content-save</v-icon>
                      {{ $t('button.createGenre') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-form>
        </VeeObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      placeholder: {
        title: 'Technology',
        description:
          'Technology is the set of knowledge, skills, experience and techniques through which humans change, transform and use our environment in order to create tools, machines, products and services that meet our needs and desires.',
      },
      title: '',
      description: '',
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
