import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../store/actions/postsActions';
import Posts from '../../components/Posts/Posts'



const Home = () => {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    // const posts = useSelector(state => state.posts)
    // console.log(state.posts)
    
    return (
        <div>
            <h1>Posts from JSON Placeholder</h1>
            <Posts />
        </div>
    )
}

export default Home
