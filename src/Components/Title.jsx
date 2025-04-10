import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Title = ({ title, des }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className={`text-sm uppercase font-light tracking-widest ${
                theme === 'dark' ? 'text-designColor-dark' : 'text-designColor/80'
            }`}>
                {title}
            </h3>
            <h1 className={`text-4xl md:text-5xl font-bold capitalize ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
                {des}
            </h1>
        </div>
    );
}

export default Title;