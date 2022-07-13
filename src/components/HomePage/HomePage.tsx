import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import { images, INSTRUMENT_LINKS } from 'images/imagesList';

export const HomePage = (): ReactElement => {
    return (
        <Box component="main" px={4}>
            {images.map(
                ({
                    title,
                    postUrl,
                    fullResolutionUrl,
                    fullResolutionSize,
                    limitedResolutionUrl,
                    textDescriptionUrl,
                    instruments,
                    exposureInDays,
                }) => (
                    <Box
                        key={title}
                        pb={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <h3>{title}</h3>
                        <img
                            alt={title}
                            src={`https://tenemo.imgix.net/${
                                limitedResolutionUrl.split('/')[3]
                            }?auto=format&fit=clip&w=600`}
                        />
                        <a href={postUrl}>News post by STScI</a>
                        <Box>
                            <a href={textDescriptionUrl}>Description</a>
                            &nbsp;(PDF)
                        </Box>
                        <Box>
                            <a href={fullResolutionUrl}>Full resolution</a>
                            &nbsp;(
                            {fullResolutionSize})
                        </Box>
                        <Box>Exposure: &lt;{exposureInDays * 24}h</Box>
                        <Box>
                            Instruments:{' '}
                            {instruments.map((instrument) => (
                                <>
                                    <a
                                        href={
                                            INSTRUMENT_LINKS[
                                                instrument
                                            ] as unknown as string
                                        }
                                    >
                                        {instrument}
                                    </a>{' '}
                                </>
                            ))}
                        </Box>
                    </Box>
                ),
            )}
        </Box>
    );
};

export default HomePage;
