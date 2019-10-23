import React from 'react';
import { Travel as TravelData, DateOnly } from '../store/travel/types';
import { RouteComponentProps } from 'react-router';

const DateComponent: React.FC<DateOnly> = (props) => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    const dateString = new Date(props.year, props.month - 1, props.day).toLocaleDateString('he-IL', formatOptions);
    return (<div>{dateString}</div>);
};

const Travel: React.FC<RouteComponentProps<{"id": string}>> = (match) => {
    console.log();
    const props: TravelData = {
        startDate: {
            year: 2019,
            month: 1,
            day: 2,
        },
        days: [],
        source: {
            id: "DEMO",
            source: "STATIC"
        }
    };
    return (<div>
        <div>Travel Name: {match.match.params.id}</div>
        <DateComponent {...props.startDate} />
    </div>);
};

export default Travel;