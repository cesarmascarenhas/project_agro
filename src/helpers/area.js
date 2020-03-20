// ICONS --------------------------------------------------------
import cornIcon from '../assets/imgs/corn.png';
import soyIcon from '../assets/imgs/soy.png';
import cottonIcon from '../assets/imgs/cotton.png';
import coffeIcon from '../assets/imgs/coffe.png';
import wheatIcon from '../assets/imgs/wheat.png';
import sandIcon from '../assets/imgs/sand.png';
import medianIcon from '../assets/imgs/median.png';
import clayIcon from '../assets/imgs/clay.png';
// import waterIconImport from '../assets/imgs/water-can.png';

export  const culture = [
    { label:'corn', icon: cornIcon, type: "CORN" },
    { label:'soy', icon: soyIcon, type: "SOY" },
    { label:'cotton', icon: cottonIcon, type: "COTTON" },
    { label:'coffe', icon: coffeIcon, type: "COFFE" },
    { label:'wheat', icon: wheatIcon, type: "WHEAT" }
];

export const soil = [
    { label:'sandy', icon: sandIcon, type: "SANDY" },
    { label:'medium', icon: medianIcon, type: "AVERAGE" },
    { label:'clayey', icon: clayIcon, type: "CLAYEY" },
];

// export const waterIcon = waterIconImport;