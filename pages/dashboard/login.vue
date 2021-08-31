<template>
  <v-container class="pa-0" fill-height fluid>
    <v-row no-gutters>
      <v-col class="d-none d-sm-block" cols="6" sm="5" md="6">
        <v-img
          contain
          height="100vh"
          width="100%"
          class="my-auto"
          src="/img/3d-flame-288.png"
        />
      </v-col>
      <v-col cols="12" sm="7" md="6" align-self="center">
        <v-container>
          <v-card class="elevation-0" tile>
            <v-card-title> Welcome </v-card-title>
            <v-card-subtitle> Please login to continue... </v-card-subtitle>
            <v-card-text>
              <VeeOb v-slot="{ passes, invalid }">
                <v-form @submit.prevent="passes(onSubmit)">
                  <v-row>
                    <v-col cols="12" class="pb-0">
                      <ui-label required>E-mail or Phone</ui-label>
                      <VeePro
                        v-slot="{ errors }"
                        name="email or phone"
                        rules="required"
                      >
                        <v-text-field
                          v-model="form.email"
                          dense
                          outlined
                          autofocus
                          type="text"
                          placeholder="mona@gmail.com"
                          :error-messages="errors"
                        />
                      </VeePro>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <ui-label required>Password</ui-label>
                      <VeePro
                        v-slot="{ errors }"
                        name="password"
                        rules="required"
                      >
                        <v-text-field
                          v-model="form.password"
                          dense
                          outlined
                          type="text"
                          placeholder="*****"
                          :error-messages="errors"
                        />
                      </VeePro>
                    </v-col>
                    <v-col cols="12" class="pt-0 text-right">
                      <NuxtLink to="/dashboard/forgot-password">
                        Forgot Password ?
                      </NuxtLink>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        block
                        type="submit"
                        color="primary"
                        :disabled="invalid"
                      >
                        Login
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </VeeOb>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
