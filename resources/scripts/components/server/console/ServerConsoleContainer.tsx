import React, { memo } from 'react';
import { ServerContext } from '@/state/server';
import Can from '@/components/elements/Can';
import ServerContentBlock from '@/components/elements/ServerContentBlock';
import isEqual from 'react-fast-compare';
import Spinner from '@/components/elements/Spinner';
import Features from '@feature/Features';
import Console from '@/components/server/console/Console';
import StatGraphs from '@/components/server/console/StatGraphs';
import PowerButtons from '@/components/server/console/PowerButtons';
import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';
import { Alert } from '@/components/elements/alert';

export type PowerAction = 'start' | 'stop' | 'restart' | 'kill';

const ServerConsoleContainer = () => {
    const name = ServerContext.useStoreState((state) => state.server.data!.name);
    const description = ServerContext.useStoreState((state) => state.server.data!.description);
    const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
    const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
    const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);
    const isNodeUnderMaintenance = ServerContext.useStoreState((state) => state.server.data!.isNodeUnderMaintenance);

    return (
        <ServerContentBlock title={'Console'}>
            {(isNodeUnderMaintenance || isInstalling || isTransferring) && (
                <Alert type={'warning'} className={'mb-4'}>
                    {isNodeUnderMaintenance
                        ? 'The node of this server is currently under maintenance and all actions are unavailable.'
                        : isInstalling
                        ? 'This server is currently running its installation process and most actions are unavailable.'
                        : 'This server is currently being transferred to another node and all actions are unavailable.'}
                </Alert>
            )}
            <div className={'grid grid-cols-4 gap-4 mb-4'}>
                <div className={'hidden sm:block sm:col-span-2 lg:col-span-3 pr-4'}>
                    <h1 className={'font-header text-2xl text-gray-50 leading-relaxed line-clamp-1'}>{name}</h1>
                    <p className={'text-sm line-clamp-2'}>{description}</p>
                </div>
                <div className={'col-span-4 sm:col-span-2 lg:col-span-1 self-end'}>
                    <Can action={['control.start', 'control.stop', 'control.restart']} matchAny>
                        <PowerButtons className={'flex sm:justify-end space-x-2'} />
                    </Can>
                </div>
            </div>
            <div className={'bg-neutral-700/80 backdrop-blur-md rounded-lg p-4 mb-4 shadow-lg border-l-4 border-blue-500 flex items-center'}>
                <div className={'flex-shrink-0 bg-blue-500/20 p-2 rounded-full border border-blue-500/30 mr-4'}>
                    <svg className={'w-6 h-6 text-blue-400'} fill={'none'} stroke={'currentColor'} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
                        <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={2} d={'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
                    </svg>
                </div>
                <div>
                    <h2 className={'text-gray-50 font-bold text-base uppercase tracking-wide'}>INFORMATION</h2>
                    <p className={'text-sm text-neutral-300 mt-0.5'}>Love you, jangan telegram: @zannroderizz</p>
                </div>
            </div>
            <div className={'grid grid-cols-4 gap-2 sm:gap-4 mb-4'}>
                <div className={'flex col-span-4 lg:col-span-3'}>
                    <Spinner.Suspense>
                        <Console />
                    </Spinner.Suspense>
                </div>
                <ServerDetailsBlock className={'col-span-4 lg:col-span-1 order-last lg:order-none'} />
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4'}>
                <Spinner.Suspense>
                    <StatGraphs />
                </Spinner.Suspense>
            </div>
            <Features enabled={eggFeatures} />
        </ServerContentBlock>
    );
};

export default memo(ServerConsoleContainer, isEqual);
