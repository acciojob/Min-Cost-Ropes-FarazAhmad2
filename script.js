function mincost(arr)
{ 
//write your code here
// return the min cost
	return arr.reduce((acc,item) => acc + item);

  
}

module.exports=mincost;
