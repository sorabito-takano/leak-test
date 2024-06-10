<template>
  <v-app>
    <v-container>
      <v-card
        width="400"
        title="This is a title"
        subtitle="This is a subtitle"
        text="This is content"
      ></v-card>

      <div class="mt-4 text-subtitle-2">With slots</div>

      <v-card width="400">
        <template v-slot:title> This is a title </template>

        <template v-slot:subtitle> This is a subtitle </template>

        <template v-slot:text> This is content </template>
      </v-card>

      <div class="mt-4 text-subtitle-2">With markup</div>

      <v-card width="400">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-btn @click="goBack">go back</v-btn>
        </v-card-text>
      </v-card>
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Open Dialog"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const dialog = false;

    const goBack = () => {
      // Add your logic to navigate to the generic page here
      router.push("/");
    };

    return {
      goBack,
      dialog,
    };
  },
};
</script>
