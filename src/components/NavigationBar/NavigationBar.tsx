
import React from 'react';
import { FormControl, Grid } from "@mui/material"
import { maxWidth } from '@mui/system';

export const NavigationBar: React.FC = () => {
    return (
        <div style={styles.navigationBar}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={styles.navigationBarItems}
            >
                <p style={styles.title}>
                    Kenny Chan
                </p>
                <ul style={styles.sectionLinkContainer}>
                    <li style={styles.sectionLink}>
                        Projects
                    </li>
                    <li style={styles.sectionLink}>
                        Work
                    </li>
                    <li style={styles.sectionLink}>
                        About
                    </li>
                    <li style={styles.sectionLink}>
                        Contact
                    </li>
                </ul>
                <button className="cta-button" style={styles.ctaButton}> Let's chat </button>


            </Grid>
        </div>
    );
}

const styles = {
    formControl: (width: string) => ({
        width: width
    }),
    ctaButton: {
        backgroundColor: 'var(--container-primary)',
        color: 'var(--on-container-primary)',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Poppins',
        padding: '12.5px 26px',
        borderRadius: '16px',
        borderWidth: '0px',
        cursor: 'pointer',
      },
    navigationBar: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        outlineWidth: '0px',
        border: '0px',
        outline: 'none',
        width: '100%',
        height: '80px',
        overflowX: 'clip',
        backgroundColor: 'var(--background)',
        position: 'sticky',
        top: '0',
    },
    navigationBarItems: {
        padding: '0px 30px 0px 30px',
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto'
    },
    sectionLinkContainer: {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: '0',
    },
    sectionLink: {
        margin: '0 1.6rem',
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontFamily: ' "Euclid", "Arial", sans-serif',
        fontSize: '22px',
        fontWeight: '600',
        padding: '0'
    }
}
