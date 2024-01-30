// NOT INVOLVED IN PROJECT 
// This is how I get the megaverse.json data
// TO RUN: Paste this complete code into the browser console of the page with the metaverse matrix shown

const AstralIconCodes = ({
    polyanet: 56976,
    soloon: 57109,
    comeths: 65039
  });
  
  const AstralTypes = ({
      polyanet: 'polyanet',
      soloon: 'soloon',
      cometh: 'cometh'
  });
  
  function getMatrix(matrix) {
    const result = [];
    
    for (let x = 0; x < matrix.length; x++) {
      const row = matrix[x].children;
      
      for (let y = 0; y < row.length; y++) {
        const element = row[y];
        const iconCode = element.innerText.charCodeAt(1);
        if (AstralIconCodes.polyanet == iconCode) {
          result.push(generateNewPolyanet(x, y));
        } else if (iconCode === AstralIconCodes.comeths) {
          result.push(generateNewCometh(x, y, [...element.children[0].classList]));
        } else if (iconCode === AstralIconCodes.soloon) {
          result.push(generateNewSoloon(x, y, element.children[0].style.filter));
        }
      }
    }
    
    return result;
  }
  function generateNewPolyanet(x, y) {
    return ({
         row: x,
         column: y,
         type: AstralTypes.polyanet
      });
  }
  
  function generateNewSoloon(x, y, filter) {
    let moonColor = 'white';
    if (filter.includes('hue-rotate(-50deg)')) {
      moonColor = 'red';
    } else if (filter.includes('hue-rotate(-180deg)')) {
      moonColor = 'blue';
    } else if (filter.includes('hue-rotate(-100deg)')) {
      moonColor = 'purple';
    }
    let soloon = {
         row: x,
         column: y,
         type: AstralTypes.soloon,
         color: moonColor
      };
    return (soloon);
  }
  
  function generateNewCometh(x, y, style) {
    let comethDirection = 'left';
    if (style.includes('rotate-[48deg]')) {
      comethDirection = 'up';
    } else if (style.includes('rotate-[140deg]')) {
      comethDirection = 'right';
    } else if (style.includes('rotate-[230deg]')) {
      comethDirection = 'down';
    }
    return ({
         row: x,
         column: y,
         type: AstralTypes.cometh,
         direction: comethDirection
      });
  }
  
  function start() {
    const selector = document.querySelector('[style="letter-spacing: 1em;"]').children;
    console.log(JSON.stringify(getMatrix(selector)));
  }
   
  start();