// Portfolio Data for Ibukunoluwa Shittu
import heroPortrait from '../assets/images/hero/hero_portrait.jpg';
import aboutPortrait from '../assets/images/about/about_portrait.jpg';

// Previous Works
import featuredFlame from '../assets/images/previous_works/featured_flame.png';
import thumb1 from '../assets/images/previous_works/thumb_1.jpg';
import thumb2 from '../assets/images/previous_works/thumb_2.jpg';
import thumb3 from '../assets/images/previous_works/thumb_3.jpg';
import thumb4 from '../assets/images/previous_works/thumb_4.jpg';
import thumb5 from '../assets/images/previous_works/thumb_5.jpg';

// Unknown Heroes
import uhFramed1 from '../assets/images/unknown_heroes/framed_1.jpg';
import uhFramed2 from '../assets/images/unknown_heroes/framed_2.jpg';
import uhFramed3 from '../assets/images/unknown_heroes/framed_3.jpg';
import uhFramed4 from '../assets/images/unknown_heroes/framed_4.jpg';
import uhFramed5 from '../assets/images/unknown_heroes/framed_5.jpg';
import uhFramed6 from '../assets/images/unknown_heroes/framed_6.jpg';
import uhFramed7 from '../assets/images/unknown_heroes/framed_7.jpg';
import uhDoc1 from '../assets/images/unknown_heroes/doc_1.jpg';
import uhDoc2 from '../assets/images/unknown_heroes/doc_2.jpg';
import uhDoc3 from '../assets/images/unknown_heroes/doc_3.jpg';
import uhDoc4 from '../assets/images/unknown_heroes/doc_4.jpg';

// Gele Series
import gele1 from '../assets/images/gele/gele_1.jpg';
import gele2 from '../assets/images/gele/gele_2.jpg';
import gele3 from '../assets/images/gele/gele_3.jpg';
import gele4 from '../assets/images/gele/gele_4.jpg';
import gele5 from '../assets/images/gele/gele_5.jpg';
import gele6 from '../assets/images/gele/gele_6.jpg';
import gele7 from '../assets/images/gele/gele_7.jpg';

// Color Series
import colorArt1 from '../assets/images/color/color_art_1.jpg';
import colorArt2 from '../assets/images/color/color_art_2.jpg';
import colorArt3 from '../assets/images/color/color_art_3.jpg';
import colorArt4 from '../assets/images/color/color_art_4.jpg';
import colorArt5 from '../assets/images/color/color_art_5.jpg';
import colorArt6 from '../assets/images/color/color_art_6.jpg';
import colorArt7 from '../assets/images/color/color_art_7.jpg';
import colorFig1 from '../assets/images/color/figure_1.png';
import colorFig2 from '../assets/images/color/figure_2.jpg';
import colorFig3 from '../assets/images/color/figure_3.jpg';
import colorFig4 from '../assets/images/color/figure_4.jpg';

// Experience & Contact
import expPortrait from '../assets/images/experience/experience_portrait.jpg';
import contactPortrait from '../assets/images/contact/contact_portrait.jpg';

