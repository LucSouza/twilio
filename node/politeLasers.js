function getLaserSetting(key){

if (key === 'please'){
return "OFF";}
else {
return "ON"
	}
}

const currentSetting = getLaserSetting('please');
console.log('The current laser settings is: '+ currentSetting);
