import React from 'react'
import FeedBoxPresenter from './FeedBoxPresenter'

interface IProps {
    posts: any
}

const FeedBoxContainer: React.FC<IProps> = ({ posts }) => {
    return (
        <FeedBoxPresenter posts={posts} />
    )
}

export default FeedBoxContainer