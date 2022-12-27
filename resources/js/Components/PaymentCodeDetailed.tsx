import React from 'react';
import HowToPay from './HowToPay';
import ArrowRight from './Icons/ArrowRight';
import Mark from './Icons/Mark';
import IconButton from './IconButton';
import { Play } from './Icons/Play';

export const PaymentCodeDetailed = () => {
    const pay = [
        {
            title: 'Pay with PayPal',
            paymentSteps: [
                'Click the PayPal button below.',
                'Log in to your PayPal account.',
                'Click the "Pay Now" button.',
                'You will be redirected to the Laracasts website.',
                'Click the "Complete Purchase" button.',
            ],
        },
    ];
    return (
        <div>
            <header className="primary relative flex-1 text-center text-white md:text-left lg:mt-3">
                <div className="md:flex">
                    <div className="flex-1">
                        <a
                            className="btn btn-dark-blue py-px px-4 font-semibold normal-case mb-5"
                            href="https://laracasts.com/series"
                        >
                            <ArrowRight width={20} className="-ml-2" />
                            Back
                        </a>
                        <br />

                        <span className="text-2xs font-semibold normal-case text-grey-600">
                            Virtual Payment Number
                        </span>
                        <h1 className="text-4xl font-medium leading-tight md:pr-[9rem]">
                            1899 081382895287
                        </h1>
                        <div className="generic-content mx-auto mt-10 max-w-auto text-sm leading-normal md:mx-0 md:w-[40rem]">
                            <div className="w-full">
                                <div className="mx-auto w-full rounded-2xl bg-white p-2">
                                    <HowToPay paymentMethod={pay} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[5rem] h-[5rem] rounded-xl absolute right-0">
                        <img
                            src="/images/payment/bank/bca.svg"
                            alt="Bank BCA Logo"
                        />
                    </div>
                </div>
                <div className="series-buttons mt-9 flex w-full flex-wrap justify-start gap-4">
                    <IconButton
                        className="btn btn-white flex-center w-full mx-auto"
                        href="/series/neovim-as-a-php-ide/episodes/1"
                        text="Autocheck Payment"
                    >
                        <Play width={15} height={15} className="mr-2" />
                    </IconButton>
                    <div className="basis-full md:basis-auto">
                        <IconButton
                            className="btn flex-center btn-dark-blue flex-1"
                            text="Download Invoice"
                        >
                            <Mark
                                width={12}
                                className="fill-current mr-2 inline-block scale-75"
                            />
                        </IconButton>
                    </div>
                    <div className="basis-full md:basis-auto">
                        {/**/}
                        {/**/}
                        {/**/}
                    </div>
                </div>
            </header>
        </div>
    );
};
