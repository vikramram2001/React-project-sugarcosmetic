import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BotImg = () => {
    const images=["https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif",
    // "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b52160d6-6a75-4d73-a468-f0f39e524137.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg"
]

const [selectedimg,setSelectedimg]=useState(0)
const [allimg,setAllimg]=useState(images)

useEffect(()=>{
    setInterval(() => {
        setSelectedimg(selectedimg=>selectedimg <9 ?selectedimg+1:0)
    }, 3000);
},[])
    return (
        <div>
            <img  height={500} src={allimg[selectedimg]}/>
            
        </div>
    );
};

export default BotImg;