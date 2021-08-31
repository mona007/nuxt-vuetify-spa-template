<template>
  <v-container class="pa-0" fill-height fluid>
    <v-row v-if="step === 1" no-gutters>
      <v-col class="d-none d-sm-block" cols="6" sm="5" md="6">
        <v-img
          contain
          height="500px"
          width="100%"
          class="my-auto"
          :src="images[0]"
        />
      </v-col>
      <v-col cols="12" sm="7" md="6" align-self="center">
        <v-card class="elevation-0" tile>
          <v-card-title> Forgot Password </v-card-title>
          <v-card-subtitle>
            Please enter email or phone to recover your password
          </v-card-subtitle>
          <v-card-text>
            <VeeOb v-slot="{ passes, invalid }">
              <v-form @submit.prevent="passes(submitEmail)">
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
                  <v-col cols="12" class="pt-0 text-right">
                    <NuxtLink to="/dashboard/login"> Back to Login </NuxtLink>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="primary"
                      type="submit"
                      :disabled="invalid"
                    >
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </VeeOb>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else-if="step === 2" no-gutters>
      <v-col class="d-none d-sm-block" cols="6" sm="5" md="6">
        <v-img
          contain
          height="500px"
          width="100%"
          class="my-auto"
          :src="images[1]"
        />
      </v-col>
      <v-col cols="12" sm="7" md="6" align-self="center">
        <v-card v-if="step === 2" class="elevation-0" tile>
          <v-card-title> Security Code </v-card-title>
          <v-card-subtitle>
            Please submit security code to continue
          </v-card-subtitle>
          <v-card-text>
            <VeeOb v-slot="{ passes, invalid }">
              <v-form @submit.prevent="passes(submitOTP)">
                <v-row>
                  <v-col cols="12" class="pb-0">
                    <ui-label required>Security Code</ui-label>
                    <VeePro
                      v-slot="{ errors }"
                      name="security code"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.otp"
                        dense
                        outlined
                        autofocus
                        type="text"
                        placeholder="000000"
                        :error-messages="errors"
                      />
                    </VeePro>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="primary"
                      type="submit"
                      :disabled="invalid"
                    >
                      Submit Code
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </VeeOb>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else no-gutters>
      <v-col class="d-none d-sm-block" cols="6" sm="5" md="6">
        <v-img
          contain
          height="500px"
          width="100%"
          class="my-auto"
          :src="images[2]"
        />
      </v-col>
      <v-col cols="12" sm="7" md="6" align-self="center">
        <v-card v-if="step === 3" class="elevation-0" tile>
          <v-card-title> New Password </v-card-title>
          <v-card-subtitle> Please enter your new password </v-card-subtitle>
          <v-card-text>
            <VeeOb v-slot="{ passes, invalid }">
              <v-form @submit.prevent="passes(submitNewPassword)">
                <v-row no-gutters>
                  <v-col cols="12">
                    <ui-label required>New Password</ui-label>
                    <VeePro
                      v-slot="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.password"
                        dense
                        outlined
                        autofocus
                        autocomplete="new-password"
                        placeholder="******"
                        :type="showPassword ? 'text' : 'password'"
                        :error-messages="errors"
                        :append-icon="
                          showPassword
                            ? 'mdi-eye-outline'
                            : 'mdi-eye-off-outline'
                        "
                        @click:append="showPassword = !showPassword"
                      />
                    </VeePro>
                  </v-col>
                  <v-col cols="12">
                    <ui-label required>Confirm Password</ui-label>
                    <VeePro
                      v-slot="{ errors }"
                      name="confirm password"
                      rules="required|confirmed:password"
                    >
                      <v-text-field
                        v-model="form.confirmPassword"
                        dense
                        outlined
                        autocomplete="new-password"
                        placeholder="******"
                        :type="showPassword ? 'text' : 'password'"
                        :error-messages="errors"
                      />
                    </VeePro>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="primary"
                      type="submit"
                      :disabled="invalid"
                    >
                      Update Password
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </VeeOb>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      step: 1,
      images: [
        '/img/business-3d-answer.png',
        '/img/business-3d-with-phone-man-close-up-6.png',
        '/img/business-3d-thumb-up-man-2.png',
      ],
      form: {
        email: '',
        otp: '',
        password: '',
        confirmPassword: '',
      },
      showPassword: false,
    };
  },
  methods: {
    onSubmit() {},
    submitEmail() {
      this.step = 2;
    },
    submitOTP() {
      this.step = 3;
    },
    submitNewPassword() {
      this.step = 1;
    },
  },
};
</script>
