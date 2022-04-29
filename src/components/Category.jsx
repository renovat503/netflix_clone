import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../styles/category.css';
import Movie from '../components/Movie';
import movieOne from '../images/movie1.jpeg';

function Category({title , fetchUrl , isLargeRow = false}){

    const [movies , setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    } , [fetchUrl])

    console.log(movies);

        return (
            <React.Fragment>
                <section className='container-flex section-modifier'>
                    <div className='title-container'>
                        <h3 className='category-titles'>{title}</h3>
                    </div>
                
                    <div className='main-container'>


                     {movies.map (movie =>(
                         movie.backdrop_path &&(

                            <Movie key = {movie.id}name = {movie.title || movie.name} image ={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path 
                            }`}/>

                         )

                     ))}   
                        
                        </div>
                </section>
            </React.Fragment>
        );
    }
 
export default Category;