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
            justifyContent="space-between"
            sx={{
                borderBottom: `1px solid ${theme.palette.text.primary}`,
                p: 2,
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Link
                    href="https://github.com/Tenemo/jwst"
                    sx={{
                        pt: '6px',
                        cursor: 'pointer',
                    }}
                    title="github.com/Tenemo/jwst"
                >
                    <GitHubIcon />
                </Link>
                <Typography sx={{ ml: 1 }}>
                    <Link
                        href="https://github.com/Tenemo"
                        sx={{
                            pt: '6px',
                            cursor: 'pointer',
                        }}
                        title="github.com/Tenemo"
                    >
                        by Piotr
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
