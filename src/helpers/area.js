// ICONS --------------------------------------------------------
import cornIcon from '../assets/images/culture/annual/corn.png';
import soyIcon from '../assets/images/culture/annual/soy.png';
import cottonIcon from '../assets/images/culture/annual/cotton.png';
import coffeIcon from '../assets/images/culture/annual/coffe.png';
import wheatIcon from '../assets/images/culture/annual/wheat.png';
import tomatoIcon from '../assets/images/culture/annual/tomato.png';
import potatoIcon from '../assets/images/culture/annual/potato.png';
import beetIcon from '../assets/images/culture/annual/beet.png';
import cabbageIcon from '../assets/images/culture/annual/cabbage.png';
import riceIcon from '../assets/images/culture/annual/rice.png';
import carrotIcon from '../assets/images/culture/annual/carrot.png';
import peanutIcon from '../assets/images/culture/annual/peanut.png';
import garlicIcon from '../assets/images/culture/annual/garlic.png';
import beansIcon from '../assets/images/culture/annual/beans.png';
import sugarCaneIcon from '../assets/images/culture/annual/sugar_cane.png';
import sorghumIcon from '../assets/images/culture/annual/sorghum.png';

import avocadoIcon from '../assets/images/culture/perennial/avocado.png';
import passionFruitIcon from '../assets/images/culture/perennial/passion-fruit.png';
import citrusIcon from '../assets/images/culture/perennial/citrus.png';
import bananaIcon from '../assets/images/culture/perennial/banana.png';
import papayaIcon from '../assets/images/culture/perennial/papaya.png';
import grapeIcon from '../assets/images/culture/perennial/grape.png';
import lycheeIcon from '../assets/images/culture/perennial/lychee.png';


import sandIcon from '../assets/images/soil/sand.png';
import medianIcon from '../assets/images/soil/median.png';
import semiIcon from '../assets/images/soil/semi.png';
import clayIcon from '../assets/images/soil/clay.png';

import centralPivotIcon from '../assets/images/irrigation/central_pivot.png';
import sprinklingIcon from '../assets/images/irrigation/sprinkling.png';
import drippingIcon from '../assets/images/irrigation/dripping.png';
import unknowIcon from '../assets/images/irrigation/unknow.png';

import waterIconImport from '../assets/images/water-can.png';

export  const annual = [
    { label:'corn', icon: cornIcon, type: "CORN" },
    { label:'soy', icon: soyIcon, type: "SOY" },
    { label:'cotton', icon: cottonIcon, type: "COTTON" },
    { label:'wheat', icon: wheatIcon, type: "WHEAT" },
    { label:'tomato', icon: tomatoIcon, type: "TOMATO" },
    { label:'potato', icon: potatoIcon, type: "POTATO" },
    { label:'beet', icon: beetIcon, type: "BEET" },
    { label:'cabbage', icon: cabbageIcon, type: "CABBAGE" },
    { label:'rice', icon: riceIcon, type: "RICE" },
    { label:'carrot', icon: carrotIcon, type: "CARROT" },
    { label:'peanut', icon: peanutIcon, type: "PEANUT" },
    { label:'garlic', icon: garlicIcon, type: "GARLIC" },
    { label:'beans', icon: beansIcon, type: "BEANS" },
    { label:'sugarCane', icon: sugarCaneIcon, type: "SUGAR_CANE" },
    { label:'sorghum', icon: sorghumIcon, type: "SORGHUM" }
];

export const perennial = [
    { label:'avocado', icon: avocadoIcon, type: "AVOCADO" },
    { label:'passion', icon: passionFruitIcon, type: "PASSION_FRUIT" },
    { label:'citrus', icon: citrusIcon, type: "CITRUS" },
    { label:'banana', icon: bananaIcon, type: "BANANA" },
    { label:'papaya', icon: papayaIcon, type: "PAPAYA" },
    { label:'grape', icon: grapeIcon, type: "GRAPE" },
    { label:'lychee', icon: lycheeIcon, type: "LYCHEE" },
    { label:'coffee', icon: coffeIcon, type: "COFFEE" },
]

export const cultures = {
    annual,
    perennial
}

export const soil = [
    { label:'sandy', icon: sandIcon, type: "SANDY", value: "0.87" },
    { label:'medium', icon: medianIcon, type: "AVERAGE", value: "0.91" },
    { label:'semi', icon: semiIcon, type: "SEMI", value: "0.95" },
    { label:'clayey', icon: clayIcon, type: "CLAYEY", value: "1" },
];

export const irrigationType = [
    { label:'centralPivot', icon: centralPivotIcon, type: "CENTRAL_PIVOT", value: "0.8" },
    { label:'dripping', icon: drippingIcon, type: "DRIPPING", value: "0.95" },
    { label:'centralPivotLEPA', icon: centralPivotIcon, type: "CENTRAL_PIVOT_LEPA", value: "0.9" },
    { label:'sprinkling', icon: sprinklingIcon, type: "SPRINKLING", value: "0.75" },
    { label:'unknow', icon: unknowIcon, type: "UNKNOW", value: "0.6" }
]

export const waterIcon = waterIconImport;