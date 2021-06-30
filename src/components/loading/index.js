import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    return (
        // Spinner - when user clicks on a profile, we have used css to run a spinner around it
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};
