import softSide01 from '../assets/soft side/WhatsApp Video 2026-09-26 at 16.26.16.mp4';
import softSide02 from '../assets/soft side/WhatsApp Video 2026-09-26 at 16.26.18.mp4';
import softSide03 from '../assets/soft side/WhatsApp Video 2026-09-26 at 16.26.19.mp4';
import softSide04 from '../assets/soft side/WhatsApp Video 2026-09-26 at 16.26.21.mp4';
import softSideCover from '../assets/soft side/WhatsApp Image 2026-09-26 at 16.55.33.jpeg';
import softSidePhoto02 from '../assets/soft side/WhatsApp Image 2026-09-26 at 16.55.33 (1).jpeg';
import softSidePhoto03 from '../assets/soft side/WhatsApp Image 2026-09-26 at 16.55.33 (2).jpeg';
import softSidePhoto04 from '../assets/soft side/WhatsApp Image 2026-09-26 at 17.00.39 (2).jpeg';
import stylePhoto01 from '../assets/her style/WhatsApp Image 2026-09-26 at 16.29.30.jpeg';
import stylePhoto02 from '../assets/her style/WhatsApp Image 2026-09-26 at 16.32.16.jpeg';
import styleVideo01 from '../assets/her style/WhatsApp Video 2026-09-26 at 16.29.29.mp4';
import styleVideo02 from '../assets/her style/WhatsApp Video 2026-09-26 at 16.29.30.mp4';
import styleVideo03 from '../assets/her style/WhatsApp Video 2026-09-26 at 16.29.31.mp4';
import styleVideo04 from '../assets/her style/WhatsApp Video 2026-09-26 at 16.29.33.mp4';
import styleVideo05 from '../assets/her style/WhatsApp Video 2026-09-26 at 16.31.24.mp4';
import chaosPhoto01 from '../assets/chaos/WhatsApp Image 2026-09-26 at 16.39.58.jpeg';
import chaosPhoto02 from '../assets/chaos/WhatsApp Image 2026-09-26 at 16.40.47.jpeg';
import chaosVideo01 from '../assets/chaos/WhatsApp Video 2026-09-26 at 16.40.00.mp4';
import chaosVideo02 from '../assets/chaos/WhatsApp Video 2026-09-26 at 16.40.01.mp4';
import chaosVideo03 from '../assets/chaos/WhatsApp Video 2026-09-26 at 16.40.04.mp4';
import chaosVideo04 from '../assets/chaos/WhatsApp Video 2026-09-26 at 16.42.20.mp4';
import adventurePhoto01 from '../assets/adventures/WhatsApp Image 2026-09-26 at 16.50.11.jpeg';
import adventurePhoto02 from '../assets/adventures/WhatsApp Image 2026-09-26 at 16.50.14.jpeg';
import adventureVideo01 from '../assets/adventures/WhatsApp Video 2026-09-26 at 16.48.01.mp4';
import adventureVideo02 from '../assets/adventures/WhatsApp Video 2026-09-26 at 16.48.02.mp4';
import adventureVideo03 from '../assets/adventures/WhatsApp Video 2026-09-26 at 16.48.05.mp4';
import adventureVideo04 from '../assets/adventures/WhatsApp Video 2026-09-26 at 16.48.06.mp4';
import adventureVideo05 from '../assets/adventures/WhatsApp Video 2026-09-26 at 16.48.07.mp4';
import usPhoto01 from '../assets/her and me/WhatsApp Image 2026-09-26 at 16.55.33.jpeg';
import usPhoto02 from '../assets/her and me/WhatsApp Image 2026-09-26 at 16.55.33 (1).jpeg';
import usPhoto03 from '../assets/her and me/WhatsApp Image 2026-09-26 at 16.55.33 (2).jpeg';
import usPhoto04 from '../assets/her and me/WhatsApp Image 2026-09-26 at 17.03.23.jpeg';

