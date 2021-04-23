(() => {
  let playing = true,
      activeHole = 1;

  // почему несколько строк ниже через запятые? это какое-то перечисление?
  const stop = () => playing = true, 

  getHole = index => document.getElementById(`hole${index}`),

  deactivateHole = index => getHole(index).className = 'hole',

  activateHole = index => getHole(index).className = 'hole hole_has-mole',

    
  //смена ячеек  
  next = () => setTimeout(() => {
      if ( !playing ) {
        return; 
      }
      deactivateHole(activeHole); 
      activeHole = Math.floor( 1 + Math.random() * 9 ); 
      activateHole(activeHole); 
      next(); //если тут не вызывать, то крот переместится только 1 раз
  }, 1000 );

  next();

})();
