<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="headline">Account</div>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" class="text-center">
                <v-row>
                  <v-col cols="12">
                    <v-avatar size="150">
                      <v-img
                        src="https://lh3.googleusercontent.com/utKdO7NLrtvWoepWUJnaJTaZJ2X2uepFF-WWgPH_p4aHVDKiATo9LYxHdLGzgiVPiE1awFipZhCmAvBQsZyk66WzgVeK-6uw9cDKlClDSF3ngAg=w0-h0"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      outlined
                      color="primary"
                      @click="triggerChangePasswordDialog"
                    >
                      Change Password
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="8">
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-card-title class="px-0 text--primary">
                      Profile
                    </v-card-title>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>Firstname</ui-label>
                    <v-text-field v-model="firstName" dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>Lastname</ui-label>
                    <v-text-field v-model="lastName" dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>Gender</ui-label>
                    <v-text-field v-model="gender" dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>Birthday</ui-label>
                    <v-text-field v-model="birthday" dense outlined />
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    <v-card-title class="px-0 text--primary">
                      Contact Info
                    </v-card-title>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>E-mail</ui-label>
                    <v-text-field v-model="email" dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <ui-label>Phone</ui-label>
                    <v-text-field v-model="phone" dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <ui-label>Address</ui-label>
                    <v-textarea dense outlined />
                  </v-col>

                  <v-col cols="12" class="pb-0">
                    <v-card-title class="px-0 text--primary">
                      About
                    </v-card-title>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <ui-label>Bio</ui-label>
                    <v-text-field dense outlined />
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <ui-label>Description</ui-label>
                    <v-textarea dense outlined />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="text-right">
                <v-btn color="primary">Save</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="50%" persistent>
      <v-card>
        <v-card-title class="d-block pr-4">
          Change Password
          <v-btn icon class="float-right" @click="triggerChangePasswordDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <ui-label required>Current Password</ui-label>
              <v-text-field
                v-model="currentPassword"
                dense
                outlined
                autofocus
                autocomplete="new-password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="
                  showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                "
                @click:append="showPassword = !showPassword"
              />
            </v-col>
            <v-col cols="12">
              <ui-label required>New Password</ui-label>
              <v-text-field
                v-model="newPassword"
                dense
                outlined
                autocomplete="new-password"
                :type="showPassword ? 'text' : 'password'"
              />
            </v-col>
            <v-col cols="12">
              <ui-label required>Confirm New Password</ui-label>
              <v-text-field
                v-model="confirmPassword"
                dense
                outlined
                autocomplete="new-password"
                :type="showPassword ? 'text' : 'password'"
              />
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn
                outlined
                color="primary"
                @click="triggerChangePasswordDialog"
              >
                Cancel
              </v-btn>
              <v-btn color="primary">Change Password</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      showPassword: false,
      firstName: 'Mo',
      lastName: 'Na',
      gender: 'M',
      birthday: '1996-02-14',
      email: 'mona.devbot@gmail.com',
      phone: '070 321 656',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    triggerChangePasswordDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
