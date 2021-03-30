	// convertir des degré aux radian
Math.radians = function(degrees) {
  return (degrees * Math.PI) / 180;
};
 
	// convertir des radian aux degré
Math.degrees = function(radians) {
  return (radians * 180) / Math.PI;
};

Math.coordonnesToAngle = function(x,y,bool) {

	var θ;

	if(x > 0 && y >= 0)
	{
		θ = Math.atan(y/x);
	}
	else if(x > 0 && y < 0)
	{
		θ = Math.atan(y/x) + 2*Math.PI;
	}
	else if(x < 0)
	{
		θ = Math.atan(y/x) + Math.PI;
	}
	else if(x == 0 && y > 0)
	{
		θ = Math.PI/2;
	}
	else if(x == 0 && y < 0)
	{
		θ = -1*(Math.PI/2);
	}

	if (bool)
	{
		return θ = Math.degrees(θ);
	}
	else { return θ; }

};