// Swap these paths for your own images. Keeping them shared means this starter runs
// beautifully before you add the real photos.
const placeholder = (id, n) => `/images/categories/placeholder-${n === 'cover' ? 'cover' : n}.svg`;
const makeMedia = (id, title) => [
  { type: 'image', src: placeholder(id, '01'), alt: `${title} memory one`, caption: 'A little moment worth keeping.' },
  { type: 'image', src: placeholder(id, '02'), alt: `${title} memory two`, caption: 'This one still makes me smile.' },
  { type: 'video', src: `/videos/${id}/video-01.mp4`, poster: placeholder(id, '03'), alt: `${title} video memory`, caption: 'Press play for this memory.' },
  { type: 'image', src: placeholder(id, '04'), alt: `${title} memory four`, caption: 'One of my favorite frames.' },
];
const softSideMedia = [
  { type: 'image', src: softSideCover, alt: 'Soft Side photo memory one', caption: 'A soft moment I want to keep.' },
  { type: 'video', src: softSide01, poster: placeholder('soft-side', '01'), alt: 'Soft Side video memory one', caption: 'A quiet little moment.' },
  { type: 'video', src: softSide02, poster: placeholder('soft-side', '02'), alt: 'Soft Side video memory two', caption: 'The kind of moment I want to replay.' },
  { type: 'video', src: softSide03, poster: placeholder('soft-side', '03'), alt: 'Soft Side video memory three', caption: 'Softness, exactly as it is.' },
  { type: 'video', src: softSide04, poster: placeholder('soft-side', '04'), alt: 'Soft Side video memory four', caption: 'One more little piece of you.' },
  { type: 'image', src: softSidePhoto02, alt: 'Soft Side photo memory two', caption: 'Beautiful in the quiet moments too.' },
  { type: 'image', src: softSidePhoto03, alt: 'Soft Side photo memory three', caption: 'A little glimpse of your gentleness.' },
  { type: 'image', src: softSidePhoto04, alt: 'Soft Side photo memory four', caption: 'One more reason this chapter is yours.' },
];
const styleMedia = [
  { type: 'image', src: stylePhoto01, alt: 'Her Style photo one', caption: 'Looking like you knew exactly what you were doing.' },
  { type: 'video', src: styleVideo01, poster: stylePhoto01, alt: 'Her Style video one', caption: 'Effortless, as usual.' },
  { type: 'video', src: styleVideo02, poster: stylePhoto01, alt: 'Her Style video two', caption: 'A look worth remembering.' },
  { type: 'video', src: styleVideo03, poster: stylePhoto02, alt: 'Her Style video three', caption: 'You make it look easy.' },
  { type: 'video', src: styleVideo04, poster: stylePhoto02, alt: 'Her Style video four', caption: 'The details always matter.' },
  { type: 'video', src: styleVideo05, poster: stylePhoto02, alt: 'Her Style video five', caption: 'One more look I love.' },
  { type: 'image', src: stylePhoto02, alt: 'Her Style photo two', caption: 'Completely, unmistakably you.' },
];
const chaosMedia = [
  { type: 'image', src: chaosPhoto01, alt: 'Her Chaotic Side photo one', caption: 'Exhibit A.' },
  { type: 'video', src: chaosVideo01, poster: chaosPhoto01, alt: 'Her Chaotic Side video one', caption: 'No further questions.' },
  { type: 'video', src: chaosVideo02, poster: chaosPhoto01, alt: 'Her Chaotic Side video two', caption: 'Exactly the energy I mean.' },
  { type: 'video', src: chaosVideo03, poster: chaosPhoto02, alt: 'Her Chaotic Side video three', caption: 'A perfectly unserious moment.' },
  { type: 'video', src: chaosVideo04, poster: chaosPhoto02, alt: 'Her Chaotic Side video four', caption: 'You were having entirely too much fun.' },
  { type: 'image', src: chaosPhoto02, alt: 'Her Chaotic Side photo two', caption: 'Proof that you are not as innocent as you pretend.' },
];
const adventureMedia = [
  { type: 'image', src: adventurePhoto01, alt: 'Her Adventures photo one', caption: 'A place, a moment, a memory.' },
  { type: 'video', src: adventureVideo01, poster: adventurePhoto01, alt: 'Her Adventures video one', caption: 'Out in the world, being you.' },
  { type: 'video', src: adventureVideo02, poster: adventurePhoto01, alt: 'Her Adventures video two', caption: 'Another place worth remembering.' },
  { type: 'video', src: adventureVideo03, poster: adventurePhoto02, alt: 'Her Adventures video three', caption: 'A little adventure, perfectly kept.' },
  { type: 'video', src: adventureVideo04, poster: adventurePhoto02, alt: 'Her Adventures video four', caption: 'The journey looked good on you.' },
  { type: 'video', src: adventureVideo05, poster: adventurePhoto02, alt: 'Her Adventures video five', caption: 'One more story from the road.' },
  { type: 'image', src: adventurePhoto02, alt: 'Her Adventures photo two', caption: 'Collecting the kind of days that last.' },
];
const usMedia = [
  { type: 'image', src: usPhoto01, alt: 'Her and Me memory one', caption: 'One of the chapters I am happiest to be in.' },
  { type: 'image', src: usPhoto02, alt: 'Her and Me memory two', caption: 'Somewhere along the way, we became us.' },
  { type: 'image', src: usPhoto03, alt: 'Her and Me memory three', caption: 'My favorite place is next to you.' },
  { type: 'image', src: usPhoto04, alt: 'Her and Me memory four', caption: 'A moment that belongs to us.' },
];
const raw = [
 ['soft-side','01','Her Soft Side','The side of you that makes everything feel a little softer.'],
 ['style','02','Her Style','Because somehow, you always know how to look good.'],
 ['chaotic-side','03','Her Chaotic Side',"Evidence that you're not as innocent as you pretend to be."],
 ['adventures','04','Her Adventures',"All the places you've been and all the memories you made there."],
 ['us','08','Her & Me',"And somewhere in all these different versions of you, I'm lucky enough to have a place in your story."]
];
const categories = raw.map(([id, number, title, description]) => ({
  id, number, title, description,
  coverImage: id === 'soft-side' ? softSidePhoto04 : id === 'style' ? stylePhoto01 : id === 'chaotic-side' ? chaosPhoto01 : id === 'adventures' ? adventurePhoto01 : id === 'us' ? usPhoto01 : placeholder(id, 'cover'),
  media: id === 'soft-side' ? softSideMedia : id === 'style' ? styleMedia : id === 'chaotic-side' ? chaosMedia : id === 'adventures' ? adventureMedia : id === 'us' ? usMedia : makeMedia(id, title)
}));
export default categories;
