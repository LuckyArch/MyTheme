import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import { breakpoint } from '@/theme';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    ${breakpoint('sm')`
        ${tw`w-4/5 mx-auto`}
    `};

    ${breakpoint('md')`
        ${tw`p-10`}
    `};

    ${breakpoint('lg')`
        ${tw`w-3/5`}
    `};

    ${breakpoint('xl')`
        ${tw`w-full`}
        max-width: 700px;
    `};
`;

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        {title && <h2 css={tw`text-3xl text-center text-neutral-100 font-medium py-4`}>{title}</h2>}
        <FlashMessageRender css={tw`mb-2 px-1`} />
        <Form {...props} ref={ref}>
            <div className={'md:flex w-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl p-6 md:pl-0 mx-1 relative overflow-hidden'}>
                <div className={'absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-500/80 to-fuchsia-500/80 shadow-[0_0_15px_rgba(139,92,246,0.5)]'} />
                <div css={tw`flex-none select-none mb-6 md:mb-0 self-center`}>
                    <img src={'/assets/svgs/pterodactyl.svg'} className={'block w-48 md:w-64 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-500 hover:scale-105'} />
                </div>
                <div css={tw`flex-1 text-neutral-100`}>{props.children}</div>
            </div>
        </Form>
        <p css={tw`text-center text-neutral-400 text-xs mt-4`}>
            &copy; 2015 - {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://pterodactyl.io'}
                target={'_blank'}
                css={tw`no-underline text-neutral-400 hover:text-neutral-200`}
            >
                Pterodactyl Software
            </a>
        </p>
    </Container>
));
