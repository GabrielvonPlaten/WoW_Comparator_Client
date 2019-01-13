<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneItems === false"/>
      <div class="playerOne__gear" v-if="oneItems">
        <playerOneAvatar />
        <ul>
          <p>iLvL: {{oneItems.items.averageItemLevel}}</p>
          <li v-if="oneItems.items.head">
            <span class="item-itemLevel">Head: {{oneItems.items.head.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.head.icon + '.jpg'">
            <a target="_blank" 
              :href="'//www.wowhead.com/item=' + oneItems.items.head.id + '&bonus=' + oneItems.items.head.bonusLists[0] + ':' + oneItems.items.head.bonusLists[1] + ':' + oneItems.items.head.bonusLists[2] + ':' + oneItems.items.head.bonusLists[3] + '&ilvl=' + oneItems.items.head.itemLevel"  
              :class="'gear-link q' + oneItems.items.head.quality">
              {{oneItems.items.head.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Head: None</span>
          </li>
          <li v-if="oneItems.items.neck">
            <span class="item-itemLevel">Neck: {{oneItems.items.neck.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.neck.icon + '.jpg'">
            <a target="_blank" 
              :href="'//www.wowhead.com/item=' + oneItems.items.neck.id + '&bonus=' + oneItems.items.neck.bonusLists[0] + ':' + oneItems.items.neck.bonusLists[1] + ':' + oneItems.items.neck.bonusLists[2] + ':' + oneItems.items.neck.bonusLists[3] + '&ilvl=' + oneItems.items.neck.itemLevel" :class="'gear-link q' + oneItems.items.neck.quality">
              {{oneItems.items.neck.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Neck: None</span>
          </li>
          <li v-if="oneItems.items.shoulder">
            <span class="item-itemLevel">Shoulders: {{oneItems.items.shoulder.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.shoulder.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.shoulder.id + '&bonus=' + oneItems.items.shoulder.bonusLists[0] + ':' + oneItems.items.shoulder.bonusLists[1] + ':' + oneItems.items.shoulder.bonusLists[2] + ':' + oneItems.items.shoulder.bonusLists[3] + '&ilvl=' + oneItems.items.shoulder.itemLevel" :class="'gear-link q' + oneItems.items.shoulder.quality">{{oneItems.items.shoulder.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Shoulders: None</span>
          </li>
          <li v-if="oneItems.items.back">
            <span class="item-itemLevel">Back: {{oneItems.items.back.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.back.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.back.id + '&bonus=' + oneItems.items.back.bonusLists[0] + ':' + oneItems.items.back.bonusLists[1] + ':' + oneItems.items.back.bonusLists[2] + ':' + oneItems.items.back.bonusLists[3] + '&ilvl=' + oneItems.items.back.itemLevel" :class="'gear-link q' + oneItems.items.back.quality">{{oneItems.items.back.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Back: None</span>
          </li>
          <li v-if="oneItems.items.chest">
            <span class="item-itemLevel">Chest: {{oneItems.items.chest.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.chest.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.chest.id + '&bonus=' + oneItems.items.chest.bonusLists[0] + ':' + oneItems.items.chest.bonusLists[1] + ':' + oneItems.items.chest.bonusLists[2] + ':' + oneItems.items.chest.bonusLists[3] + '&ilvl=' + oneItems.items.chest.itemLevel" :class="'gear-link q' + oneItems.items.chest.quality">{{oneItems.items.chest.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Chest: None</span>
          </li>
          <li v-if="oneItems.items.wrist">
            <span class="item-itemLevel">Wrist: {{oneItems.items.wrist.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.wrist.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.wrist.id + '&bonus=' + oneItems.items.wrist.bonusLists[0] + ':' + oneItems.items.wrist.bonusLists[1] + ':' + oneItems.items.wrist.bonusLists[2] + ':' + oneItems.items.wrist.bonusLists[3] + '&ilvl=' + oneItems.items.wrist.itemLevel" :class="'gear-link q' + oneItems.items.wrist.quality">{{oneItems.items.wrist.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Wrist: None</span>
          </li>
          <br>
          <li v-if="oneItems.items.hands">
            <span class="item-itemLevel">Hands: {{oneItems.items.hands.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.hands.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.hands.id + '&bonus=' + oneItems.items.hands.bonusLists[0] + ':' + oneItems.items.hands.bonusLists[1] + ':' + oneItems.items.hands.bonusLists[2] + ':' + oneItems.items.hands.bonusLists[3] + '&ilvl=' + oneItems.items.hands.itemLevel" :class="'gear-link q' + oneItems.items.hands.quality">{{oneItems.items.hands.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Hands: None</span>
          </li>
          <li v-if="oneItems.items.waist">
            <span class="item-itemLevel">Waist: {{oneItems.items.waist.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.waist.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.waist.id + '&bonus=' + oneItems.items.waist.bonusLists[0] + ':' + oneItems.items.waist.bonusLists[1] + ':' + oneItems.items.waist.bonusLists[2] + ':' + oneItems.items.waist.bonusLists[3] + '&ilvl=' + oneItems.items.waist.itemLevel" :class="'gear-link q' + oneItems.items.waist.quality">{{oneItems.items.waist.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Waist: None</span>
          </li>
          <li v-if="oneItems.items.legs">
            <span class="item-itemLevel">Legs: {{oneItems.items.legs.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.legs.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.legs.id + '&bonus=' + oneItems.items.legs.bonusLists[0] + ':' + oneItems.items.legs.bonusLists[1] + ':' + oneItems.items.legs.bonusLists[2] + ':' + oneItems.items.legs.bonusLists[3] + '&ilvl=' + oneItems.items.legs.itemLevel" :class="'gear-link q' + oneItems.items.legs.quality">{{oneItems.items.legs.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Legs: None</span>
          </li>
          <li v-if="oneItems.items.feet">
            <span class="item-itemLevel">Feet: {{oneItems.items.feet.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.feet.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.feet.id + '&bonus=' + oneItems.items.feet.bonusLists[0] + ':' + oneItems.items.feet.bonusLists[1] + ':' + oneItems.items.feet.bonusLists[2] + ':' + oneItems.items.feet.bonusLists[3] + '&ilvl=' + oneItems.items.feet.itemLevel" :class="'gear-link q' + oneItems.items.feet.quality">{{oneItems.items.feet.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Feet: None</span>
          </li>
          <li v-if="oneItems.items.finger1">
            <span class="item-itemLevel">Finger: {{oneItems.items.finger1.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.finger1.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.finger1.id + '&bonus=' + oneItems.items.finger1.bonusLists[0] + ':' + oneItems.items.finger1.bonusLists[1] + ':' + oneItems.items.finger1.bonusLists[2] + ':' + oneItems.items.finger1.bonusLists[3] + '&ilvl=' + oneItems.items.finger1.itemLevel" :class="'gear-link q' + oneItems.items.finger1.quality">{{oneItems.items.finger1.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Finger: None</span>
          </li>
          <li v-if="oneItems.items.finger2">
            <span class="item-itemLevel">Finger: {{oneItems.items.finger2.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.finger2.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.finger2.id + '&bonus=' + oneItems.items.finger2.bonusLists[0] + ':' + oneItems.items.finger2.bonusLists[1] + ':' + oneItems.items.finger2.bonusLists[2] + ':' + oneItems.items.finger2.bonusLists[3] + '&ilvl=' + oneItems.items.finger2.itemLevel" :class="'gear-link q' + oneItems.items.finger2.quality">{{oneItems.items.finger2.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Finger: None</span>
          </li>
          <li v-if="oneItems.items.trinket1">
            <span class="item-itemLevel">Trinket: {{oneItems.items.trinket1.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.trinket1.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.trinket1.id + '&bonus=' + oneItems.items.trinket1.bonusLists[0] + ':' + oneItems.items.trinket1.bonusLists[1] + ':' + oneItems.items.trinket1.bonusLists[2] + ':' + oneItems.items.trinket1.bonusLists[3] + '&ilvl=' + oneItems.items.trinket1.itemLevel" :class="'gear-link q' + oneItems.items.trinket1.quality">{{oneItems.items.trinket1.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Trinket: None</span>
          </li>
          <li v-if="oneItems.items.trinket2">
            <span class="item-itemLevel">Trinket: {{oneItems.items.trinket2.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.trinket2.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.trinket2.id + '&bonus=' + oneItems.items.trinket2.bonusLists[0] + ':' + oneItems.items.trinket2.bonusLists[1] + ':' + oneItems.items.trinket2.bonusLists[2] + ':' + oneItems.items.trinket2.bonusLists[3] + '&ilvl=' + oneItems.items.trinket2.itemLevel" :class="'gear-link q' + oneItems.items.trinket2.quality">{{oneItems.items.trinket2.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Trinket: None</span>
          </li>
          <br>
          <li v-if="oneItems.items.mainHand">
            <span class="item-itemLevel">Main-Hand: {{oneItems.items.mainHand.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.mainHand.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.mainHand.id + '&bonus=' + oneItems.items.mainHand.bonusLists[0] + ':' + oneItems.items.mainHand.bonusLists[1] + ':' + oneItems.items.mainHand.bonusLists[2] + ':' + oneItems.items.mainHand.bonusLists[3] + '&ilvl=' + oneItems.items.mainHand.itemLevel" :class="'gear-link q' + oneItems.items.mainHand.quality">{{oneItems.items.mainHand.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Main-Hand: None</span>
          </li>
          <li v-if="oneItems.items.offHand">
            <span class="item-itemLevel">Off-Hand: {{oneItems.items.offHand.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + oneItems.items.offHand.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + oneItems.items.offHand.id + '&bonus=' + oneItems.items.offHand.bonusLists[0] + ':' + oneItems.items.offHand.bonusLists[1] + ':' + oneItems.items.offHand.bonusLists[2] + ':' + oneItems.items.offHand.bonusLists[3] + '&ilvl=' + oneItems.items.offHand.itemLevel" :class="'gear-link q' + oneItems.items.offHand.quality">{{oneItems.items.offHand.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Off-Hand: None</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Player Two -->
    <div class="compViews__playerTwo">
      <Loader v-if="twoItems === false"/>
      <div class="playerTwo__gear" v-if="twoItems">
        <playerTwoAvatar />
        <ul>
          <p>iLvL: {{twoItems.items.averageItemLevel}}</p>
          <li v-if="twoItems.items.head">
            <span class="item-itemLevel">Head: {{twoItems.items.head.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.head.icon + '.jpg'">
            <a target="_blank" 
              :href="'//www.wowhead.com/item=' + twoItems.items.head.id + '&bonus=' + twoItems.items.head.bonusLists[0] + ':' + twoItems.items.head.bonusLists[1] + ':' + twoItems.items.head.bonusLists[2] + ':' + twoItems.items.head.bonusLists[3] + '&ilvl=' + twoItems.items.head.itemLevel"  
              :class="'gear-link q' + twoItems.items.head.quality">
              {{twoItems.items.head.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Head: None</span>
          </li>
          <li v-if="twoItems.items.neck">
            <span class="item-itemLevel">Neck: {{twoItems.items.neck.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.neck.icon + '.jpg'">
            <a target="_blank" 
              :href="'//www.wowhead.com/item=' + twoItems.items.neck.id + '&bonus=' + twoItems.items.neck.bonusLists[0] + ':' + twoItems.items.neck.bonusLists[1] + ':' + twoItems.items.neck.bonusLists[2] + ':' + twoItems.items.neck.bonusLists[3] + '&ilvl=' + twoItems.items.neck.itemLevel" :class="'gear-link q' + twoItems.items.neck.quality">
              {{twoItems.items.neck.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Neck: None</span>
          </li>
          <li v-if="twoItems.items.shoulder">
            <span class="item-itemLevel">Shoulders: {{twoItems.items.shoulder.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.shoulder.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.shoulder.id + '&bonus=' + twoItems.items.shoulder.bonusLists[0] + ':' + twoItems.items.shoulder.bonusLists[1] + ':' + twoItems.items.shoulder.bonusLists[2] + ':' + twoItems.items.shoulder.bonusLists[3] + '&ilvl=' + twoItems.items.shoulder.itemLevel" :class="'gear-link q' + twoItems.items.shoulder.quality">{{twoItems.items.shoulder.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Shoulders: None</span>
          </li>
          <li v-if="twoItems.items.back">
            <span class="item-itemLevel">Back: {{twoItems.items.back.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.back.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.back.id + '&bonus=' + twoItems.items.back.bonusLists[0] + ':' + twoItems.items.back.bonusLists[1] + ':' + twoItems.items.back.bonusLists[2] + ':' + twoItems.items.back.bonusLists[3] + '&ilvl=' + twoItems.items.back.itemLevel" :class="'gear-link q' + twoItems.items.back.quality">{{twoItems.items.back.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Back: None</span>
          </li>
          <li v-if="twoItems.items.chest">
            <span class="item-itemLevel">Chest: {{twoItems.items.chest.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.chest.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.chest.id + '&bonus=' + twoItems.items.chest.bonusLists[0] + ':' + twoItems.items.chest.bonusLists[1] + ':' + twoItems.items.chest.bonusLists[2] + ':' + twoItems.items.chest.bonusLists[3] + '&ilvl=' + twoItems.items.chest.itemLevel" :class="'gear-link q' + twoItems.items.chest.quality">{{twoItems.items.chest.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Chest: None</span>
          </li>
          <li v-if="twoItems.items.wrist">
            <span class="item-itemLevel">Wrist: {{twoItems.items.wrist.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.wrist.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.wrist.id + '&bonus=' + twoItems.items.wrist.bonusLists[0] + ':' + twoItems.items.wrist.bonusLists[1] + ':' + twoItems.items.wrist.bonusLists[2] + ':' + twoItems.items.wrist.bonusLists[3] + '&ilvl=' + twoItems.items.wrist.itemLevel" :class="'gear-link q' + twoItems.items.wrist.quality">{{twoItems.items.wrist.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Wrist: None</span>
          </li>
          <br>
          <li v-if="twoItems.items.hands">
            <span class="item-itemLevel">Hands: {{twoItems.items.hands.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.hands.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.hands.id + '&bonus=' + twoItems.items.hands.bonusLists[0] + ':' + twoItems.items.hands.bonusLists[1] + ':' + twoItems.items.hands.bonusLists[2] + ':' + twoItems.items.hands.bonusLists[3] + '&ilvl=' + twoItems.items.hands.itemLevel" :class="'gear-link q' + twoItems.items.hands.quality">{{twoItems.items.hands.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Hands: None</span>
          </li>
          <li v-if="twoItems.items.waist">
            <span class="item-itemLevel">Waist: {{twoItems.items.waist.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.waist.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.waist.id + '&bonus=' + twoItems.items.waist.bonusLists[0] + ':' + twoItems.items.waist.bonusLists[1] + ':' + twoItems.items.waist.bonusLists[2] + ':' + twoItems.items.waist.bonusLists[3] + '&ilvl=' + twoItems.items.waist.itemLevel" :class="'gear-link q' + twoItems.items.waist.quality">{{twoItems.items.waist.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Waist: None</span>
          </li>
          <li v-if="twoItems.items.legs">
            <span class="item-itemLevel">Legs: {{twoItems.items.legs.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.legs.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.legs.id + '&bonus=' + twoItems.items.legs.bonusLists[0] + ':' + twoItems.items.legs.bonusLists[1] + ':' + twoItems.items.legs.bonusLists[2] + ':' + twoItems.items.legs.bonusLists[3] + '&ilvl=' + twoItems.items.legs.itemLevel" :class="'gear-link q' + twoItems.items.legs.quality">{{twoItems.items.legs.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Legs: None</span>
          </li>
          <li v-if="twoItems.items.feet">
            <span class="item-itemLevel">Feet: {{twoItems.items.feet.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.feet.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.feet.id + '&bonus=' + twoItems.items.feet.bonusLists[0] + ':' + twoItems.items.feet.bonusLists[1] + ':' + twoItems.items.feet.bonusLists[2] + ':' + twoItems.items.feet.bonusLists[3] + '&ilvl=' + twoItems.items.feet.itemLevel" :class="'gear-link q' + twoItems.items.feet.quality">{{twoItems.items.feet.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Feet: None</span>
          </li>
          <li v-if="twoItems.items.finger1">
            <span class="item-itemLevel">Finger: {{twoItems.items.finger1.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.finger1.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.finger1.id + '&bonus=' + twoItems.items.finger1.bonusLists[0] + ':' + twoItems.items.finger1.bonusLists[1] + ':' + twoItems.items.finger1.bonusLists[2] + ':' + twoItems.items.finger1.bonusLists[3] + '&ilvl=' + twoItems.items.finger1.itemLevel" :class="'gear-link q' + twoItems.items.finger1.quality">{{twoItems.items.finger1.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Finger: None</span>
          </li>
          <li v-if="twoItems.items.finger2">
            <span class="item-itemLevel">Finger: {{twoItems.items.finger2.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.finger2.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.finger2.id + '&bonus=' + twoItems.items.finger2.bonusLists[0] + ':' + twoItems.items.finger2.bonusLists[1] + ':' + twoItems.items.finger2.bonusLists[2] + ':' + twoItems.items.finger2.bonusLists[3] + '&ilvl=' + twoItems.items.finger2.itemLevel" :class="'gear-link q' + twoItems.items.finger2.quality">{{twoItems.items.finger2.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Finger: None</span>
          </li>
          <li v-if="twoItems.items.trinket1">
            <span class="item-itemLevel">Trinket: {{twoItems.items.trinket1.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.trinket1.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.trinket1.id + '&bonus=' + twoItems.items.trinket1.bonusLists[0] + ':' + twoItems.items.trinket1.bonusLists[1] + ':' + twoItems.items.trinket1.bonusLists[2] + ':' + twoItems.items.trinket1.bonusLists[3] + '&ilvl=' + twoItems.items.trinket1.itemLevel" :class="'gear-link q' + twoItems.items.trinket1.quality">{{twoItems.items.trinket1.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Trinket: None</span>
          </li>
          <li v-if="twoItems.items.trinket2">
            <span class="item-itemLevel">Trinket: {{twoItems.items.trinket2.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.trinket2.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.trinket2.id + '&bonus=' + twoItems.items.trinket2.bonusLists[0] + ':' + twoItems.items.trinket2.bonusLists[1] + ':' + twoItems.items.trinket2.bonusLists[2] + ':' + twoItems.items.trinket2.bonusLists[3] + '&ilvl=' + twoItems.items.trinket2.itemLevel" :class="'gear-link q' + twoItems.items.trinket2.quality">{{twoItems.items.trinket2.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Trinket: None</span>
          </li>
          <br>
          <li v-if="twoItems.items.mainHand">
            <span class="item-itemLevel">Main-Hand: {{twoItems.items.mainHand.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.mainHand.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.mainHand.id + '&bonus=' + twoItems.items.mainHand.bonusLists[0] + ':' + twoItems.items.mainHand.bonusLists[1] + ':' + twoItems.items.mainHand.bonusLists[2] + ':' + twoItems.items.mainHand.bonusLists[3] + '&ilvl=' + twoItems.items.mainHand.itemLevel" :class="'gear-link q' + twoItems.items.mainHand.quality">{{twoItems.items.mainHand.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Main-Hand: None</span>
          </li>
          <li v-if="twoItems.items.offHand">
            <span class="item-itemLevel">Off-Hand: {{twoItems.items.offHand.itemLevel}}</span>
            <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + twoItems.items.offHand.icon + '.jpg'">
            <a target="_blank" :href="'//www.wowhead.com/item=' + twoItems.items.offHand.id + '&bonus=' + twoItems.items.offHand.bonusLists[0] + ':' + twoItems.items.offHand.bonusLists[1] + ':' + twoItems.items.offHand.bonusLists[2] + ':' + twoItems.items.offHand.bonusLists[3] + '&ilvl=' + twoItems.items.offHand.itemLevel" :class="'gear-link q' + twoItems.items.offHand.quality">{{twoItems.items.offHand.name}}</a>
          </li>
          <li v-else>
            <span class="no-items">Off-Hand: None</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {
  computed: {
    oneItems() {
      return this.$store.state.playerOneGear
    },

    twoItems() {
      return this.$store.state.playerTwoGear
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

.playerOne__gear
  ul
    li
      border-radius: 8px
      color: $orange-5
      background-color: $blue-5
      padding: 15px 10px 0px 10px
      width: 100%
      height: 43px
      margin-top: 15px
      font-size: 1.2em
      text-align: right
      list-style-position: inside
      &:hover
        background-color: $blue-4

      a
        margin: .5% 0 0 2%
        float: left
        text-decoration: none

        span:nth-child(2)
          margin-left: 10px
          font-weight: 300

      img
        float: left
        height: 43px
        width: 43px
        position: relative
        bottom: 15%

    p
      font-size: 1.2em
      color: $orange-5
      text-align: right

.playerTwo__gear
  ul
    li
      border-radius: 8px
      color: $orange-5
      background-color: $blue-5
      padding: 15px 10px 0px 10px
      width: 100%
      height: 43px
      margin-top: 15px
      font-size: 1.2em
      text-align: left
      list-style-position: inside
      &:hover
        background-color: $blue-4

      a
        margin: .5% 2% 0 0
        float: right

        span
          &:nth-child(1)
            float: right
            margin-left: 10px

          &:nth-child(2)
            padding: 40px 0 0 0
            font-weight: 300

      img
        float: right
        height: 43px
        width: 43px
        position: relative
        bottom: 15%

    p
      font-size: 1.2em
      color: $orange-5
      text-align: left

.no-items
  color: $poor

.item-itemLevel
  position: relative
  top: 0.2rem
</style>
