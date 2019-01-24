<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneProg === false"/>
      <div class="playerOne__progression" v-if="oneProg">
        <playerOneAvatar />
      
        <div class="playerOne__progress">
          <h1 class="progression__title">Uldir</h1>
          <ul class="playerOne__uldir">
            <li v-for="(boss, index) in oneProg.progression.raids[40].bosses" :key="index">
              <a target="_blank" :href="'//www.wowhead.com/npc=' + boss.id">
                <img :src="Uldir[index].bossImage">
              </a>
              <h2>{{boss.name}}</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: boss.lfrKills > 0}">{{boss.lfrKills}}</span></li>
                <li>N: <span :class="{killed: boss.normalKills > 0}">{{boss.normalKills}}</span></li>
                <li>H: <span :class="{killed: boss.heroicKills > 0}">{{boss.heroicKills}}</span></li>
                <li>M: <span :class="{killed: boss.mythicKills > 0}">{{boss.mythicKills}}</span></li>
              </ul>
            </li>
          </ul>
          <h1 class="progression__title">Battle of Dazar'alor</h1>
          <ul class="playerOne__dazar">
            <li v-for="(boss, index) in oneProg.progression.raids[41].bosses" :key="index">
              <a target="_blank" :href="'//www.wowhead.com/npc=' + boss.id">
                <img :src="DazarAlor[index].bossImage">
              </a>
              <h2>{{boss.name}}</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: boss.lfrKills > 0}">{{boss.lfrKills}}</span></li>
                <li>N: <span :class="{killed: boss.normalKills > 0}">{{boss.normalKills}}</span></li>
                <li>H: <span :class="{killed: boss.heroicKills > 0}">{{boss.heroicKills}}</span></li>
                <li>M: <span :class="{killed: boss.mythicKills > 0}">{{boss.mythicKills}}</span></li>
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
            <li v-for="(boss, index) in twoProg.progression.raids[40].bosses" :key="index">
              <a target="_blank" :href="'//www.wowhead.com/npc=' + boss.id">
                <img :src="Uldir[index].bossImage">
              </a>
              <h2>{{boss.name}}</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: boss.lfrKills > 0}">{{boss.lfrKills}}</span></li>
                <li>N: <span :class="{killed: boss.normalKills > 0}">{{boss.normalKills}}</span></li>
                <li>H: <span :class="{killed: boss.heroicKills > 0}">{{boss.heroicKills}}</span></li>
                <li>M: <span :class="{killed: boss.mythicKills > 0}">{{boss.mythicKills}}</span></li>
              </ul>
            </li>
          </ul>
          <h1 class="progression__title">Battle of Dazar'alor</h1>
          <ul class="playerTwo__dazar">
            <li v-for="(boss, index) in twoProg.progression.raids[41].bosses" :key="index">
              <a target="_blank" :href="'//www.wowhead.com/npc=' + boss.id">
                <img :src="DazarAlor[index].bossImage">
              </a>
              <h2>{{boss.name}}</h2>
              <ul class="total-kills__list">
                <li>LFR: <span :class="{killed: boss.lfrKills > 0}">{{boss.lfrKills}}</span></li>
                <li>N: <span :class="{killed: boss.normalKills > 0}">{{boss.normalKills}}</span></li>
                <li>H: <span :class="{killed: boss.heroicKills > 0}">{{boss.heroicKills}}</span></li>
                <li>M: <span :class="{killed: boss.mythicKills > 0}">{{boss.mythicKills}}</span></li>
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
  padding: 0 3.4rem
  border-right: 1px solid $blue-4

  .playerOne__dazar
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    +progress__background("../../assets/raids/bfa/bod/Dazar'alor.jpg")

  .playerOne__uldir
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    +progress__background('../../assets/raids/bfa/uldir/Nazmir.jpg')

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
  padding: 0 3.4rem
  border-left: 1px solid $blue-4

  .playerTwo__dazar
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    +progress__background("../../assets/raids/bfa/bod/Dazar'alor.jpg")

  .playerTwo__uldir
    padding-top: 3%
    border-radius: 8px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    +progress__background('../../assets/raids/bfa/uldir/Nazmir.jpg')

  h2
    color: $orange-5
    margin: 1% 0 5% 0
    padding: 0
    font-size: 1.1rem

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
  letter-spacing: 1px

.killed
  color: $orange-5
</style>
