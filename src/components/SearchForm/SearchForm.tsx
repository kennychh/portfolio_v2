import './SearchForm.css';
import React from 'react';
import { FormControl, Grid } from "@mui/material"
import useCollapse from 'react-collapsed';

type SearchFormProps = {
    theme: string;
    placeholder?: string;
}
export const SearchForm: React.FC<SearchFormProps> = ({ placeholder = 'Subject: Say Hello!', theme }) => {
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    return (
        <div style={{ textAlign: 'center' }}>
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="start"
            >
                <div className={`search-form ${focused ? 'focused' : ''}`} >
                    <input onFocus={onFocus} onBlur={onBlur} className={`form-control form-control-lg ${theme}`} placeholder={placeholder} style={styles.inputBase} />
                </div>
                
            </Grid>
        </div>
    );
}

const styles = {
    formControl: (width: string) => ({
        width: width
    }),
    inputBase: {
        borderRadius: '32px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        outlineWidth: '0px',
        border: '0px',
        outline: 'none',
        width: '400px',
        padding:' 0px 181px 0px 32px',
    },
}
