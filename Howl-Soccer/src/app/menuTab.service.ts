import {MenuTab} from './MenuTab';

export class MenuTabService {
  getMenuTabs() : Array<MenuTab> {
    return getTabs();
  }
}

var tabs = [
  'About Us',
  'Galleries',
  'Sponsors',
  'Events',
  'Sports',
  'Payment'
];

function getTabs() : Array<MenuTab>{
  let returnList: Array<MenuTab> = [];
  for(let tab of tabs){
    returnList.push(new MenuTab(tab, 'none'))
  }
  return returnList;
}
