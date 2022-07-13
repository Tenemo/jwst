import React, { ReactElement, memo } from 'react';
import { Box, Typography } from '@mui/material';

import { ImageGroup } from 'images/imagesList';

import ImageTile from './ImageTile';

type Props = {
    imageGroup: ImageGroup;
};

export const ImageTileGroup = ({
    imageGroup: { groupName, description, images },
}: Props): ReactElement => {
    return (
        <Box sx={{ py: 4 }}>
            <Typography gutterBottom sx={{ fontSize: '1.5em' }} variant="h2">
                {groupName}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {images.map((image) => (
                    <ImageTile
                        key={image.title}
                        description={description}
                        image={image}
                    />
                ))}
            </Box>
            <Box>{description}</Box>
        </Box>
    );
};

export default memo(ImageTileGroup);
