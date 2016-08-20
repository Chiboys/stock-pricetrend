var chart = function(obj){
	//data's format,should be like below:
		/*{
			symbol:symbol,
			data:
			[
				
				[date,price],
				[date,price]
			
			]
		  }
		*/
	var symbol = obj.symbol;
	
	var g = chartG.append('g')
				  .attr('id',symbol);
	obj.data = obj.data.map(function(d){
				return [parseT(d[0]),d[1]];
			});
	var data = obj.data;
	var line = d3.line()
				.x(function(d){
					return xScale(d[0]);		
				})
				.y(function(d){
					return yScale(d[1]);
				});
	g.append('path')
	  .attr('transform','translate('+padding.left+','+padding.top+")")
    	.attr('fill','none')
		.attr('stroke','black')
		.attr('d',line(data));
	

	ordinal++;
	stockInf(obj);
};
