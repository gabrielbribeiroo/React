import React from 'react';
import './StylesExamples.css'; // Importing the CSS file
import styles from './StylesExamples.module.css'; // Importing the SCSS file

const StylesExamples = () => {
    
    // inline
    const inlineStyle = {
        color: 'blue',
        fontSize: '20px'
    };

    return (
        <div>
            <h2 style={inlineStyle}>Inline Styles Example</h2>

            {/* style file */}
            <p className='text'>My CSS</p>

            {/* CSS Modules */}
            <p className={styles.textPurple}>My CSS Modules</p>
        </div>
    )
}

export default StylesExamples