<template>
  <v-layout row class="mb-5">
    <v-flex xs12 sm6 offset-sm3>

      <v-container
        fluid
        grid-list-lg
        class="cards"
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-card-text primary-title>
                <div class="headline hidden-sm-and-down">SEND INVITES & SHARE POINTS</div>
                <div class="title hidden-md-and-up">SEND INVITES & SHARE POINTS</div>
                <div>Refer your friends and both of you will get bonus points when your friends open account. You can transfer points, or pool points together to redeem rewards.</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12>
            <div class="text-xs-center">

      <v-menu bottom offset-y>
              <v-btn outline color="indigo" slot="activator">
                <v-icon left>person_add</v-icon>
                  Invite friends
              </v-btn>
              <v-list>
                <v-list-tile v-for="(menu, i) in menu" :key="i" @click="getFriends">
                  <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
      </v-menu>


            </div>     
          </v-flex>
        </v-layout>
        <div v-if="showFriends == false">Click "Invite Friends" to show demo</div>
        
        <v-list v-for="item in items"
            :key="item.title"
            avatar v-if="showFriends">
          <v-list-tile>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-bottom-sheet v-model="sheet">
                <v-btn flat icon slot="activator">
                  <v-icon color="grey">expand_more</v-icon>
                </v-btn>

                <v-list>
                  <v-subheader>I want to</v-subheader>
                  <v-list-tile
                    v-for="tile in tiles"
                    :key="tile.title"
                    @click="sheet = false"
                  >
                    <v-list-tile-avatar>
                      <v-avatar size="32px" tile>
                        <img
                          :src="tile.img"
                          :alt="tile.title"
                        >
                      </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-bottom-sheet>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>

      <!-- <v-flex xs12>
        <v-expansion-panel popout>
          
          <v-expansion-panel-content
            v-for="(item, index) in items"
            :key="index"
          >
            <div slot="header">
              <v-avatar
                size="36px"
              >
                <img :src="item.avatar">
              </v-avatar>              
              &nbsp;&nbsp;&nbsp;{{ item.title }}
            </div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex> -->
      </v-container>

      <!-- <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-spacer></v-spacer>
              <v-list-tile-action>
                <v-list-tile-title>{{ item.point }}</v-list-tile-title>
              </v-list-tile-action>              
            </v-list-tile>

            
          </template>
        </v-list>
      </v-card> -->
    </v-flex>
  </v-layout>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
              info: null,
              showFriends: false,
              sheet: false,
              tiles: [
                { img: 'https://image.flaticon.com/icons/svg/1028/1028159.svg', title: 'Transfer my points' },
                { img: 'https://image.flaticon.com/icons/svg/305/305106.svg', title: 'Pool reward points' },
                { img: 'https://image.flaticon.com/icons/svg/1152/1152352.svg', title: 'Send a rewards gift' },
                { img: 'https://image.flaticon.com/icons/svg/204/204283.svg', title: 'Send reward deals' },
                { img: 'https://image.flaticon.com/icons/svg/1138/1138565.svg', title: 'Recommend accounts' }
              ],
              items: [
                  { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Sam Chuang' },
                  { avatar: 'https://randomuser.me/api/portraits/men/26.jpg', title: 'Enzo Lai' },
                  { avatar: 'https://randomuser.me/api/portraits/women/2.jpg', title: 'Cecilia Tan' },
                  { avatar: 'https://randomuser.me/api/portraits/men/7.jpg', title: 'Krupesh Doshi' },
                  { avatar: 'https://randomuser.me/api/portraits/men/4.jpg', title: 'Mark Mei' },
                  { avatar: 'https://randomuser.me/api/portraits/women/8.jpg', title: 'Vicki Yang' }
              ],
              menu: [
                {
                  title: 'Facebook'
                },
                {
                  title: 'LinkedIn'
                },
                {
                  title: 'Twitter'
                },
                {
                  title: 'Google+'
                }
              ],
            }
        },
        methods: {
          getFriends: function () {
            axios
              .get('https://graph.facebook.com/me/friends?fields=id.name')
              .then(response => (this.info = response));
            this.showFriends = true;
          }         
        }
    }
</script>

<style scoped>

</style>
