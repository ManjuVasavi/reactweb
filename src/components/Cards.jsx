import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards(){
    return (
        <div className='container'>
            <Card 
                imgsrc="https://tripnxt.com/blog/wp-content/uploads/2020/02/TripNxt-Thillai-Nataraja-Temple-Chidambaram.jpg" 
                place="Tamilnadu"
                famous="temple"
                link="https://planet-calico-sing.glitch.me/"
            /> 
            <Card
                imgsrc="https://th.bing.com/th/id/R.6b7c1adb8705d0a8c85a3ba0de712954?rik=mjBbYnFE2tFOdw&riu=http%3a%2f%2fwww.visittnt.com%2fblog%2fwp-content%2fuploads%2f2015%2f08%2fkerala_backwater.jpg&ehk=mdoYiy%2bIMnNmz9DD2qc5IeueHAUPKs5c0uNh97%2foTCo%3d&risl=&pid=ImgRaw&r=0" 
                place="Kerala"
                famous="boating"
                link="https://www.bing.com/search?q=kerala&qs=n&form=QBRE&sp=-1&ghc=1&pq=kerala&sc=10-6&sk=&cvid=AC560DD1C1914836BCDA512D0EB9AE9B&ghsh=0&ghacc=0&ghpl="
            />
            <Card
                imgsrc="https://th.bing.com/th/id/R.a3510c5504d69e5a64afb6e1965f9c6f?rik=7UDUGPWfyLEjaA&riu=http%3a%2f%2ftravltalk.com%2fwp-content%2fuploads%2f2020%2f09%2fHimachel-Pradesh.jpg&ehk=QtipOpZdt9Y0TfrmXu77E%2fSOcazcAeCJrd83%2bBuGg1M%3d&risl=&pid=ImgRaw&r=0" 
                place="Himachal Pradesh"
                famous="snow"
                link="https://www.bing.com/images/search?q=kerala&form=HDRSC3&first=1"
            />
            <Card
                imgsrc="https://static2.tripoto.com/media/filter/nl/img/653910/SpotDocument/1530855182_1530855171714.jpg" 
                place="Bhopal"
                famous="beauty"
                link="https://www.bing.com/images/search?q=bhopal&qs=n&form=QBIR&sp=-1&pq=bhopal&sc=10-6&cvid=08A70E9BCB884D30853E841E8396C6CB&ghsh=0&ghacc=0&first=1"
            />
            <Card
                imgsrc="https://th.bing.com/th/id/OIP.qCoquqc4iXLcjn2wlnnxpQHaFj?pid=ImgDet&rs=1" 
                place="Hyderabad"
                famous="busy"
                link="https://www.bing.com/images/search?q=hyderabad&qs=n&form=QBIR&sp=-1&ghc=1&pq=hyderaba&sc=10-8&cvid=CCF837F77C9844B99B1C9C51DD2D07F6&ghsh=0&ghacc=0&first=1"
            />
        </div>
    );
}

export default Cards;