/* FORMAT OF A LEVEL FOR JSON SERIALIZATION:
	{
		height: int,
		width: int,
		data: array[array],
		id: int,
		background: int
	}
*/

var definedLevels = [
{
	data:
[['','','','','','','','',], ['','','','','','','','',], ['','','','','grass_top_left','grass_left','grass_left','grass_left',], ['','','','mario','grass_top','soil','soil','soil',], ['','','','','grass_top','soil','soil','soil',], ['','coinbox','','','grass_top_right','soil','soil','soil',], ['','','','','','grass_top','soil','soil',], ['','','','','grass_top_left','soil','soil','soil',], ['','','','ballmonster','grass_top_right','grass_right','grass_right','grass_right',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ['','','','','','','','',], ],
    width: undefined,
	height: undefined,
	id: 0,
	background: 1,
}
];

for(n=0;n<definedLevels.length;n++){
definedLevels[n].height = definedLevels[0].data.length + 1
definedLevels[n].width = definedLevels[0].data[0].length + 1
}//alert(definedLevels[0].width)
