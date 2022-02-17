import 'setimmediate';
import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'journal-app-upgrade', 
  api_key: '663944395253682', 
  api_secret: 'CINHzn_As-qjg9yZ9caP1FoqVGU',
  secure: true
});

describe('Testing fileUpload', () => {

  // test('should load a file and return the url', async (done) => {
  //   const resp = await fetch('https://i.kym-cdn.com/entries/icons/original/000/009/803/spongebob-squarepants-patrick-spongebob-patrick-star-background-225039.jpg');
  //   const blob = await resp.blob();
  //   const file = new File([blob], 'img.png');
  //   const url = await fileUpload(file);

  //   expect(typeof url).toBe('string');

  //   const segments = url.split('/');
  //   const imgId = segments[segments.length - 1].replace('.jpg', '');

  //   const { deleted } = await cloudinary.v2.api.delete_resources(imgId);
  //   expect(deleted).toEqual({ [imgId]: "deleted" });
  // });
  
  test('should return an error', async () => {
    const file = new File([], 'img.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});