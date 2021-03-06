import React, { ReactElement, Fragment, useState, memo } from 'react';
import {
    Box,
    useMediaQuery,
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { INSTRUMENT_LINKS, Image } from 'images/imagesList';

type Props = {
    image: Image;
    description: string;
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
        textDescriptionUrl,
        instruments,
        exposureInDays,
    },
    description,
}: Props): ReactElement => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const theme = useTheme();
    let imageWidth = 600;
    if (useMediaQuery(theme.breakpoints.up('md'))) {
        imageWidth = 900;
    }
    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        imageWidth = 1200;
    }

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
                <Button
                    onClick={() => setIsModalOpen(true)}
                    sx={{ all: 'unset', cursor: 'pointer' }}
                >
                    <img
                        alt={title}
                        src={imageUrl}
                        style={{ maxWidth: '100%' }}
                    />
                </Button>
            </Box>
            <Grid container spacing={2}>
                <Grid item lg={4} sm={6}>
                    <Box>
                        <a href={postUrl}>News post by STScI</a>
                    </Box>
                    <Box>
                        {' '}
                        <a href={fullResolutionUrl}>Full resolution</a>
                        &nbsp;({fullResolution},&nbsp;
                        {fullResolutionSize})
                    </Box>
                    <Box>
                        <a href={limitedResolutionUrl}>Lower resolution</a>
                        &nbsp;({limitedResolution},&nbsp;
                        {limitedResolutionSize})
                    </Box>
                </Grid>
                <Grid item lg={8} sm={6}>
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
                    <Box>
                        <a href={textDescriptionUrl}>Technical description</a>
                        &nbsp;(PDF)
                    </Box>
                </Grid>
            </Grid>

            <Dialog
                aria-labelledby="image-modal-title"
                fullScreen
                onClose={() => setIsModalOpen(false)}
                open={isModalOpen}
            >
                <DialogTitle id="image-modal-title">{title}</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            alt={title}
                            src={limitedResolutionUrl}
                            width="100%"
                        />
                    </Box>
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setIsModalOpen(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default memo(ImageTile);
