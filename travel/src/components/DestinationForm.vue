<template>
  <v-card flat>
    <v-tabs v-model="tab" color="indigo-lighten-1" align-tabs="center">
      <v-tab
          v-for="(tabItem, index) in state.tabs"
          :key="index"
          :value="tabItem.value">
        <v-icon class="mr-2">{{ tabItem.icon }}</v-icon>{{ tabItem.label }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
          v-for="(tabItem, index) in state.tabs"
          :key="index"
          :value="tabItem.value">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" sm="2">
              <div class="text-subtitle-1 text-medium-emphasis">Your Destination</div>
              <v-select
                  density="compact"
                  placeholder="Направление"
                  :items="state.destinations"
                  variant="outlined"
                  v-model="state.form.destination"
                  :rules="[v => !!v || 'Required field']"
              >
              </v-select>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="text-subtitle-1 text-medium-emphasis">Check in</div>
              <v-text-field density="compact" placeholder="Date" type="date" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="text-subtitle-1 text-medium-emphasis">Check out</div>
              <v-text-field density="compact" placeholder="Date" type="date" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="text-subtitle-1 text-medium-emphasis">Child</div>
              <v-select
                  density="compact"
                  placeholder="Child"
                  :items="state.childrenOptions"
                  variant="outlined"
                  :rules="[v => !!v || 'Required field']"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="text-subtitle-1 text-medium-emphasis">Adult</div>
              <v-select
                density="compact"
                placeholder="Adult"
                :items="state.adultsOptions"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn
                class="text-none mt-5"
                color="indigo-lighten-1"
                size="x-large"
                variant="flat"
                rounded="0"
                elevation="12"
              >Book Now</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import state from "@/store";
export default {
  name: "DestinationForm.vue",
  data() {
    return {
      tab: 1,
      state
    };
  },

}
</script>

<style scoped lang="sass">

</style>
