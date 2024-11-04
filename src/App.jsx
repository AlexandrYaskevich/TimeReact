import React, {useState} from 'react';
import moment from 'moment';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}


function DataTimePretty (props){
    const makeNewDate = (data) => {   
    let then = moment(data);
    let difference = moment().diff(then, 'hours');
        if(difference < 1) {
        return `12 минут назад`;
        } else if(difference > 1 && difference < 24) {
            return `5 часов назад`;
        } else {
            return `${difference} дней назад`;
        }
    }
    return <DateTime  date={makeNewDate(props.data)} /> ;
} 


function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DataTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map((item, i) => <Video url={item.url} date={item.date} key={i} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}