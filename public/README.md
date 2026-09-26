# Adding your memories

All content text and her name live in `src/data/siteContent.js`. Categories and every photo/video slot live in `src/data/categories.js`.

Replace the placeholder image paths with your photos in `public/images/` (for example `public/images/soft-side/01.jpg`). Put videos in `public/videos/<category>/` and use an image in `public/images/posters/` as each video's `poster`. Put your MP3 at `public/music/birthday-song.mp3`.

Keep video `type: 'video'`; it is only loaded after she opens it. Images already use browser lazy loading where applicable on the gallery route.
