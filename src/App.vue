<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.alpha-mos.co.jp/sensory/images/sensostat/img_sensostat_profile.jpg"
          transition="scale-transition"
          width="40"
        />
        <h3>Sensostat</h3>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
