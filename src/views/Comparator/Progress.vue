<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneProg === false"/>
      <div class="playerOne__progression" v-if="oneProg">
        <playerOneAvatar />
      
        <div class="playerOne__progress">
          <h1 class="progression__title">Uldir</h1>
          <ul class="playerOne__uldir">
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[0].id" > 
                <img :src="Uldir[0].bossImage">
              </a>
              <h2>Taloc</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[0].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[0].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[0].normalKills > 0}">{{oneProg.progression.raids[40].bosses[0].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[0].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[0].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[0].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[0].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[1].id" > 
                <img :src="Uldir[1].bossImage">
              </a>
              <h2>MOTHER</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[1].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[1].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[1].normalKills > 0}">{{oneProg.progression.raids[40].bosses[1].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[1].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[1].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[1].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[1].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[2].id" > 
                <img :src="Uldir[2].bossImage">
              </a>
              <h2>Fetid Devourer</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[2].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[2].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[2].normalKills > 0}">{{oneProg.progression.raids[40].bosses[2].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[2].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[2].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[2].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[2].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[3].id" > 
                <img :src="Uldir[3].bossImage">
              </a>
              <h2>Zek'Voz</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[3].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[3].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[3].normalKills > 0}">{{oneProg.progression.raids[40].bosses[3].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[3].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[3].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[3].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[3].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[4].id" > 
                <img :src="Uldir[4].bossImage">
              </a>
              <h2>Vectis</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[4].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[4].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[4].normalKills > 0}">{{oneProg.progression.raids[40].bosses[4].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[4].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[4].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[4].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[4].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[5].id" > 
                <img :src="Uldir[5].bossImage">
              </a>
              <h2>Zul, Reborn</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[5].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[5].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[5].normalKills > 0}">{{oneProg.progression.raids[40].bosses[5].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[5].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[5].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[5].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[5].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[6].id" > 
                <img :src="Uldir[6].bossImage">
              </a>
              <h2>Mythrax</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[6].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[6].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[6].normalKills > 0}">{{oneProg.progression.raids[40].bosses[6].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[6].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[6].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[6].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[6].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[7].id" > 
                <img :src="Uldir[7].bossImage">
              </a>
              <h2>G'huun</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: oneProg.progression.raids[40].bosses[7].lfrKills > 0}">{{oneProg.progression.raids[40].bosses[7].lfrKills}}</span></li>
                <li>N: <span :class="{killed: oneProg.progression.raids[40].bosses[7].normalKills > 0}">{{oneProg.progression.raids[40].bosses[7].normalKills}}</span></li>
                <li>H: <span :class="{killed: oneProg.progression.raids[40].bosses[7].heroicKills > 0}">{{oneProg.progression.raids[40].bosses[7].heroicKills}}</span></li>
                <li>M: <span :class="{killed: oneProg.progression.raids[40].bosses[7].mythicKills > 0}">{{oneProg.progression.raids[40].bosses[7].mythicKills}}</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoProg === false"/>
      <div class="playerTwo__progression" v-if="twoProg">
        <playerTwoAvatar />

        <div class="playerTwo__progress">
          <h1 class="progression__title">Uldir</h1>
          <ul class="playerTwo__uldir">
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[0].id" > 
                <img :src="Uldir[0].bossImage">
              </a>
              <h2>Taloc</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[0].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[0].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[0].normalKills > 0}">{{twoProg.progression.raids[40].bosses[0].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[0].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[0].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[0].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[0].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[1].id" > 
                <img :src="Uldir[1].bossImage">
              </a>
              <h2>MOTHER</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[1].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[1].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[1].normalKills > 0}">{{twoProg.progression.raids[40].bosses[1].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[1].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[1].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[1].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[1].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[2].id" > 
                <img :src="Uldir[2].bossImage">
              </a>
              <h2>Fetid Devourer</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[2].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[2].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[2].normalKills > 0}">{{twoProg.progression.raids[40].bosses[2].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[2].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[2].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[2].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[2].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[3].id" > 
                <img :src="Uldir[3].bossImage">
              </a>
              <h2>Zek'Voz</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[3].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[3].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[3].normalKills > 0}">{{twoProg.progression.raids[40].bosses[3].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[3].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[3].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[3].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[3].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[4].id" > 
                <img :src="Uldir[4].bossImage">
              </a>
              <h2>Vectis</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[4].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[4].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[4].normalKills > 0}">{{twoProg.progression.raids[40].bosses[4].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[4].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[4].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[4].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[4].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[5].id" > 
                <img :src="Uldir[5].bossImage">
              </a>
              <h2>Zul, Reborn</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[5].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[5].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[5].normalKills > 0}">{{twoProg.progression.raids[40].bosses[5].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[5].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[5].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[5].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[5].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[6].id" > 
                <img :src="Uldir[6].bossImage">
              </a>
              <h2>Mythrax</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[6].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[6].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[6].normalKills > 0}">{{twoProg.progression.raids[40].bosses[6].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[6].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[6].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[6].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[6].mythicKills}}</span></li>
              </ul>
            </li>
            <li>
              <a target="_blank" :href="'//www.wowhead.com/npc=' + oneProg.progression.raids[40].bosses[7].id" > 
                <img :src="Uldir[7].bossImage">
              </a>
              <h2>G'huun</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: twoProg.progression.raids[40].bosses[7].lfrKills > 0}">{{twoProg.progression.raids[40].bosses[7].lfrKills}}</span></li>
                <li>N: <span :class="{killed: twoProg.progression.raids[40].bosses[7].normalKills > 0}">{{twoProg.progression.raids[40].bosses[7].normalKills}}</span></li>
                <li>H: <span :class="{killed: twoProg.progression.raids[40].bosses[7].heroicKills > 0}">{{twoProg.progression.raids[40].bosses[7].heroicKills}}</span></li>
                <li>M: <span :class="{killed: twoProg.progression.raids[40].bosses[7].mythicKills > 0}">{{twoProg.progression.raids[40].bosses[7].mythicKills}}</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

