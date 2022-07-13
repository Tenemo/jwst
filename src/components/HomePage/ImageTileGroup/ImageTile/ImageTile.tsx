import React, { ReactElement, Fragment } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { INSTRUMENT_LINKS, Image } from 'images/imagesList';

type Props = {
    image: Image;
};

export const ImageTile = ({
    image: {
        title,
        postUrl,
        fullResolutionUrl,
        fullResolutionSize,
        fullResolution,
        optimizedUrl,
        limitedResolutionUrl,
        limitedResolutionSize,
        limitedResolution,
        instruments,
        exposureInDays,
    },
}: Props): ReactElement => {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const imageWidth = isLg ? 600 : 300;
    const imageUrl = `${optimizedUrl}?auto=format&fit=clip&w=${imageWidth}`;

    return (
        <Box
            key={title}
            m={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h3>{title}</h3>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <img
                    alt={title}
                    src={imageUrl}
                    srcSet={`
                        ${imageUrl} dpr=1 1x,
                        ${imageUrl} dpr=2 2x,
                        ${imageUrl} dpr=3 3x,
                    `}
                />
            </Box>
            <a href={postUrl}>News post by STScI</a>
            <Box>
                <a href={fullResolutionUrl}>Full resolution</a>
                &nbsp;({fullResolution},&nbsp;
                {fullResolutionSize})
            </Box>
            <Box>
                <a href={limitedResolutionUrl}>Lower resolution</a>
                &nbsp;({limitedResolution},&nbsp;
                {limitedResolutionSize})
            </Box>
            <Box>Exposure time: &lt;{exposureInDays * 24}h</Box>
            <Box>
                Instruments:{' '}
                {instruments.map((instrument) => (
                    <Fragment key={instrument}>
                        <a
                            href={
                                INSTRUMENT_LINKS[
                                    instrument
                                ] as unknown as string
                            }
                        >
                            {instrument}
                        </a>{' '}
                    </Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default ImageTile;
