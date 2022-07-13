export const INSTRUMENT_LINKS = {
    NIRCam: ['https://en.wikipedia.org/wiki/NIRCam'],
    MIRI: ['https://en.wikipedia.org/wiki/MIRI_(Mid-Infrared_Instrument)'],
} as const;

type InputImage = {
    title: string;
    postUrl: string;
    fullResolutionUrl: string;
    fullResolutionSize: string;
    fullResolution: string;
    limitedResolutionUrl: string;
    limitedResolutionSize: string;
    limitedResolution: string;
    textDescriptionUrl: string;
    instruments: (keyof typeof INSTRUMENT_LINKS)[];
    exposureInDays: number;
};

export type Image = InputImage & {
    id: string;
    optimizedUrl: string;
};

export type ImageGroup = {
    groupName: string;
    description: string;
    images: Image[];
};

const IMAGES_DATA: {
    groupName: string;
    description: string;
    images: InputImage[];
}[] = [
    {
        groupName: "Webb's First Deep Field",
        description: `This image shows many overlapping objects at various distances. They include foreground stars, galaxies
in a galaxy cluster, and distorted background galaxies behind the galaxy cluster.
The background of space is black. Thousands of small galaxies appear across the image. Their colors
vary. Some are shades of orange, others are white. Most appear as fuzzy ovals, but a few have
distinctive spiral arms.
In front of the galaxies are several foreground stars. Most appear blue with diffraction spikes, forming
eight-pointed star shapes. Some look as large as the galaxies that appear next to them.
A very bright star is slightly off center. It has eight blue, long diffraction spikes. In the center of the
image, between 4 o’clock and 6 o’clock in the bright star’s spikes, are several bright, white galaxies.
These are members of the galaxy cluster.
There are also many thin, long, orange arcs. They follow invisible concentric circles that curve around
the center of the image. These are images of background galaxies that have been stretched and
distorted by the foreground galaxy cluster. `,
        images: [
            {
                title: "Webb's First Deep Field Unveiled (NIRCam Image)",
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/035/01G7DCWB7137MYJ05CSH1Q5Z1Z',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7JJADTH90FR98AKKJFKSS0B.png',
                fullResolutionSize: '26.74 MB',
                fullResolution: '4537 x 4630',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7PX26GGXRJEYKH2CY53KMV0.png',
                limitedResolutionSize: '5.52 MB',
                limitedResolution: '1960 x 2000',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7PX2S2K0YMDY77Z7JVM7QQV.pdf',
                instruments: ['NIRCam'],
                exposureInDays: 1,
            },
        ],
    },
    {
        groupName: 'Southern Ring Nebula',
        description: `The Southern Ring Nebula is a large, semi-transparent oval that is slightly angled from top left to bottom
right. Two stars appear at the center very close to one another. The one at left is red, the one at right is
light blue. The blue star has tiny diffraction spikes around it. A large translucent red oval surrounds the
central stars. From the red oval, shells extend in a mix of colors. The shells that extend to the left and
right are red and the shells that extend to the top and bottom are teal. The shells appear to have a
filamentous pattern, similar to the surface of a cut citrus fruit. The shells darken in color with distance
from the center. The background is black and speckled with tiny bright stars and distant galaxies in a
range of colors.`,
        images: [
            {
                title: 'Southern Ring Nebula (MIRI Image)',
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/033/01G70C5F6Z698YC9E1DEBA3WET',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G786E1PW9RMK51EP0DZSM03B.png',
                fullResolutionSize: '1.66 MB',
                fullResolution: '1306 x 1133',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G786E1PW9RMK51EP0DZSM03B.png',
                limitedResolutionSize: '1.66 MB',
                limitedResolution: '1306 x 1133',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7HV69WB83EX4296MH0W5PM6.pdf',
                instruments: ['MIRI'],
                exposureInDays: 1,
            },
            {
                title: 'Southern Ring Nebula (NIRCam Image)',
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/033/01G70BGTSYBHS69T7K3N3ASSEB',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G79R51118N21AAZ9MZ8XWWQ6.png',
                fullResolutionSize: '21.30 MB',
                fullResolution: '4833 x 4501',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G79RF5F5TPZJSDT3Y640XNQ1.png',
                limitedResolutionSize: '4.37 MB',
                limitedResolution: '2000 x 1863',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7HV50RNN2MHE6QZY4BJYQ8P.pdf',
                instruments: ['NIRCam'],
                exposureInDays: 1,
            },
        ],
    },
    {
        groupName: "Stephan's Quintet",
        description: `Image of a group of four galaxies that appear close to each other in the sky: two in the middle, one
toward the top, one to the upper left. In addition, there is a large bright patch toward the right.
The galaxy at the top has a bright reddish core and is surrounded by swirls of blue and purple filaments
that travel inward to its bright core, also highlighted by eight diffraction spikes.
The galaxy on the left is a mass of purple gas surrounding a dim red core. The mass is made from small
clumps, each slightly illuminated.
The two galaxies in the middle have two bright, blue cores, surrounded by purple wisps.
The bright patch to the right is made from clouds of blue and purple, strung together in filament-like
bands.
Surrounding the galaxies is a background peppered with red, blue, and purple dots, which are distant
stars and galaxies.
The shape of the image itself is irregular, like a number of squares of different sizes overlapping each
other. The image has the same scale and orientation as the NIRCam/MIRI composite image, but it does
not include the elliptical galaxy at the bottom of the group.`,
        images: [
            {
                title: "Stephan's Quintet (MIRI Image) ",
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/034/01G7DBCJA1M1SSGKDMH7F5XMBE',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7DBWJJF54AX1DDP8KJ6XCPQ.png',
                fullResolutionSize: '5.73 MB',
                fullResolution: '2444 x 2049',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7NDA42495H05DYFR9XPZSCA.png',
                limitedResolutionSize: '3.91 MB',
                limitedResolution: '2000 x 1676',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7Q2VJJAZRC9P1F5NXACEH8B.pdf',
                instruments: ['MIRI'],
                exposureInDays: 3,
            },
            {
                title: "Stephan's Quintet (NIRCam and MIRI Composite Image) ",
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/034/01G7DA5ADA2WDSK1JJPQ0PTG4A',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7DB1FHPMJCCY59CQGZC1YJQ.png',
                fullResolutionSize: '181.64 MB',
                fullResolution: '12654 x 12132',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7NCYE040TD50H3BPMP4FRS6.png',
                limitedResolutionSize: '4.47 MB',
                limitedResolution: '2000 x 1917',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7Q2YGFGT5XKT4QZ59D48DKN.pdf',
                instruments: ['NIRCam', 'MIRI'],
                exposureInDays: 4,
            },
            {
                title: "Stephan's Quintet (NIRCam Image) ",
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/034/01G7DA5ADA2WDSK1JJPQ0PTG4A',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ND2W5V22D3Y6CCFGYQJX3J.png',
                fullResolutionSize: '172.05 MB',
                fullResolution: '12654 x 12132',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ND57BS1QQ30P5KCNHMP4FX.png',
                limitedResolutionSize: '4.88 MB',
                limitedResolution: '2000 x 1917',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7Q2YGFGT5XKT4QZ59D48DKN.pdf',
                instruments: ['NIRCam'],
                exposureInDays: 1,
            },
        ],
    },
    {
        groupName: '“Cosmic Cliffs”',
        description: `A star field is speckled across the image. The stars are of many sizes. They range from small, faint points
of light to larger, closer, brighter, and more fully resolved stars with 8-point diffraction spikes. The stars
vary in color, the majority of which have a blue or orange hue. The upper-right portion of the image has
wispy, translucent, cloud-like streaks rising from the nebula running along the bottom portion of the
image. The cloudy formation shown across the bottom varies in density and ranges from translucent to
opaque. The cloud-like structure of the nebula contains ridges, peaks, and valleys – an appearance very
similar to a mountain range. Many of the larger stars shine brightly along the edges of the nebula’s
cloud-like structure`,
        images: [
            {
                title: '“Cosmic Cliffs” in the Carina Nebula (NIRCam and MIRI Composite Image)',
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/031/01G780WF1VRADDSD5MDNDRKAGY',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ETY4TD7VEMJC97Q7Q894DY.png',
                fullResolutionSize: '47.84 MB',
                fullResolution: '11264 x 3904',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ETZ8AXXQ2EJZ9T448C88HK.png',
                limitedResolutionSize: '1.53 MB',
                limitedResolution: '2000 x 693',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7G6TDSNQ81080D26MNVKVKM.pdf',
                instruments: ['NIRCam', 'MIRI'],
                exposureInDays: 2,
            },
            {
                title: '“Cosmic Cliffs” in the Carina Nebula (NIRCam Image)',
                postUrl:
                    'https://webbtelescope.org/contents/media/images/2022/031/01G77PKB8NKR7S8Z6HBXMYATGJ',
                fullResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ETPF7DVBJAC42JR5N6EQRH.png',
                fullResolutionSize: '124.71 MB',
                fullResolution: '14575 x 8441',
                limitedResolutionUrl:
                    'https://stsci-opo.org/STScI-01G7ETQTCAQ2HBGGHTYCQ53FGG.png',
                limitedResolutionSize: '3.33 MB',
                limitedResolution: '2000 X 1158',
                textDescriptionUrl:
                    'https://stsci-opo.org/STScI-01G7G6CD6XVGXF6WKVA2DWS0JD.pdf',
                instruments: ['NIRCam'],
                exposureInDays: 1,
            },
        ],
    },
];

export const imageGroups: ImageGroup[] = IMAGES_DATA.map((imageGroup) => ({
    ...imageGroup,
    images: imageGroup.images.map((image) => {
        const id = image.limitedResolutionUrl.split('/')[3];
        return {
            ...image,
            id,
            optimizedUrl: `https://tenemo.imgix.net/${id}`,
        };
    }),
}));
