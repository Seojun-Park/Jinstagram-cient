import React, { useState } from 'react'
import FeedBoxPresenter from './FeedBoxPresenter'

interface IProps {
    posts: any
}

const FeedBoxContainer: React.FC<IProps> = ({ posts }) => {
    const [currentItem, setCurrentItem] = useState<number>(0)

    return (
        <FeedBoxPresenter
            posts={posts}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
        />
    )
}

export default FeedBoxContainer