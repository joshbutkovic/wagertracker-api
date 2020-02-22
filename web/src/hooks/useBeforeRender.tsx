import { useState, useEffect } from 'react';

export const useBeforeRender = (callback: any) => {
    const [rendered, setRendered] = useState<boolean>(false);
    useEffect(() => setRendered(true), [rendered]);
    if (!rendered) {
        callback();
    }
};
