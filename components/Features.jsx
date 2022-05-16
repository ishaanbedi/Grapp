import { AnnotationIcon, CreditCardIcon, CalendarIcon, XCircleIcon, CashIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'

const featuresData = [
    {
        name: 'No joining/annual fees',
        description:
        'grapp is and always will be completely free. No hidden charges.',
        icon: XCircleIcon,
    },
    {
        name: 'Personalized Payments Card',
        description:
            'Pay at offline merchants with your customized grapp card.',
        icon: CreditCardIcon,
    },
    {
        name: 'Pay later',
        description:
            'With grapp, postpone your bills upto 30 days without any interest charged.',
        icon: CalendarIcon,
    },
    {
        name: 'Exciting offers',
        description:
            'With grapp, get special discounts and offers at 1000+ merchants across the world.',
        icon: AnnotationIcon,
    },
    {
        name: 'Your money is safe',
        description:
            'Your money in the grapp wallet is insured with government accredited security measures.',
        icon: EmojiHappyIcon,
    },
    {
        name: 'Transfer Money',
        description:
            'grapp enables you to transfer money instantly to other users.',
        icon: CashIcon,
    },
]
export default function Features() {
    return (
        <>
            <section>
                <Navbar />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-300 font-semibold tracking-wide uppercase">Features</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                The new-age FinTech app
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {featuresData.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium ">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}