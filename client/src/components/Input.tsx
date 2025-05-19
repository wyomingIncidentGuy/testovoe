import { FC } from 'react';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
    placeholder?: string;
}

const Input: FC<InputProps> = ({ value, onChange, onSearch, placeholder }) => {
    const styles = {
        inputContainer: {
            display: 'flex',
            alignItems: 'center',
            width: '445px',
            height: '36px',
            padding: '6px 4px 6px 10px',
            borderRadius: '5px',
            border: '1px solid #D9D9D9',
            backgroundColor: '#fff',
        },
        input: {
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            width: '100%',
            padding: 0,
            backgroundColor: 'transparent'
        },
        searchButton: {
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div style={styles.inputContainer}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                style={styles.input}
            />
            <button 
                style={styles.searchButton}
                onClick={onSearch}
            >
                <img src="/images/search-button.svg" alt="search" />
            </button>
        </div>
    )
}

export default Input; 