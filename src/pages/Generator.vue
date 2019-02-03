<template>
  <v-container grid-list-lg>
    <v-layout row
              wrap>
      <v-flex class="xs12 md8 offset-md2 xl6 offset-xl3">
        <v-card>
          <v-toolbar color="primary"
                     dark>
            <v-toolbar-title>
              Fill in the information
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-subheader>Personal info</v-subheader>
              <v-text-field name="name"
                            label="Chinese Name"
                            v-model="person.name"></v-text-field>
              <v-text-field name="enName"
                            label="English Name"
                            v-model="person.enName"></v-text-field>
              <v-text-field name="department"
                            label="Job Title"
                            v-model="person.department"></v-text-field>
              <v-text-field name="phone"
                            label="Phone"
                            v-model="person.phone"></v-text-field>
              <v-layout row
                        wrap>
                <v-flex xs7>
                  <v-text-field :name="person.socialType"
                                :label="person.socialType"
                                v-model="person.social"></v-text-field>
                </v-flex>
                <v-flex xs5>
                  <v-btn color="primary"
                         @click="handleSocialTypeChange">{{BTN_LABEL[person.socialType]}}</v-btn>
                </v-flex>
              </v-layout>
              <v-text-field name="email"
                            label="Email"
                            v-model="person.email"></v-text-field>
              <v-subheader>Mata info</v-subheader>
              <v-text-field name="logo"
                            label="Logo Url"
                            v-model="person.logoUrl"></v-text-field>
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
import { genHtml, copyToClip } from "../utils";
const BTN_LABEL = {
  Skype: "Use WeChat",
  WeChat: "Use Skype"
};
export default {
  name: "Generator",
  data() {
    this.BTN_LABEL = BTN_LABEL;
    return {
      person: {
        name: "",
        enName: "",
        department: "",
        phone: "",
        social: "",
        socialType: "Skype",
        email: ""
      }
    };
  },
  computed: {
    html() {
      return this.genHtml(this.person);
    }
  },
  methods: {
    genHtml,
    hanldeClick() {
      copyToClip(this.html);
    },
    handleSocialTypeChange() {
      this.person.socialType =
        this.person.socialType === "Skype" ? "WeChat" : "Skype";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn {
  text-transform: none;
}
</style>


