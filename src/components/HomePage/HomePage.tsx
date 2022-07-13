import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import { imageGroups } from 'images/imagesList';

import ImageTileGroup from './ImageTileGroup';

export const HomePage = (): ReactElement => {
    return (
        <Box
            component="main"
            px={3}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            {imageGroups.map((imageGroup) => (
                <ImageTileGroup
                    key={imageGroup.groupName}
                    imageGroup={imageGroup}
                />
            ))}
        </Box>
    );
};

export default HomePage;
