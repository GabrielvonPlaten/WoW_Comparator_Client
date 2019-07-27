<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneProg === false" />
      <div class="playerOne__progression" v-if="oneProg">
        <playerOneAvatar />

        <div class="playerOne__raids">
          <div :class="{'hideRaid': hideRaidBlock === 0}" class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="Uldir[8].Background" />
                <h2 class="raid-name">Uldir</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in oneProg.progression.raids[40].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="Uldir[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="DazarAlor[9].Background" />
                <h2 class="raid-name">Battle of Dazar'alor</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in oneProg.progression.raids[41].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="DazarAlor[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="CrucibleOfStorms[2].Background" />
                <h2 class="raid-name">Crucible of Storms</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in oneProg.progression.raids[42].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="CrucibleOfStorms[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="AzsharasEternalPalace[8].Background" />
                <h2 class="raid-name">Azshara's Eternal Place</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in oneProg.progression.raids[43].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="AzsharasEternalPalace[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Player Two -->
    <div class="compViews__playerTwo">
      <Loader v-if="twoProg === false" />
      <div class="playerTwo__progression" v-if="twoProg">
        <playerTwoAvatar />

        <div class="playerTwo__raids">
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="Uldir[8].Background" />
                <h2 class="raid-name">Uldir</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in twoProg.progression.raids[40].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="Uldir[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="DazarAlor[9].Background" />
                <h2 class="raid-name">Battle of Dazar'alor</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in twoProg.progression.raids[41].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="DazarAlor[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="CrucibleOfStorms[2].Background" />
                <h2 class="raid-name">Crucible of Storms</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in twoProg.progression.raids[42].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="CrucibleOfStorms[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="raid_block">
            <div class="raid_card">
              <div class="image-container">
                <img :src="AzsharasEternalPalace[8].Background" />
                <h2 class="raid-name">Azshara's Eternal Place</h2>
              </div>
              <table class="table">
                <tr class="card_overhead_text">
                  <th>Bosses</th>
                  <th>LFR</th>
                  <th>Normal</th>
                  <th>Heroic</th>
                  <th>Mythic</th>
                </tr>
                <tr v-for="(boss, index) in twoProg.progression.raids[43].bosses" :key="index">
                  <td>
                    <a :href="`//wowhead.com/npc=${boss.id}`">
                      <img :src="AzsharasEternalPalace[index].bossImage" />
                    </a>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.lfrKills > 0, highKill: boss.lfrKills > 5, insaneKills: boss.lfrKills > 10, getalife: boss.lfrKills > 20}"
                    >{{boss.lfrKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.normalKills > 0, highKill: boss.normalKills > 5, insaneKills: boss.normalKills > 10, getalife: boss.normalKills > 20}"
                    >{{boss.normalKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.heroicKills > 0, highKill: boss.heroicKills > 5, insaneKills: boss.heroicKills > 10, getalife: boss.heroicKills > 20}"
                    >{{boss.heroicKills}}x</span>
                  </td>
                  <td>
                    <span
                      :class="{killed: boss.mythicKills > 0, highKill: boss.mythicKills > 5, insaneKills: boss.mythicKills > 10, getalife: boss.mythicKills > 20}"
                    >{{boss.mythicKills}}x</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/Vuex/store";
import playerOneAvatar from "@/components/OneAvatar.vue";
import playerTwoAvatar from "@/components/TwoAvatar.vue";
import Loader from "@/components/Loader.vue";

// Uldir Bosses
import Nazmir from "@/assets/raids/bfa/uldir/Nazmir.png";
import Taloc from "@/assets/raids/bfa/uldir/01_Taloc.png";
import MOTHER from "@/assets/raids/bfa/uldir/02_MOTHER.png";
import Fetid from "@/assets/raids/bfa/uldir/03_Fetid.png";
import ZekVoz from "@/assets/raids/bfa/uldir/04_ZekVoz.png";
import Vectis from "@/assets/raids/bfa/uldir/05_Vectis.png";
import Zul from "@/assets/raids/bfa/uldir/06_Zul.png";
import Mythrax from "@/assets/raids/bfa/uldir/07_Mythrax.png";
import Ghuun from "@/assets/raids/bfa/uldir/08_G'huun.png";

// Battle of Dazar'alor
import Dazar from "@/assets/raids/bfa/bod/BoDA.png";
import Champions from "@/assets/raids/bfa/bod/01_Champions.png";
import Grong from "@/assets/raids/bfa/bod/02_Grong.png";
import Jadefire from "@/assets/raids/bfa/bod/03_Jadefire.png";
import Opulance from "@/assets/raids/bfa/bod/04_Opulance.png";
import Conclave from "@/assets/raids/bfa/bod/05_Conclave.png";
import Rastakhan from "@/assets/raids/bfa/bod/06_Rastakhan.png";
import Mekkatorque from "@/assets/raids/bfa/bod/07_Mekkatorque.png";
import Blockade from "@/assets/raids/bfa/bod/08_Blockade.png";
import Jaina from "@/assets/raids/bfa/bod/09_Jaina.png";

import Crucible from "@/assets/raids/bfa/cos/Crucible_of_Storms.png";
import Cabal from "@/assets/raids/bfa/cos/01_Cabal.png";
import Uunat from "@/assets/raids/bfa/cos/02_Uunat.png";

import Palace from "@/assets/raids/bfa/aep/aepBG.png";
import Sivara from "@/assets/raids/bfa/aep/01_sivara.png";
import Monstrosity from "@/assets/raids/bfa/aep/02_monstrosity.png";
import Rage from "@/assets/raids/bfa/aep/03_rage.png";
import Ashvane from "@/assets/raids/bfa/aep/04_ashvane.png";
import Orgozoa from "@/assets/raids/bfa/aep/05_orgozoa.png";
import Court from "@/assets/raids/bfa/aep/06_court.png";
import Zaqul from "@/assets/raids/bfa/aep/07_zaqul.png";
import Aszhara from "@/assets/raids/bfa/aep/08_azshara.png";

export default {
  data() {
    return {
      Uldir: [
        { Boss: "Taloc", bossImage: Taloc },
        { Boss: "MOTHER", bossImage: MOTHER },
        { Boss: "Fetid", bossImage: Fetid },
        { Boss: "Zek'Voz", bossImage: ZekVoz },
        { Boss: "Vectis", bossImage: Vectis },
        { Boss: "Zul", bossImage: Zul },
        { Boss: "Mythrax", bossImage: Mythrax },
        { Boss: "G'huun", bossImage: Ghuun },
        { Background: Nazmir }
      ],

      DazarAlor: [
        { Boss: "Champions of the Light", bossImage: Champions },
        { Boss: "Grong", bossImage: Grong },
        { Boss: "Jadefire Masters", bossImage: Jadefire },
        { Boss: "Opulance", bossImage: Opulance },
        { Boss: "Conclave", bossImage: Conclave },
        { Boss: "Rastakhan", bossImage: Rastakhan },
        { Boss: "Mekkatorque", bossImage: Mekkatorque },
        { Boss: "Blockade", bossImage: Blockade },
        { Boss: "Jaina", bossImage: Jaina },
        { Background: Dazar }
      ],

      CrucibleOfStorms: [
        { Boss: "The Restless Cabal", bossImage: Cabal },
        { Boss: "Uu'nat, Harbinger of the Void", bossImage: Uunat },
        { Background: Crucible }
      ],

      AzsharasEternalPalace: [
        { Boss: "Commander Sivara", bossImage: Sivara },
        { Boss: "Blackwater Behemoth", bossImage: Monstrosity },
        { Boss: "Radiance of Azshara", bossImage: Rage },
        { Boss: "Lady Ashvane", bossImage: Ashvane },
        { Boss: "Orgozoa", bossImage: Orgozoa },
        { Boss: "The Queen's Court", bossImage: Court },
        { Boss: "Za'qul", bossImage: Zaqul },
        { Boss: "Queen Azshara", bossImage: Aszhara },
        { Background: Palace }
      ],
      hideRaidBlock: null
    };
  },

  computed: {
    oneProg() {
      return store.state.playerOneProg;
    },

    twoProg() {
      return store.state.playerTwoProg;
    }
  },

  methods: {
    hideRaid(x) {
      if (this.hideRaidBlock === x) {
        this.hideRaidBlock = null;
      } else {
        this.hideRaidBlock = x;
      }
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader
  }
};
</script>

<style lang="sass" scoped>
.playerOne__progression
  color: $white-0
  padding: 0 1.4rem
  border-right: 1px solid $blue-4
  height: 100%

.playerTwo__progression
  color: $white-0
  padding: 0 1.4rem
  border-left: 1px solid $blue-4
  height: 100%

.playerOne__raids, .playerTwo__raids
  margin: 0 auto

span
  font-size: 1.3rem

.raid_block
  margin: 1rem 1rem
  overflow: hidden
  transition: all 0.3s
  border: 2px solid $post-border


.hideRaid
  height: 0px

.raid-name
  color: $orange-3
  text-shadow: $text-shadow
  font-weight: 200
  margin: 0 0 0.4rem 0
  font-size: 1.5rem
  position: relative
  bottom: 2.2rem
  left: 0.4rem

.raid_card
  border-radius: 0.2rem
  width: 100%
  background: $blue-9

  .image-container
    margin: -2px
    border:
      top: 2px solid $post-border
      right: 2px solid $post-border
      left: 2px solid $post-border

    img
      width: 100%
      height: 10rem
      border-bottom: 2px solid $post-border

.table
  color: $white-6
  text-align: center
  border-collapse: collapse
  margin: 0 auto
  width: 100%

  .card_overhead_text
    border-bottom: 2px solid $blue-5

  th
    padding: 0.3rem 0.8rem
    color: $white-0
    font-weight: 200

  img
    height: 50px

.killed
  color: #2cf900

.highKill
  color: #ffcd35

.insaneKills
  color: #ff7b24

.getalife
  color: #fd0000

// Grid Classes
.grid__active
  display: grid
  grid-template-columns: repeat(2, 1fr)
  
  span
    font-size: 1rem

.grid__active--button
  transition: 0.4s
  background: $orange-5

// Media Queries
@media only screen and (max-width: 1440px) 
  .playerOne__progression, .playerTwo__progression
    margin: 0
    padding: 0

  .raid_block
    margin: 1rem 0.3rem

  .raid_card
    .image-container
      img
        height: 6.5rem


  .table
    img
      height: 35px
</style>
