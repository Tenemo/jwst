import React, { ReactElement, memo } from 'react';
import { Typography } from '@mui/material';

type Props = {
    description: string;
};

export const ImageDescription = ({ description }: Props): ReactElement => {
    return (
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>{description}</Typography>
    );
};

export default memo(ImageDescription);
