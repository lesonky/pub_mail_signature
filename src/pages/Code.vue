<template>
  <v-container grid-list-lg>
    <v-layout row
              wrap>
      <v-flex class="xs12 md8 offset-md2 xl6 offset-xl3">
        <v-card>
          <v-toolbar color="primary"
                     dark>
            <v-toolbar-title>
              Paste Code Here
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                placeholder="code"
                name="code"
                height="500px"
                v-model="html"
                textarea
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success"
                   block
                   @click="hanldeClick">Copy to the clipboard</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="xs12 md8 offset-md2 xl6 offset-xl3">
        <v-card>
          <v-toolbar color="primary"
                     dark>
            <v-toolbar-title>
              Preview
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="perview"
                 v-html="html"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { copyToClip } from "../utils";
export default {
  name: "Code",
  data(){
    return {
      html:''
    }
  },
  methods:{
    hanldeClick(){
      copyToClip(this.html)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