export const portfolioData = {
  artist: {
    name: 'IBUKUNOLUWA SHITTU',
    role: 'fine art photographer',
    email: 'ibukunoluwashittu97@gmail.com',
    heroPortrait,
    aboutPortrait,
    contactPortrait,
    expPortrait,
    aboutStatement: [
      'I am a visual storyteller with a deep love for photography as both art and language. My work explores emotion, identity, and the quiet moments that often go unnoticed. Through my lens, I focus on creating images that feel honest, intentional, and deeply human.',
      'With a background in Fine Art Education, my approach to photography is shaped by strong artistic foundations; composition, texture, light, and storytelling. I am drawn to minimalism, mood, and detail, allowing each photograph to speak softly but stay with you long after you’ve seen it.',
      'Photography, for me, is more than capturing images, it’s about translating feeling into form and giving moments a place to live.'
    ],
    experience: 'I have built my experience through independent projects, consistently creating and refining my own photographic work. Working independently has sharpened my creative direction, technical skill, and ability to turn ideas into intentional visual stories.',
    education: {
      degree: 'B.A. Fine and Applied Art (Painting)',
      institution: 'University of Nigeria, Nsukka',
      years: '2016 – 2021'
    }
  },

  previousWorks: {
    title: 'PREVIOUS WORKS',
    scriptPrefix: 'Previous',
    mainTitle: 'WORKS',
    featured: {
      id: 'pw-featured',
      src: featuredFlame,
      title: 'Ignition & Grace',
      series: 'Featured Showcase',
      description: 'Translating light and emotional warmth through a solitary flame.'
    },
    thumbnails: [
      { id: 'pw-1', src: thumb1, title: 'Study in Contrast I', series: 'Previous Works' },
      { id: 'pw-2', src: thumb2, title: 'Silhouettes in Shadow', series: 'Previous Works' },
      { id: 'pw-3', src: thumb3, title: 'Quiet Reverie', series: 'Previous Works' },
      { id: 'pw-4', src: thumb4, title: 'Textures of Being', series: 'Previous Works' },
      { id: 'pw-5', src: thumb5, title: 'Solace in Blue', series: 'Previous Works' }
    ]
  },

  series: [
    {
      id: 'unknown-heroes',
      title: 'UNKNOWN HEROES',
      scriptTitle: 'Unknown Heroes',
      statement: [
        'This series turns attention to the people we often pass by without a second look. They are unnamed, unnoticed, and rarely celebrated, yet their presence holds communities together in quiet ways.',
        'Unknown Heroes honors everyday lives whose existence matters not because they are seen, but because they endure. Through these images, the ordinary becomes essential, reminding us that impact does not always announce itself.'
      ],
      framedPieces: [
        { id: 'uh-f1', src: uhFramed1, title: 'Unknown Hero I — Quiet Ascent', aspect: 'portrait' },
        { id: 'uh-f2', src: uhFramed2, title: 'Unknown Hero II — The Passage', aspect: 'portrait' },
        { id: 'uh-f3', src: uhFramed3, title: 'Unknown Hero III — Everyday Grace', aspect: 'landscape' },
        { id: 'uh-f4', src: uhFramed4, title: 'Unknown Hero IV — Stillness in Motion', aspect: 'square' },
        { id: 'uh-f5', src: uhFramed5, title: 'Unknown Hero V — Pillar of the Market', aspect: 'tall' },
        { id: 'uh-f6', src: uhFramed6, title: 'Unknown Hero VI — Bearing Tomorrow', aspect: 'portrait' },
        { id: 'uh-f7', src: uhFramed7, title: 'Unknown Hero VII — The Quiet Watch', aspect: 'landscape' }
      ],
      documentaryGrid: [
        { id: 'uh-d1', src: uhDoc1, title: 'Market Vessel', subtitle: 'The Daily Burden' },
        { id: 'uh-d2', src: uhDoc2, title: 'Commuter Rest', subtitle: 'Patience in Transit' },
        { id: 'uh-d3', src: uhDoc3, title: 'Street Assembly', subtitle: 'The Ties That Bind' },
        { id: 'uh-d4', src: uhDoc4, title: 'Cart Merchant', subtitle: 'Enduring Passage' }
      ]
    },
    {
      id: 'gele',
      title: 'Gele',
      isScriptTitle: true,
      statement: [
        'In many Yoruba families, the gele is more than a headwrap. It is a quiet language of identity, grace, and becoming. From childhood, learning to tie the gele is a rite of passage that teaches pride in appearance, patience in care, and respect for self and community.'
      ],
      pieces: [
        { id: 'gele-1', src: gele1, title: 'Gele: Crown of Grace I', tone: 'emerald' },
        { id: 'gele-2', src: gele2, title: 'Gele: Crown of Grace II', tone: 'gold' },
        { id: 'gele-3', src: gele3, title: 'Gele: Crown of Grace III', tone: 'noir' },
        { id: 'gele-4', src: gele4, title: 'Gele: Crown of Grace IV', tone: 'violet' },
        { id: 'gele-5', src: gele5, title: 'Gele: Crown of Grace V', tone: 'chartreuse' },
        { id: 'gele-6', src: gele6, title: 'Gele: Crown of Grace VI', tone: 'coral' },
        { id: 'gele-7', src: gele7, title: 'Gele: Crown of Grace VII', tone: 'shadow' }
      ]
    },
    {
      id: 'color',
      title: 'Color',
      isScriptTitle: true,
      statement: [
        'This series gathers spontaneous works connected by a shared language of brightness. Bold and vivid tones run through each piece, sometimes as joy, sometimes as contrast.',
        'Within the color sits pain : masked, softened, or held in tension. These works use brightness not to deny hurt, but to carry it, showing how color can become both refuge and revelation.'
      ],
      upperArtworks: [
        { id: 'color-a1', src: colorArt1, title: 'Study in Blue Horizon' },
        { id: 'color-a2', src: colorArt2, title: 'Cobalt Mask I' },
        { id: 'color-a3', src: colorArt3, title: 'Cobalt Mask II' },
        { id: 'color-a4', src: colorArt4, title: 'Midnight Gaze' },
        { id: 'color-a5', src: colorArt5, title: 'Chromatic Echo' },
        { id: 'color-a6', src: colorArt6, title: 'Tension in Yellow' },
        { id: 'color-a7', src: colorArt7, title: 'Veil of Azure' }
      ],
      standingFigures: [
        { id: 'color-f1', src: colorFig1, title: 'Pattern Figure I: Indigo Rhythm' },
        { id: 'color-f2', src: colorFig2, title: 'Pattern Figure II: Ochre Lineage' },
        { id: 'color-f3', src: colorFig3, title: 'Pattern Figure III: Solar Robes' },
        { id: 'color-f4', src: colorFig4, title: 'Pattern Figure IV: Violet Passage' }
      ]
    }
  ]
};
