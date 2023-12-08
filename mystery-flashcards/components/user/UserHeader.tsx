
import { getDictionary } from "@/dictionaries/dictionaries";
import { use } from "react";
import Title from "../common/Title";
import UserRangesModal from "./UserRangesModal";

export default function UserHeader({ locale }: { locale: string }) {
    const dictionary = use(getDictionary(locale));

    return (
        <div className="text-center ">
            {renderTitle()}
            {renderLevel()}
            {renderRange()}
        </div>
    )

    function renderTitle() {
        return <Title text={`${dictionary.common.helloUser}, X!`} />
    }

    function renderLevel() {
        return (
            <div className="text-2xl flex items-center place-content-center ">
                {`${dictionary.common.userLevel}: 3`}
                <div className='has-tooltip'>
                    <span className='tooltip rounded shadow-lg ms-4 p-1 bg-neutral text-primary -mt-8'>{`${dictionary.common.availableLevels} `}</span>
                    <UserRangesModal locale={locale} />
                </div>
            </div>
        );
    }

    function renderRange() {
        return (
            <div className="text-2xl flex items-center place-content-center ">
                {`${dictionary.common.userRange}: Wilk`}
            </div>
        )
    }
}