export const INSTRUMENT_LINKS = {
    NIRCam: ['https://en.wikipedia.org/wiki/NIRCam'],
    MIRI: ['https://en.wikipedia.org/wiki/MIRI_(Mid-Infrared_Instrument)'],
} as const;

type Image = {
    title: string;
    postUrl: string;
    fullResolutionUrl: string;
    fullResolutionSize: string;
    limitedResolutionUrl: string;
    textDescriptionUrl: string;
    instruments: (keyof typeof INSTRUMENT_LINKS)[];
    exposureInDays: number;
    group?: string;
};

export const images: Image[] = [
    {
        title: "Webb's First Deep Field Unveiled (NIRCam Image)",
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/035/01G7DCWB7137MYJ05CSH1Q5Z1Z',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7JJADTH90FR98AKKJFKSS0B.png',
        fullResolutionSize: '26.74 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7PX26GGXRJEYKH2CY53KMV0.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7PX2S2K0YMDY77Z7JVM7QQV.pdf',
        instruments: ['NIRCam'],
        exposureInDays: 1,
    },
    {
        title: 'Southern Ring Nebula (MIRI Image)',
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/033/01G70C5F6Z698YC9E1DEBA3WET',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G786E1PW9RMK51EP0DZSM03B.png',
        fullResolutionSize: '1.66 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G786E1PW9RMK51EP0DZSM03B.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7HV69WB83EX4296MH0W5PM6.pdf',
        instruments: ['MIRI'],
        exposureInDays: 1,
        group: 'Southern Ring Nebula',
    },
    {
        title: 'Southern Ring Nebula (NIRCam Image)',
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/033/01G70BGTSYBHS69T7K3N3ASSEB',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G79R51118N21AAZ9MZ8XWWQ6.png',
        fullResolutionSize: '21.30 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G79RF5F5TPZJSDT3Y640XNQ1.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7HV50RNN2MHE6QZY4BJYQ8P.pdf',
        instruments: ['NIRCam'],
        exposureInDays: 1,
        group: 'Southern Ring Nebula',
    },
    {
        title: "Stephan's Quintet (MIRI Image) ",
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/034/01G7DBCJA1M1SSGKDMH7F5XMBE',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7DBWJJF54AX1DDP8KJ6XCPQ.png',
        fullResolutionSize: '5.73 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7NDA42495H05DYFR9XPZSCA.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7Q2VJJAZRC9P1F5NXACEH8B.pdf',
        instruments: ['MIRI'],
        exposureInDays: 3,
        group: "Stephan's Quintet",
    },
    {
        title: "Stephan's Quintet (NIRCam and MIRI Composite Image) ",
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/034/01G7DA5ADA2WDSK1JJPQ0PTG4A',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7DB1FHPMJCCY59CQGZC1YJQ.png',
        fullResolutionSize: '181.64 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7NCYE040TD50H3BPMP4FRS6.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7Q2YGFGT5XKT4QZ59D48DKN.pdf',
        instruments: ['NIRCam', 'MIRI'],
        exposureInDays: 4,
        group: "Stephan's Quintet",
    },
    {
        title: "Stephan's Quintet (NIRCam Image) ",
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/034/01G7DA5ADA2WDSK1JJPQ0PTG4A',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ND2W5V22D3Y6CCFGYQJX3J.png',
        fullResolutionSize: '172.05 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ND57BS1QQ30P5KCNHMP4FX.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7Q2YGFGT5XKT4QZ59D48DKN.pdf',
        instruments: ['NIRCam'],
        exposureInDays: 1,
        group: "Stephan's Quintet",
    },
    {
        title: '“Cosmic Cliffs” in the Carina Nebula (NIRCam and MIRI Composite Image)',
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/031/01G780WF1VRADDSD5MDNDRKAGY',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ETY4TD7VEMJC97Q7Q894DY.png',
        fullResolutionSize: '47.84 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ETZ8AXXQ2EJZ9T448C88HK.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7G6TDSNQ81080D26MNVKVKM.pdf',
        instruments: ['NIRCam', 'MIRI'],
        exposureInDays: 2,
        group: '“Cosmic Cliffs”',
    },
    {
        title: '“Cosmic Cliffs” in the Carina Nebula (NIRCam Image)',
        postUrl:
            'https://webbtelescope.org/contents/media/images/2022/031/01G77PKB8NKR7S8Z6HBXMYATGJ',
        fullResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ETPF7DVBJAC42JR5N6EQRH.png',
        fullResolutionSize: '124.71 MB',
        limitedResolutionUrl:
            'https://stsci-opo.org/STScI-01G7ETQTCAQ2HBGGHTYCQ53FGG.png',
        textDescriptionUrl:
            'https://stsci-opo.org/STScI-01G7G6CD6XVGXF6WKVA2DWS0JD.pdf',
        instruments: ['NIRCam'],
        exposureInDays: 1,
        group: '“Cosmic Cliffs”',
    },
];
