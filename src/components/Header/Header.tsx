import React, { ReactElement } from 'react';
import { useTheme, Box, Link, Typography } from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';

export const Header = (): ReactElement => {
    const theme = useTheme();

    return (
        <Box
            alignItems="center"
            component="header"
            display="flex"
            sx={{
                borderBottom: `1px solid ${theme.palette.text.primary}`,
                p: 2,
                justifyContent: 'space-between',
            }}
        >
            <Link
                href="/"
                sx={{ fontSize: '1.5em' }}
                underline="none"
                variant="h1"
            >
                James Webb Space Telescope Images
            </Link>
            <Link
                href="https://github.com/Tenemo/jwst"
                sx={{
                    pt: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                }}
                title="github.com/Tenemo/jwst"
            >
                <GitHubIcon />
                <Typography
                    sx={{
                        ml: 0.5,
                        mt: 0.2,
                    }}
                >
                    GitHub
                </Typography>
            </Link>
        </Box>
    );
};

export default Header;
