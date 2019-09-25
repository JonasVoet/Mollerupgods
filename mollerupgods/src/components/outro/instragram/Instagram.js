import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return (
        <div className="insta">
            <InstagramEmbed
                url='https://www.instagram.com/p/BUZDt1Ilwc8/?utm_source=ig_embed'
                maxWidth={1000}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </div>
    )
}

export default Instagram;
