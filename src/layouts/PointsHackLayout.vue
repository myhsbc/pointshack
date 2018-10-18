<template>
    <v-app>
        <v-toolbar
                app
                flat
                dense
                color="red"
                dark
                v-if="showMenu"
        >
                <v-toolbar-title>
                    <img src="@/assets/logo.svg" class="mt-2" width="210" alt="">
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat to="deals">
                        <v-icon left size="15">local_offer</v-icon>
                        Deals
                    </v-btn>
                    <v-btn flat to="accounts">
                        <v-icon left size="15">credit_card</v-icon>
                        Accounts
                    </v-btn>
                    <v-btn flat to="friends">
                        <v-icon left size="15">group</v-icon>
                        Friends
                    </v-btn>
                    <v-btn flat to="dashboard">
                        <v-icon left size="15">dashboard</v-icon>
                        Dashboard
                    </v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <v-btn icon @click.stop="rightDrawer = !rightDrawer" slot="activator">
                        <v-badge color="primary" overlap>
                            <span slot="badge">2</span>
                            <v-icon>notifications</v-icon>
                        </v-badge>
                    </v-btn>
                    <span>2 unread notifications</span>
                </v-tooltip>

                <v-menu
                        bottom
                        left
                >
                    <v-btn icon slot="activator">
                        <v-avatar class="white" size="32">
                            <v-icon color="red">person</v-icon>
                        </v-avatar>
                    </v-btn>
                    <v-list class="pa-0">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <v-avatar class="primary" size="48px">
                                    <v-icon dark>person</v-icon>
                                </v-avatar>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>Sam Chuang</v-list-tile-title>
                                <v-list-tile-sub-title>Primary cardholder</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>

                        <v-list-tile key="profile" @click="">
                            <v-list-tile-action>
                                <v-icon>public</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Go to Online Banking</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>

                        <v-list-tile key="settings" @click="">
                            <v-list-tile-action>
                                <v-icon>settings</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Preferences</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>

                        <v-list-tile key="lock_open" to='/'>
                            <v-list-tile-action>
                                <v-icon>lock_open</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Logout</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                
        </v-toolbar>
        <v-content>
            <router-view />
        </v-content>
                
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
                app
        >
            <v-toolbar flat prominent dark class="red">
                <v-toolbar-title>Notifications</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list subheader dense>
                <v-subheader>All notifications</v-subheader>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>card_giftcard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        500 bonus points added to your rewards
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>data_usage</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Additional cardholder application approved
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

  <v-card flat class="hidden-md-and-up">
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="white"
      v-if="showMenu"
    >
      <v-btn
        color="primary"
        flat
        value="deals"
        to="deals"
      >
        <span>Deals</span>
        <v-icon>loyalty</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="accounts"
        to="accounts"
      >
        <span>Accounts</span>
        <v-icon>credit_card</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="friends"
        to="friends"
      >
        <span>Friends</span>
        <v-icon>group</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="dashboard"
        to="dashboard"
      >
        <span>Dashboard</span>
        <v-icon>dashboard</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>      

    </v-app>
</template>

<script>
    export default {
        name: 'PointsHackLayout',

        data () {
            return {
                right: true,
                rightDrawer: false,
                bottomNav: 'offers'
            }
        },
        computed: {
            showMenu() {
                return this.$route.name !== 'signin' && this.$route.name !== 'home';
            }
        }
    }
</script>

