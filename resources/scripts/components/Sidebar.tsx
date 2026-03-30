import React, { ReactNode, useEffect, useRef } from 'react';
import '@/assets/css/sidebar.css';

type ParentProps = {
    children: ReactNode;
};

export default ({ children }: Omit<ParentProps, 'render'>) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = sidebarRef.current;
            const target = event.target as HTMLElement;
            
            if (sidebar && sidebar.classList.contains('active-nav')) {
                if (!sidebar.contains(target) && !target.closest('.navbar-button')) {
                    sidebar.classList.remove('active-nav');
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='sidebar' id='sidebar' ref={sidebarRef}>
                {children}
            </div>
        </>
    );
};
