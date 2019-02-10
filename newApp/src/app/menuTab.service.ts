import {MenuTab} from './MenuTab';

export class MenuTabService {
	getMenuTabs() : Array<MenuTab> {
		return getTabs();
	}
}

var tabs = [
	{title:'Home', img:'../assets/images/howl_blank.png', action:''},
	{title:'About', img:null, action:''},
	{title:'Galleries', img:null, action:''},
	{title:'Sponsors', img:null, action:''},
	{title:'Events', img:null, action:''},
	// {title:'Sports', img:null, action:''},
	{title:'Payment', img:null, action:''}
];

function getTabs() : Array<MenuTab>{
	let returnList: Array<MenuTab> = [];
	for(let tab of tabs){
		returnList.push(new MenuTab(tab.title, 'none', tab.img));
	}
	return returnList;
}
