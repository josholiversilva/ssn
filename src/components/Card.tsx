import React from "react";
import { useNavigate } from 'react-router-dom';

interface CardProps {
    year: number;
    group: string
}

const Card = ({year, group}: CardProps) => {
    const goToYear = () => {
        console.log("going to year");
    }

    const navigate = useNavigate();
    const goToUsers = () => {
        navigate(`/groups/${group}/users`);
    }
    return(
        <>
        <button className="mr-8 hover:bg-gray-800 rounded-lg">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg h-full" onClick={() => goToUsers()}>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{year}</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bryans</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jan11</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </button>
        </>
    )
};

export default Card;