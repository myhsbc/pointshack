<template>
  <div class="wrapper">
    <v-card id="map" flat height="100vh"></v-card>

    <v-flex xs10 offset-xs1 sm6 d-flex mt-5>
      <v-select
        :items="items"
        label="What are you looking for?"
        solo
      ></v-select>
    </v-flex>
 

      <v-container
        fluid
        grid-list-lg
        class="cards"
      >
        <v-layout row wrap>
          <v-layout text-xs-center>
          <v-flex xs12 sm6 offset-sm3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-text primary-title>
                <div class="headline">YOUR EXCLUSIVE OFFERS</div>
                <div>You can earn bonus points on these offers especially picked for you.</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="white" class="purple--text" @click="getTransactions">Personalise offers</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>           
            </v-card>
          </v-flex>
          </v-layout>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">EARN 5X</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2017/04/binglee.png"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any white goods in store at Bing Lee by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">15000 BONUS</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="data:image/png;base64,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"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any Apple computers in store at JB Hi Fi by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">EARN 5X</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2017/04/binglee.png"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any white goods in store at Bing Lee by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">15000 BONUS</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="data:image/png;base64,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"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any Apple computers in store at JB Hi Fi by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">EARN 5X</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2017/04/binglee.png"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any white goods in store at Bing Lee by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">15000 BONUS</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="data:image/png;base64,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"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any Apple computers in store at JB Hi Fi by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">EARN 5X</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2017/04/binglee.png"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any white goods in store at Bing Lee by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">15000 BONUS</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="data:image/png;base64,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"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any Apple computers in store at JB Hi Fi by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">EARN 5X</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="https://i0.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2017/04/binglee.png"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any white goods in store at Bing Lee by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-5">
              <v-card-text primary-title>
                <div class="headline"><span class="red--text">15000 BONUS</span> POINTS</div>
              </v-card-text>              
              <v-layout>
                <v-flex xs3 pl-3>
                  <img
                    src="data:image/png;base64,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"
                    width="80px"
                    contain
                  >
                </v-flex>
                <v-flex xs9 pr-3>
                  <v-card-content>
                    <div>
                      <div>When you purchase any Apple computers in store at JB Hi Fi by <strong>31 October 2018</strong>.</div>
                    </div>
                  </v-card-content>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>                                        
        </v-layout>
      </v-container>




    <!-- <v-container class="offers">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3
            v-for="coupon in coupons"
            :key="coupon.id"
        >
          <v-card>
            <v-card-text class="grey lighten-2" primary-title>
              <span class="grey--text">Promotion - You may be interested.</span><br>
              <span class="headline">{{coupon.name}}</span>
              <span class="body-1 ml-3">{{coupon.address}}</span>
            </v-card-text>

            <v-card-title>
              <div>
                <span>{{coupon.product}}</span><br>
                <span>{{coupon.price}}</span><br>
                <span class="grey--text">You can collect</span><br>
                <span class="headline red--text">{{coupon.points}} points</span>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-actions class="py-3">
              <v-spacer></v-spacer>
              <v-tooltip right>
                <v-btn fab dark small color="blue-grey" slot="activator">
                  <v-icon dark>clear</v-icon>
                </v-btn>
                <span>Delete</span>
              </v-tooltip>

              <v-spacer></v-spacer>

              <v-tooltip right>
                <v-btn fab dark small color="red" slot="activator">
                  <v-icon dark>bookmark</v-icon>
                </v-btn>
                <span>Save</span>
              </v-tooltip>
              <v-spacer></v-spacer>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->


    <!-- <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12
                    v-for="item in items"
                    :key="item.id"
                    px-1
                    pb-2
                >
                    <v-card-title class="overflow-hidden py-0 offers">
                        <v-layout row align-content-center class="horiz-scroll">
                            <v-flex xs12 sm6 offset-sm3>
                            <v-card>
                                <div class="pos-relative">
                                    <span class="grey--text">Promotion - You may be interested.</span><br>
                                    <h3 class="headline mb-0">{{item.name}} <span class="body-1">{{item.address}}</span></h3>
                                    <p class="subheading">{{item.product}} <span>{{item.price}}</span></p>
                                    <span class="body-1">You can collect</span><br>
                                    <span class="headline red--text">{{item.points}} reward points</span><br>
                                <v-card-actions>
                                    <v-btn fab dark color="grey lighten-4"><v-icon color="black">close</v-icon></v-btn>
                                    <v-btn fab dark color="grey lighten-4"><v-icon color="red">favorite</v-icon></v-btn>
                                </v-card-actions>                        
                                </div>                                    
                            </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-title>                  
                </v-flex>
            </v-layout>
        </v-container> -->

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        info: null,
        items: ['Electronics', 'Furnitures', 'Entertainments', 'Travel'], 
        coupons: [{
            id: 1,
            name: "Bing Lee",
            address: "746/748 George St, Haymarket NSW 2000",
            product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
            points: "1600"
          },
          // {
          //   id: 2,
          //   name: "Bing Lee 2",
          //   address: "746/748 George St, Haymarket NSW 2000",
          //   product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
          //   points: "1600"
          // },
          // {
          //   id: 3,
          //   name: "Bing Lee 3",
          //   address: "746/748 George St, Haymarket NSW 2000",
          //   product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
          //   points: "1600"
          // },
          // {
          //   id: 4,
          //   name: "Bing Lee",
          //   address: "746/748 George St, Haymarket NSW 2000",
          //   product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
          //   points: "1600"
          // },
          // {
          //   id: 5,
          //   name: "Bing Lee 2",
          //   address: "746/748 George St, Haymarket NSW 2000",
          //   product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
          //   points: "1600"
          // },
          // {
          //   id: 6,
          //   name: "Bing Lee 3",
          //   address: "746/748 George St, Haymarket NSW 2000",
          //   product: "iPhone XS - 64GB - Gold - Apple - MT9G2X/A",
          //   points: "1600"
          // }
        ]
      }
    },
    mounted() {
      const lat = new google.maps.LatLng(-33.8638426, 151.1999748);
      const map = new google.maps.Map(document.getElementById('map'), {
        center: lat,
        scrollwheel: true,
        zoom: 14,
      });
    },
    methods: {
      getTransactions: function () {
        axios
          .get('https://raw.githubusercontent.com/myhsbc/pointshack/master/static/data/transactions.json')
          .then(response => (this.info = response))
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    position: relative;
    overflow: hidden;
  }

  #map {
    position: absolute;
    width: 100vw;
    margin-top: -48px;
    padding: 80px 16px;
  }

  .cards {
    margin-top: 200px;
  }

  @media only screen and (max-width: 960px) {
    .offers {
      margin-top: 120px;
    }
  }

  @media only screen and (min-width: 601px) {
    .offers {
      margin-top: 220px;
    }
  }

</style>
