import { FC, useState, useRef, useEffect } from 'react';

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const options = [
        { value: 'available', label: 'Сначала в наличии' },
        { value: 'A-Z', label: 'По имени (A-Z)' },
        { value: 'Z-A', label: 'По имени (Z-A)' },
        { value: 'newest', label: 'Сначала новее' },
        { value: 'oldest', label: 'Сначала старше' },
        { value: 'cheapest', label: 'Сначала дешевле' },
        { value: 'expensive', label: 'Сначала дороже' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const styles = {
        selectContainer: {
            position: 'relative' as const,
            width: 'fit-content',
        },
        select: {
            padding: '8px 12px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            paddingLeft: '28px',
            paddingRight: '12px',
            outline: 'none',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `url("/images/Sort.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: '16px',
        },
        dropdown: {
            position: 'absolute' as const,
            width: '100%',
            top: '100%',
            left: '27px',
            right: 0,
            backgroundColor: '#fff',
            border: '1px solid #000',
            borderRadius: '0',
            zIndex: 1000,
            display: isOpen ? 'block' : 'none',
        },
        option: {
            padding: '3px 4px',
            fontSize: '14px',
            cursor: 'pointer',
        }
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div style={styles.selectContainer} ref={dropdownRef}>
            <div 
                style={styles.select} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption?.label}
            </div>
            <div style={styles.dropdown}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        style={styles.option}
                        onClick={() => {
                            onChange(option.value);
                            setIsOpen(false);
                        }}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;