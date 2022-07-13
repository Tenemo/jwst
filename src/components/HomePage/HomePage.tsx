import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import { imageGroups } from 'images/imagesList';

import ImageTileGroup from './ImageTileGroup';
import styles from './homePage.scss';

export const HomePage = (): ReactElement => {
    return (
        <Box
            className={styles.homePage}
            component="main"
            px={2}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            {imageGroups.map((imageGroup) => (
                <ImageTileGroup imageGroup={imageGroup} />
            ))}
        </Box>
    );
};

export default HomePage;
