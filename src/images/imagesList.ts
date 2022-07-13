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
        description: `
Thousands of galaxies flood this near-infrared image of galaxy cluster SMACS 0723. High-resolution imaging from NASA’s James Webb Space Telescope combined with a natural effect known as gravitational lensing made this finely detailed image possible.

First, focus on the galaxies responsible for the lensing: the bright white elliptical galaxy at the center of the image and smaller white galaxies throughout the image. Bound together by gravity in a galaxy cluster, they are bending the light from galaxies that appear in the vast distances behind them. The combined mass of the galaxies and dark matter act as a cosmic telescope, creating magnified, contorted, and sometimes mirrored images of individual galaxies.

Clear examples of mirroring are found in the prominent orange arcs to the left and right of the brightest cluster galaxy. These are lensed galaxies – each individual galaxy is shown twice in one arc. Webb’s image has fully revealed their bright cores, which are filled with stars, along with orange star clusters along their edges.

Not all galaxies in this field are mirrored – some are stretched. Others appear scattered by interactions with other galaxies, leaving trails of stars behind them.

Webb has refined the level of detail we can observe throughout this field. Very diffuse galaxies appear like collections of loosely bound dandelion seeds aloft in a breeze. Individual “pods” of star formation practically bloom within some of the most distant galaxies – the clearest, most detailed views of star clusters in the early universe so far.

One galaxy speckled with star clusters appears near the bottom end of the bright central star’s vertical diffraction spike – just to the right of a long orange arc. The long, thin ladybug-like galaxy is flecked with pockets of star formation. Draw a line between its “wings” to roughly match up its star clusters, mirrored top to bottom. Because this galaxy is so magnified and its individual star clusters are so crisp, researchers will be able to study it in exquisite detail, which wasn’t previously possible for galaxies this distant.

The galaxies in this scene that are farthest away – the tiniest galaxies that are located well behind the cluster – look nothing like the spiral and elliptical galaxies observed in the local universe. They are much clumpier and more irregular. Webb’s highly detailed image may help researchers measure the ages and masses of star clusters within these distant galaxies. This might lead to more accurate models of galaxies that existed at cosmic “spring,” when galaxies were sprouting tiny “buds” of new growth, actively interacting and merging, and had yet to develop into larger spirals. Ultimately, Webb’s upcoming observations will help astronomers better understand how galaxies form and grow in the early universe.`,
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
        description: `
NASA’s Webb Telescope has revealed the cloak of dust around the second star, shown at left in red, at the center of the Southern Ring Nebula for the first time. It is a hot, dense white dwarf star.

As it transformed into a white dwarf, the star periodically ejected mass – the shells of material you see here. As if on repeat, it contracted, heated up – and then, unable to push out more material, pulsated.

At this stage, it should have shed its last layers. So why is the red star still cloaked in dust? Was material transferred from its companion? Researchers will begin to pursue answers soon.

The bluer star at right in this image has also shaped the scene. It helps stir up the ejected material. The disk around the stars is also wobbling, shooting out spirals of gas and dust over long periods of time. This scene is like witnessing a rotating sprinkler that’s finished shooting out material in all directions over thousands of years.

Webb captured this scene in mid-infrared light – most of which can only be observed from space. Mid-infrared light helps researchers detect objects enshrouded in dust, like the red star.

This Mid-Infrared Instrument (MIRI) image also offers an incredible amount of detail, including a cache of distant galaxies in the background. Most of the multi-colored points of light are galaxies, not stars. Tiny triangles mark the circular edges of stars, including a blue one within the nebula’s red bottom-most edges, while galaxies look like misshapen circles, straight lines, and spirals.`,
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
        description: `
With its powerful, mid-infrared vision, the Mid-Infrared Instrument (MIRI) shows never-before-seen details of Stephan’s Quintet, a visual grouping of five galaxies. MIRI pierced through dust-enshrouded regions to reveal huge shock waves and tidal tails, gas and stars stripped from the outer regions of the galaxies by interactions. It also unveiled hidden areas of star formation. The new information from MIRI provides invaluable insights into how galactic interactions may have driven galaxy evolution in the early universe.

This image contains one more MIRI filter than was used in the NIRCam-MIRI composite picture. The image processing specialists at the Space Telescope Science Institute in Baltimore opted to use all three MIRI filters and the colors red, green and blue to most clearly differentiate the galaxy features from each other and the shock waves between the galaxies.

In this image, red denotes dusty, star-forming regions, as well as extremely distant, early galaxies and galaxies enshrouded in thick dust. Blue point sources show stars or star clusters without dust. Diffuse areas of blue indicate dust that has a significant amount of large hydrocarbon molecules. For small background galaxies scattered throughout the image, the green and yellow colors represent more distant, earlier galaxies that are rich in these hydrocarbons as well.

Stephan’s Quintet’s topmost galaxy – NGC 7319 – harbors a supermassive black hole 24 million times the mass of the Sun. It is actively accreting material and puts out light energy equivalent to 40 billion Suns. MIRI sees through the dust surrounding this black hole to unveil the strikingly bright active galactic nucleus.

As a bonus, the deep mid-infrared sensitivity of MIRI revealed a sea of previously unresolved background galaxies reminiscent of Hubble’s Deep Fields.

Together, the five galaxies of Stephan’s Quintet are also known as the Hickson Compact Group 92 (HCG 92). Although called a “quintet,” only four of the galaxies are truly close together and caught up in a cosmic dance. The fifth and leftmost galaxy, called NGC 7320, is well in the foreground compared with the other four. NGC 7320 resides 40 million light-years from Earth, while the other four galaxies (NGC 7317, NGC 7318A, NGC 7318B, and NGC 7319) are about 290 million light-years away. This is still fairly close in cosmic terms, compared with more distant galaxies billions of light-years away. Studying these relatively nearby galaxies helps scientists better understand structures seen in a much more distant universe.

This proximity provides astronomers a ringside seat for witnessing the merging of and interactions between galaxies that are so crucial to all of galaxy evolution. Rarely do scientists see in so much exquisite detail how interacting galaxies trigger star formation in each other, and how the gas in these galaxies is being disturbed. Stephan’s Quintet is a fantastic “laboratory” for studying these processes fundamental to all galaxies.

Tight groups like this may have been more common in the early universe when their superheated, infalling material may have fueled very energetic black holes called quasars. Even today, the topmost galaxy in the group – NGC 7319 – harbors an active galactic nucleus, a supermassive black hole that is actively pulling in material.`,
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
        description: `
Astronomers using NASA’s James Webb Space Telescope combined the capabilities of the telescope’s two cameras to create a never-before-seen view of a star-forming region in the Carina Nebula. Captured in infrared light by the Near-Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI), this combined image reveals previously invisible areas of star birth.

What looks much like craggy mountains on a moonlit evening is actually the edge of a nearby, young, star-forming region known as NGC 3324. Called the Cosmic Cliffs, this rim of a gigantic, gaseous cavity is roughly 7,600 light-years away.

The cavernous area has been carved from the nebula by the intense ultraviolet radiation and stellar winds from extremely massive, hot, young stars located in the center of the bubble, above the area shown in this image. The high-energy radiation from these stars is sculpting the nebula’s wall by slowly eroding it away.

NIRCam – with its crisp resolution and unparalleled sensitivity – unveils hundreds of previously hidden stars, and even numerous background galaxies. In MIRI’s view, young stars and their dusty, planet-forming disks shine brightly in the mid-infrared, appearing pink and red. MIRI reveals structures that are embedded in the dust and uncovers the stellar sources of massive jets and outflows. With MIRI, the hydrocarbons and other chemical compounds on the surface of the ridges glow, giving the appearance of jagged rocks.

Several prominent features in this image are described below.

-- The faint “steam” that appears to rise from the celestial “mountains” is actually hot, ionized gas and hot dust streaming away from the nebula due to intense, ultraviolet radiation.

-- Peaks and pillars rise above the glowing wall of gas, resisting the blistering ultraviolet radiation from the young stars.

-- Bubbles and cavities are being blown by the intense radiation and stellar winds of newborn stars.

-- Protostellar jets and outflows, which appear in gold, shoot from dust-enshrouded, nascent stars. MIRI uncovers the young, stellar sources producing these features. For example, a feature at left that looks like a comet with NIRCam is revealed with MIRI to be one cone of an outflow from a dust-enshrouded, newborn star.

-- A “blow-out” erupts at the top-center of the ridge, spewing material into the interstellar medium. MIRI sees through the dust to unveil the star responsible for this phenomenon.

-- An unusual “arch,” looking like a bent-over cylinder, appears in all wavelengths shown here.

This period of very early star formation is difficult to capture because, for an individual star, it lasts only about 50,000 to 100,000 years – but Webb’s extreme sensitivity and exquisite spatial resolution have chronicled this rare event.

NGC 3324 was first catalogued by James Dunlop in 1826. Visible from the Southern Hemisphere, it is located at the northwest corner of the Carina Nebula (NGC 3372), which resides in the constellation Carina. The Carina Nebula is home to the Keyhole Nebula and the active, unstable supergiant star called Eta Carinae. `,
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
