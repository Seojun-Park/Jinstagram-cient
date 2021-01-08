import React, { useState } from 'react'
import FeedBoxPresenter from './FeedBoxPresenter'

interface IProps {
    posts: any
}

const FeedBoxContainer: React.FC<IProps> = ({ posts }) => {
    const [currentItem, setCurrentItem] = useState<number>(0)

    const handleSlide = () => {
        const totalImages = posts.images.length;
        if (currentItem === totalImages - 1) {
            setCurrentItem(0);
            console.log("go back to first")
        } else {
            setCurrentItem(currentItem + 1);
            console.log("move to next image")
        }
    }

    return (
        <FeedBoxPresenter
            posts={posts}
            handleSlide={handleSlide}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
        />
    )
}

export default FeedBoxContainer