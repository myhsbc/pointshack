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
            <v-card color="cyan darken-2" class="white--text">
              <v-card-text primary-title>
                <div class="headline hidden-sm-and-down">OPEN ACCOUNTS & GET POINTS</div>
                <div class="title hidden-md-and-up">OPEN ACCOUNTS & GET POINTS</div>
                <div>There are many ways to earn bonus points. With Open Banking you can open accounts with ease.</div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-layout justify-center>
            <v-flex xs12>
              <div class="text-xs-center">
                <v-btn outline color="indigo" @click="getAccount">
                  <v-icon left>add</v-icon>
                    consent to link accounts
                </v-btn>
              </div>     
            </v-flex>
          </v-layout>
    
          <transition name="fade">
            <v-flex xs12 v-if="show">
            <v-card>
              <v-card-text primary-title>
                <div class="title">Refinance my mortgage</div>
                <div class="red--text">60,000 bonus points</div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-dialog v-model="homeLoan" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <v-btn flat color="purple" slot="activator">Get pre-approval</v-btn>
                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-btn icon dark @click.native="homeLoan = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Home Loan Pre-approval</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark flat @click.native="homeLoan = false">Save</v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                      <v-subheader>Tell us about yourself</v-subheader>
                      <v-layout justify-center>
                        <v-flex xs12>
                          <div class="text-xs-center">
                            <v-btn outline color="indigo">
                              <v-icon left>edit</v-icon>
                                Pre-fill information
                            </v-btn>
                          </div>     
                        </v-flex>
                      </v-layout>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                      <v-subheader>Form</v-subheader>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Notifications</v-list-tile-title>
                          <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Sound</v-list-tile-title>
                          <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                          <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-dialog>                
              </v-card-actions>
            </v-card>
          </v-flex>
          </transition>

          <transition name="fade">
            <v-flex xs12 v-if="show">
            <v-card>
              <v-card-text primary-title>
                <div class="title">Credit card balance transfer</div>
                <div class="red--text">10,000 bonus points</div>
              </v-card-text> 
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-dialog v-model="creditCard" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <v-btn flat color="purple" slot="activator">Apply now</v-btn>
                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-btn icon dark @click.native="creditCard = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Credit card application</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark flat @click.native="creditCard = false">Save</v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                      <v-subheader>Tell us about yourself</v-subheader>
                      <v-layout justify-center>
                        <v-flex xs12>
                          <div class="text-xs-center">
                            <v-btn outline color="indigo">
                              <v-icon left>edit</v-icon>
                                Pre-fill information
                            </v-btn>
                          </div>     
                        </v-flex>
                      </v-layout>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                      <v-subheader>Form</v-subheader>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Notifications</v-list-tile-title>
                          <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Sound</v-list-tile-title>
                          <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                          <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-dialog> 
              </v-card-actions>
            </v-card>
          </v-flex>
          </transition>

          <transition name="fade">
            <v-flex xs12 v-if="show">
            <v-card>
              <v-card-text primary-title>
                <div class="title">Open Everyday Global Account</div>
                <div class="red--text">500 bonus points</div>
              </v-card-text> 
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-btn flat color="purple">Apply now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          </transition>

          <transition name="fade">
            <v-flex xs12 v-if="show">
            <v-card>
              <v-card-text primary-title>
                <div class="title">Transfer my salary credit</div>
                <div class="red--text">500 bonus points</div>
              </v-card-text> 
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-btn flat color="purple">Apply now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          </transition>

          <v-flex xs12>
            <v-card>
              <v-card-text primary-title>
                <div class="title">Apply a Home Loan</div>
                <div class="red--text">60,000 bonus points</div>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-dialog v-model="homeLoan" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <v-btn flat color="purple" slot="activator">Get pre-approval</v-btn>
                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-btn icon dark @click.native="homeLoan = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Home Loan Pre-approval</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark flat @click.native="homeLoan = false">Save</v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                      <v-subheader>Tell us about yourself</v-subheader>
                      <v-layout justify-center>
                        <v-flex xs12>
                          <div class="text-xs-center">
                            <v-btn outline color="indigo" @click="getKYC">
                              <v-icon left>edit</v-icon>
                                Pre-fill information
                            </v-btn>
                          </div>     
                        </v-flex>
                      </v-layout>
                    </v-list>
                    <v-divider></v-divider>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text class="title">Form</v-text>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Question 1" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Question 2" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Question 3"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Question 4" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Question 5" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  chips
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
                  </v-card>
                </v-dialog>                
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card>
              <v-card-text primary-title>
                <div class="title">Upgrade my HSBC Low Rate to HSBC Platinum card</div>
                <div class="red--text">Free with no annual fee for the first year</div>
              </v-card-text> 
              <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>More info</v-btn>
                <v-btn flat color="purple">Upgrade now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                info: null,
                show: false,
                showKYC: false,
                homeLoan: false,
                creditCard: false,
                items: [
                {
                    action: 'home',
                    title: 'Home Loans',
                    active: false,
                    items: [
                    { title: 'Apply HSBC Home Loan' },
                    { title: 'Refinance CBA Loan' }, 
                    { title: 'Refinance ANZ Loan' }
                    ]
                },
                {
                    action: 'credit_card',
                    title: 'Credit Cards',
                    items: [
                    { title: 'Apply HSBC Platinum card' },
                    { title: 'Balance transfer CBA Platinum card' },
                    { title: 'Balance transfer ANZ low rate card' },
                    { title: 'Balance transfer Coles Mastercard' }
                    ]
                },
                {
                    action: 'account_balance_wallet',
                    title: 'Transaction Accounts',
                    items: [
                    { title: 'Apply HSBC Everyday Global Account' },
                    { title: 'Apply HSBC Term Deposits' }
                    ]
                },
                {
                    action: 'transform',
                    title: 'Transfer Salary Account',
                    items: [
                    { title: 'Account switch' }
                    ]
                },
                {
                    action: 'group',
                    title: 'Additional Cardholder',
                    items: [
                    { title: 'Apply for additional cardholder' }
                    ]
                },
                {
                    action: 'share',
                    title: 'Refer a Friend',
                    items: [
                    { title: 'Refer' }
                    ]
                }
                ]
            }
        },
        methods: {
          getAccount: function () {
            axios
              .get('https://raw.githubusercontent.com/myhsbc/pointshack/master/static/data/account.json')
              .then(response => (this.info = response));
            this.show = true;
          },
          getKYC: function () {
            axios
              .get('https://raw.githubusercontent.com/myhsbc/pointshack/master/static/data/kyc.json')
              .then(response => (this.info = response));
            this.showKYC = true;
          }          
        }
    }
</script>

<style scoped>

</style>
