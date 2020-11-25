import axios from 'axios';
// import {array_move} from '../helpers';
export const getData = (paging) => {
  return {
    type: 'GET_DATA',
    payload: axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/?&limit=${paging}`,
    }),
  };
};

// export const rotateData = (data, oldIndex, newIndex) => {
//   return {
//     type: 'CHANGE_DATA',
//     payload: array_move(data, oldIndex, newIndex),
//   };
// };
