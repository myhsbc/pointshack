<template>
  <v-layout row class="mb-5">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <div class="mt-3">
            <span class="headline">My Rewards Items</span>
          </div>
        </v-card-title>
        <v-layout ml-3>
          <v-flex xs12>
              <v-btn dark color="purple">
                  View catalogue
              </v-btn>
            </div>     
          </v-flex>
        </v-layout>
  <v-layout row>
    <v-flex xs12 mx-4>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="reward in rewards" :key="i" xs4>
              <img :src="reward.img" class="image" alt="lorem" width="100%" height="80%">
              <h5>{{ reward.point }}</h5>
            </v-flex>
          </v-layout>
        </v-container>

    </v-flex>
  </v-layout>


        <!-- <v-layout justify-center>
          <v-avatar class="text-xs-center"
            size="300"
            color="grey"
          >
          <img src="/assets/hawaii.jpg" alt="">
          </v-avatar>
        </v-layout> -->
            <v-container class="pa-4" fluid grid-list-md="grid-list-md">
                <v-layout wrap>
                    <v-flex xs12>
                        <h1 class="headline mb-1">Overview</h1>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-layout wrap>
                            <v-flex v-for="stat in stats" xs6>
                                <v-card class="text-xs-center" height="100%" dark :class="stat.color">
                                    <v-card-text>
                                        <div class="display-1 mb-2">{{ stat.number }}</div>{{ stat.label }}</v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md6>
                        <v-card height="100%" dark>
                            <v-card-title class="grey darken-4">Recent points collected</v-card-title>
                            <v-data-table class="mt-1" :items="points" hide-headers="hide-headers" hide-actions="hide-actions"><template slot="items" slot-scope="props"><td>{{ props.item.title }}</td><td>{{ props.item.point }}</td></template></v-data-table>
                        </v-card>
                    </v-flex>                    
                </v-layout>
            </v-container>     
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        data () {
            return {
              rewards: [
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/gpofyeftcpv2zhwbwvxu.jpg', point: '233,615 points' },
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/nkldqsdufhfdzg7jue5s.jpg', point: '118,535 points' },
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/wmqru13uafek0uu00jse.jpg', point: '41,455 points' },
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/hzic2m8dornjylrgs1tn.jpg', point: '55,700 points' },
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/e4mhbduxektb2b8v8nqc.jpg', point: '41,055 points' },
                { img: 'https://res.cloudinary.com/pangea-prod/image/upload/b_white,c_pad,h_300,w_300/production/vbqjz0nj47qtbi9nuxsr.jpg', point: 'Redeem Now' }
              ],
              stats: [
                {
                  number: '40,233',
                  label: 'Total reward points',
                  color: 'orange'
                },
                {
                  number: '9,767',
                  label: 'Points required to your goal',
                  color: 'teal'
                },
                {
                  number: '5,042',
                  label: 'Total points collected this week',
                  color: 'blue'
                },
                {
                  number: '10,021',
                  label: 'Bonus points collected this week',
                  color: 'purple'
                },
              ],
              points: [
                  {
                    id: 0,
                    point: '300',
                    title: 'Bing Lee Samgsung tablet'
                  },
                  {
                    id: 1,
                    point: '570',
                    title: 'Ikea wardrobe purchase'
                  },
                  {
                    id: 2,
                    point: '1250',
                    title: 'Hotel booking'
                  },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
