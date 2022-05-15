import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
        <PlaceholderLoading shape="rect" width={100} height={100} />
        <PlaceholderLoading shape='circle' width={100} height={100}></PlaceholderLoading>
        </div>
    );
};

export default Spinner;