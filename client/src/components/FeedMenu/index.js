import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FEEDS } from '../../utils/queries';

function FeedMenu({ setFeed }) {
    const { data: feedData } = useQuery(QUERY_FEEDS);
    const feeds = feedData?.feeds || [];

    console.log('feed menu', feedData);
    return (
        <div>
            {feeds.map((feed) => (
                <button
                    key={feed._id}
                    onClick={() => {
                        setFeed(feed.feedName);
                    }}
                >
                    {feed.feedName}
                </button>
            ))}
        </div>
    )
}

export default FeedMenu;