// Uldir Bosses
import Nazmir from '@/assets/raids/bfa/uldir/Nazmir.jpg';
import Taloc from '@/assets/raids/bfa/uldir/01_Taloc.png';
import MOTHER from '@/assets/raids/bfa/uldir/02_MOTHER.png';
import Fetid from '@/assets/raids/bfa/uldir/03_Fetid.png';
import ZekVoz from '@/assets/raids/bfa/uldir/04_ZekVoz.png';
import Vectis from '@/assets/raids/bfa/uldir/05_Vectis.png';
import Zul from '@/assets/raids/bfa/uldir/06_Zul.png';
import Mythrax from '@/assets/raids/bfa/uldir/07_Mythrax.png';
import Ghuun from '@/assets/raids/bfa/uldir/08_G\'huun.png';

// Battle of Dazar'alor 
import Dazar from '@/assets/raids/bfa/bod/Dazar\'alor.jpg';
import Champions from '@/assets/raids/bfa/bod/01_Champions.png';
import Grong from '@/assets/raids/bfa/bod/02_Grong.png';
import Jadefire from '@/assets/raids/bfa/bod/03_Jadefire.png';
import Opulance from '@/assets/raids/bfa/bod/04_Opulance.png';
import Conclave from '@/assets/raids/bfa/bod/05_Conclave.png';
import Rastakhan from '@/assets/raids/bfa/bod/06_Rastakhan.png';
import Mekkatorque from '@/assets/raids/bfa/bod/07_Mekkatorque.png';
import Blockade from '@/assets/raids/bfa/bod/08_Blockade.png';
import Jaina from '@/assets/raids/bfa/bod/09_Jaina.png';

export default {
  data() {
    return {
      Uldir: [ 
        { Boss: "Taloc", bossImage: Taloc, },
        { Boss: "MOTHER", bossImage: MOTHER},
        { Boss: "Fetid", bossImage: Fetid},
        { Boss: "Zek'Voz", bossImage: ZekVoz},
        { Boss: "Vectis", bossImage: Vectis},
        { Boss: "Zul", bossImage: Zul},
        { Boss: "Mythrax", bossImage: Mythrax},
        { Boss: "G'huun", bossImage: Ghuun},
        { Background: Nazmir}
      ],

      DazarAlor: [
        { Boss: "Champions of the Light", bossImage: Champions},
        { Boss: "Grong", bossImage: Grong},
        { Boss: "Jadefire Masters", bossImage: Jadefire},
        { Boss: "Opulance", bossImage: Opulance},
        { Boss: "Conclave", bossImage: Conclave},
        { Boss: "Rastakhan", bossImage: Rastakhan},
        { Boss: "Mekkatorque", bossImage: Mekkatorque},
        { Boss: "Blockade", bossImage: Blockade},
        { Boss: "Jaina", bossImage: Jaina},
        { Background: Dazar}
      ]
    }
  },

  computed: {
    oneProg() {
      return this.$store.state.playerOneProg
    },

    twoProg() {
      return this.$store.state.playerTwoProg
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader,
  }
}
</script>

<style lang="sass" scoped>
.playerOne__progress
  color: $white-0

  .playerOne__uldir
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    background: url('../../assets/raids/bfa/uldir/Nazmir.jpg')
    background-repeat: no-repeat
    background-color: darken($blue-5, 8%)
    background-blend-mode: soft-light
    background-position: left

    h2
      color: $orange-5
      margin: 1% 0 5% 0
      padding: 0
      font-size: 1.1rem

    li
      text-align: center
      margin-bottom: 10%
      font-weight: 600

.playerTwo__progress
  color: $white-0

  .playerTwo__uldir
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    background: url('../../assets/raids/bfa/uldir/Nazmir.jpg')
    background-repeat: no-repeat
    background-color: darken($blue-5, 8%)
    background-blend-mode: soft-light
    background-position: left

    h2
      color: $orange-5
      margin: 1% 0 5% 0
      padding: 0
      font-size: 1.1rem

    img
      padding: 0
      margin: 0

    li
      text-align: center
      margin-bottom: 10%
      font-weight: 600

.total-kills__list
  padding: 0
  margin: 0 auto
  width: 50%
  display: grid
  grid-template-columns: 1fr 1fr

.progression__title
  text-align: center
  letter-spacing: 3px

.killed
  color: $orange-5
</style>
