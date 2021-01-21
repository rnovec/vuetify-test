<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app clipped-right flat height="72">
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          append-icon="mdi-magnify"
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>

      <v-sheet color="grey lighten-5" height="128" width="100%"></v-sheet>

      <v-list class="pl-14" shaped>
        <v-list-item v-for="n in 10" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      {{ result }}
      <vue-qrcode value="https://www.1stg.me" />

      <v-dialog v-model="dialog" width="500">
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template> -->

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>

          <StreamBarcodeReader
            v-if="dialog"
            @decode="getResult"
            @loaded="onLoaded"
          ></StreamBarcodeReader>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        append-icon="mdi-qrcode"
        @click:append="dialog = true"
        rounded
        solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'
import VueQrcode from 'vue-qrcode'

export default {
  data: () => ({ drawer: null, dialog: false, mediaStream: null, result: '' }),
  components: {
    StreamBarcodeReader,
    VueQrcode
  },
  methods: {
    getResult (val) {
      if (val) {
        this.result = val
        this.dialog = false
      }
    },
    onLoaded () {
      console.log('loaded')
    }
  },
  mounted () {
    // navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
    //   this.mediaStream = mediaStream
    // })
  }
}
</script>
