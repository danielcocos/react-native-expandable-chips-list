export const getLastIndexes = (positions: Array<number>) => {
    let lastIndexes: Array<number> = [];
    let mappedIndexes: Array<number> = [];
    let counter = 0;
  
    for (let index = 0; index < positions.length; index++) {
      const position = positions[index];
      const nextPosition = positions[index + 1];
  
      if (position !== nextPosition) {
        lastIndexes.push(index);
      }
    }
  
    positions.forEach((_, index) => {
      if (index > lastIndexes[counter]) {
        counter++;
      }
      mappedIndexes.push(lastIndexes[counter]);
    });
  
    return mappedIndexes;
  };
  