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
                <v-btn outline color="indigo">
                  <v-icon left>add</v-icon>
                    consent to link accounts
                </v-btn>
              </div>     
            </v-flex>
          </v-layout>

    
          <v-flex xs12>
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
                      <v-list-tile avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>Content filtering</v-list-tile-title>
                          <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>Password</v-list-tile-title>
                          <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                      <v-subheader>General</v-subheader>
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

          <v-flex xs12>
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
                      <v-list-tile avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>Content filtering</v-list-tile-title>
                          <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>Password</v-list-tile-title>
                          <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                      <v-subheader>General</v-subheader>
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

          <v-flex xs12>
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

          <v-flex xs12>
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






















      <!-- <div class="text-xs-right">
        <v-btn outline color="indigo" class="ma-4">
          <v-icon left>add</v-icon>
            accounts
        </v-btn>
      </div>         
      <v-card>
        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click.stop.prevent="dialog = true" 
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>

        <v-dialog
          v-model="dialog"
          absolute
          max-width="400"
          persistent
        >
          <v-card>
            <v-card-title class="headline grey lighten-3">More information</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                flat
                @click="agreement = false, dialog = false"
              >
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                color="red"
                @click="agreement = true, dialog = false"
              >
                Enquire
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>         -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        data () {
            return {
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
        }
    }
</script>

<style scoped>

</style>
