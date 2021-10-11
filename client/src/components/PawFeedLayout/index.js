import React from "react";
import { Link } from "react-router-dom";

function PawFeedLayout(post) {
    const {
        _id,
        postTitle,
        postText,
        createdAt,
        username,
        replyCount,
    } = post;

    return (
        <div key={_id} className="card">

            <h3><Link
                to={`/pawfeeds/${_id}`}
                style={{ fontWeight: 700 }}
                className="text-light"
            >
                {postTitle}
            </Link></h3>
            <p className="card-header">
                <Link
                    to={`/profile/${username}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                >
                    {username}
                </Link>{' '}
                post on {createdAt}
            </p>
            <div className="card-body">
                <Link to={`/pawfeed/${_id}`}>
                    <p>{postText}</p>
                    <p className="mb-0">
                        Replies: {replyCount} || Click to{' '}
                        {replyCount ? 'see' : 'start'} the pets fun!
                    </p>
                </Link>
            </div>
        </div >
    );
}

export default PawFeedLayout;