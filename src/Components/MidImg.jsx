import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MidImg = () => {
    const images=["https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
    
    "https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg",

//     "https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/b52160d6-6a75-4d73-a468-f0f39e524137.jpg",
//     "https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg"
]

const [selectedimg,setSelectedimg]=useState(0)
const [allimg,setAllimg]=useState(images)

useEffect(()=>{
    setInterval(() => {
        setSelectedimg(selectedimg=>selectedimg <5 ?selectedimg+1:0)
    }, 3000);
},[])
    return (
        <div>
            <img  height={500} src={allimg[selectedimg]}/>
            
        </div>
    );
};

export default MidImg;