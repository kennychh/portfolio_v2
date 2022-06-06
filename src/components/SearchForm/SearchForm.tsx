import './SearchForm.css';
import React, { useRef } from 'react';
import { FormControl, InputBase } from "@mui/material"

type SearchFormProps = {
    theme: string;
    width?: string;
    placeholder?: string;
}
export const SearchForm: React.FC<SearchFormProps> = ({ width = '600px', placeholder = 'Enter your email', theme }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <FormControl className="search-form" sx={styles.formControl(width)}>
                <input className={`form-control form-control-lg ${theme}`} placeholder={placeholder} style={styles.inputBase} />
            </FormControl>
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
        padding: '27.5px 181px 27.5px 32px',
        outline: 'none',
    },
}
