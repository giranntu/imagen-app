// // src/services/api.js
// import axios from 'axios';

// // const BASE_URL = '/api';
// const BASE_URL = 'http://localhost:8000/api';

// export const generateImages = async (character, style, scene, numImages) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/generate`, {
//       character,
//       style,
//       scene,
//       numImages,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate images:', error);
//     throw error;
//   }
// };

//#####
// import axios from 'axios';

// // const BASE_URL = 'http://localhost:8000/api';
// const BASE_URL = 'https://imagen-app-backend-tanr7u3tsq-uc.a.run.app/api';
// // const BASE_URL = 'https://backend-tanr7u3tsq-uc.a.run.app/api';
// // const BASE_URL = 'https://backend-tanr7u3tsq-uc.a.run.app/api';
//                 //https://backend-tanr7u3tsq-uc.a.run.app


// export const generateImages = async (character, style, scene, numImages) => {
//   try {
//     console.log('Sending image generation request to backend');
//     console.log('Request data:', { character, style, scene, numImages });

//     const response = await axios.post(`${BASE_URL}/images/generate`, {
//       character,
//       style,
//       scene,
//       numImages,
//     });

//     console.log('Image generation request successful');
//     console.log('Response data:', response.data);

//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate images:', error);
//     console.error('Error response:', error.response);
//     throw error;
//   }
// };


import axios from 'axios';

const BASE_URL = 'https://imagen-app-backend-tanr7u3tsq-uc.a.run.app/api';

export const generateImages = async (character, style, scene, numImages) => {
  try {
    console.log('Sending image generation request to backend');
    console.log('Request data:', { character, style, scene, numImages });

    const response = await axios.post(`${BASE_URL}/images/generate`, {
      character,
      style,
      scene,
      numImages,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Image generation request successful');
    console.log('Response data:', response.data);

    return response.data;
  } catch (error) {
    console.error('Failed to generate images:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    throw error;
  }
};