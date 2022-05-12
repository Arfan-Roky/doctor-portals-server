import React from 'react';

const MainButton = ({children}) => {
    return (
        <button  className="btn px-8 bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400 ">{children}</button>
    );
};

export default MainButton;