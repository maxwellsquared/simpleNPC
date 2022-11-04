import { useState, useEffect } from "react";
// OPENAI API STUFF
import { Configuration, OpenAIApi } from 'openai';

    // response.data.data[0].url;

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    
export function Portrait(props) {
        const [picURL, setPicURL] = useState('');
        const [error, setError] = useState(false);
        const [state, setState] = useState('');
        
    useEffect(() => {
        const fetchPortrait = async () => {
            setState('loading');
            try {
                const res = await openai.createImage({
                    prompt: "a fantasy oil painting portrait of a medieval knight with an axe",
                    n: 1,
                    size: "512x512",
                });
                setPicURL(res.data.data[0].url);
                setState('success');
            } catch (e) {
                setState('error');
                setError(e);
            }
        };
        fetchPortrait();
    }, []);


    if (state === 'error') {
        return (
            <h1>
                {error.toString()}
            </h1>
        );
    }
    return (
        <div className="portrait">
            { state === 'loading' ? (
             <h1>Loading...</h1>   
            ) : (
                <img src={picURL} />
            )}
        </div>
    )
}