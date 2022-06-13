import './Portfolio.css';
import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import { SearchForm, Button } from '../../components';
import useWindowDimensions from '../../utils.js';
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components';


const Portfolio: React.FC = () => {
    const { height, width } = useWindowDimensions();
    var navBarHeight = '-80px';
    const [squeeze, setSqueeze] = useState(true)
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        const homeContainerElement = document.querySelector<HTMLElement>('.home-container')!;
        if (currentScroll >= 500 && squeeze) {
            homeContainerElement.style.animation = 'home-container-squeeze 1 0.5s ease-in-out forwards';
            setSqueeze(false)
        } else if (currentScroll < 500 && !squeeze) {
            homeContainerElement.style.animation = 'home-container-unsqueeze 1 0.5s ease-in-out forwards';
            setSqueeze(true)
        }
    });

    return (
        <div className='portfolio-container'>
            <h1 style={
                styles.h1
            }>Some things I've built</h1>
        </div>
    );
}

const styles = {
    ctaButton: {
        backgroundColor: 'var(--on-background)',
        color: 'var(--background)',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Poppins',
        padding: '12.5px 26px',
        borderRadius: '16px',
        borderWidth: '0px',
        cursor: 'pointer',
        zIndex: 1,
    },
    secondaryButton: {
        backgroundColor: 'var(--container-primary)',
        color: 'var(--on-container-primary)',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Poppins',
        padding: '12.5px 26px',
        borderRadius: '16px',
        borderWidth: '0px',
        cursor: 'pointer',
        marginLeft: '16px'
    },
    p: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: '22px',
        maxWidth: '560px',
        color: 'var(--text-primary)',
        paddingBottom: '48px',
        zIndex: 1
    },
    h1: {
        fontWeight: 600,
        letterSpacing: '-4px',
        maxWidth: '700px',
        fontSize: '72px',
        lineHeight: '80px',
        color: 'var(--text-primary)',
        paddingBottom: '16px',
        margin: 0,
        zIndex: 0,
    },
    h2: {
        fontWeight: 600,
        maxWidth: '900px',
        fontSize: '52px',
        lineHeight: '60px',
        color: 'var(--text-primary)',
        paddingBottom: '24px',
        margin: 0,
        zIndex: 1,
    },
    homeLowerSection: {
        height: '800px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    }

}

export default Portfolio;
