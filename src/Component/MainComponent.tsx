import React, { useState , useEffect } from 'react'
import backgroundImg from "../images/Poster.png"
import tv from '../images/tv.png'
import Menu from '../images/Menu.png'
import imdb from '../images/imdb.png'
import tomatoes from '../images/tomatoes.png'
import tIcon from '../images/Icon.png'
import detailsbtn from '../images/details.png'
import st from '../images/stranger.png'
import bat from '../images/bat.png'
import dun from '../images/dun.png'
import dune from '../images/dune.png'
import rena from '../images/rena.png'
import spi from '../images/spider.png'
import bond from '../images/001.png'
import chi from '../images/chi.png'
import rnm from '../images/rename.png'
import face from '../images/face.png'
import insta from '../images/insta.png'
import twit from '../images/twitter.png'
import tube from '../images/tube.png'
import 'tailwindcss/tailwind.css'
import axios from 'axios'
import '../App.css'

function MainComponent() {
    const poster = {
        backgroundImage : `url(${backgroundImg})`,
        backgroundSize : '100% 100%',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        height : '90vh',
        width : '100%'
    }
    
    const [data, setData] = useState({overview: '' , title: '' , release_date1: '' , release_date: '' ,  title1: ''})
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9cd9fcb9e88d8f2cde533575da5946ab')
        .then(res => { setData( prevData => ({
            ...prevData,
            overview: res.data.results[11].overview,
            release_date: res.data.results[11].release_date,
            title: res.data.results[11].title,
            vote: res.data.results[11].vote_average,
            overview1: res.data.results[1].overview,
            release_date1: res.data.results[1].release_date,
            title1 : res.data.results[1].title,
        }))
            console.log('resolve', res)
      })
        // .then(res => console.log(res))
        .catch(err => console.log(err, 'error')) 
    }, [])
    // const movieData(data) = {
    //     data.forEach(movie => {
    //         const (title, poster_path, overview) = movie;
    //     })
    // } 

  return (
    <div>
      <div className="jumbotron-wrapper bg-red" style = {poster}>
         <div className="jumbotron-container">
            <div className="navbar-wrapper p-1 pt-4 justify-between flex items-center">
                <div className="right-nav ml-12">
                    <div className="navbrand items-center flex">
                       <div>
                         <img src= {tv} alt="" /> 
                       </div>
                       <div className="brand-text ml-4">
                         <h1 className = 'text-white text-2xl'>
                            Moviebox
                         </h1>
                       </div>
                    </div>
                </div>
                <div className="center-nav">
                    <div className = 'search-wrapper'>
                      <input type="text" className = 'input' placeholder = 'what are you searching for?' />
                    </div>
                </div>
                <div className="left-nav items-center mr-12 flex">
                   <div className = 'mr-4'>
                     <h1 className = 'text-white text-md font-semibold'>Sign in</h1>
                   </div>
                   <div>
                     <img src= {Menu} />
                   </div>
                </div>
            </div>
            <div className="jumbotron-text-wrapper m-12 mt-20">
               <div className="jumbotron-text-container flex flex-col p-4">
                    <div className = 'Movie-title'>
                        <h1 className = 'text-4xl text-white font-semibold'>
                          {/* ${title} */}
                        </h1>
                    </div>
                    <div className="movie-ratings flex p-2">
                        <div className="imdb-ratings flex items-center h-fit mr-4">
                           <img src= {imdb} className = 'h-fit mr-2.5' />
                           <p className = 'text-white text-sm'>869/100</p>
                        </div>
                        <div className="tomato-rating flex h-fit items-center ml-4">
                           <img src= {tomatoes}  className = 'h-fit mr-2.5'/>
                           <p className = 'text-white text-sm'>65%</p>
                        </div>
                    </div>
                    <div className="movie-description">
                       <p className = 'text-white'>
                        
                       </p>
                    </div>
                </div>
                 <div className="trailer-btn-wrapper w-fit flex rounded-md">
                    <div className="trailer-btn flex rounded-md">
                        <div className = 'mr-2'>
                            <img src= {tIcon} alt="" />
                        </div>
                        <div className = 'text-white font-semibold font-xs'>
                            <h1>
                                WATCH TRAILER
                            </h1>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
      </div>
      <div className="featured-movies-wrapper p-12">
        <div className="featured-movies-container w-full flex flex-col">
           <div className="ft-nav mb-8 p-4 flex items-center justify-between">
                <div className = 'ml-14'>
                    <h1 className = 'text-2xl font-semibold'>
                        Featured Movie
                    </h1>
                </div>
                <div  className ='flex items-center mr-14'>
                    <div>
                        <h1 className = 'detail-text font-semibold mr-2'>
                            See more
                        </h1>
                    </div>
                    <div>
                        <img src= {detailsbtn} alt="" />
                    </div>
                </div>
            </div>
            <div className="ft-movie-images justify-between flex p-4">
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={'https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg'} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-ful'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    {data.release_date}
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    {data.title}
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'font-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Horror
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-full'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2006
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                   {data.title1}
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventurer
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg'} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-full'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2018
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    Spider-Man : Into The Spider Verse
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Animation
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div className = 'w-full'>
                          <img src={'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2017
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    {}
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Horror
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="featured-movies-wrapper p-4">
        <div className="featured-movies-container w-full flex flex-col">
           <div className="ft-nav mb-8 p-4 flex items-center justify-between">
                <div className = 'ml-8'>
                    <h1 className = 'text-2xl font-semibold'>
                        New Arrival
                    </h1>
                </div>
                <div  className ='flex items-center mr-14'>
                    <div>
                        <h1 className = 'detail-text font-semibold mr-2'>
                            See more
                        </h1>
                    </div>
                    <div>
                        <img src= {detailsbtn} alt="" />
                    </div>
                </div>
            </div>
            <div className="ft-movie-images justify-between flex p-4">
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={dune} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-ful'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2016 - Current
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    Stranger Things
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'font-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Horror
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={bond} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-full'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2006
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    Batman Begins
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventurer
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div>
                          <img src={chi} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div className = 'w-full'>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2018
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    Spider-Man : Into The Spider Verse
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Animation
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-images-container ml-8 flex">
                    <div className = 'container1 flex flex-col'>
                        <div className = 'w-full'>
                          <img src={rnm} alt="" className = 'stranger' />
                        </div>
                        <div className="container1-text">
                           <div>
                                <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                    USA,2017
                                </p>
                                <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                    Dunkirk
                                </h1>
                            </div>
                            <div className="container1-rating flex mb-2">
                                <div className = 'flex items-center'>
                                   <img src= {imdb} alt="" className = 'mr-2' />
                                    <p className = 'text-xs font-semibold'>
                                        86.0 / 100
                                    </p>
                                </div>
                                <div className = 'flex items-center'>
                                    <img src={tomatoes} alt="" className = 'tomatoes'/>
                                    <p className = 'text-xs font-semi-bold'>
                                        97%
                                    </p>
                                </div>
                           </div>
                           <div>
                                <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                    Action, Adventure, Horror
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="ft-movie-images featured-movies-wrapper flex p-4">
            <div className="ft-images-container ml-8 flex">
                <div className = 'container1 flex flex-col'>
                    <div className = 'w-full'>
                        <img src={rnm} alt="" className = 'stranger' />
                    </div>
                    <div className="container1-text">
                        <div>
                            <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                USA,2017
                            </p>
                            <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                Dunkirk
                            </h1>
                        </div>
                        <div className="container1-rating flex mb-2">
                            <div className = 'flex items-center'>
                                <img src= {imdb} alt="" className = 'mr-2' />
                                <p className = 'text-xs font-semibold'>
                                    86.0 / 100
                                </p>
                            </div>
                            <div className = 'flex items-center'>
                                <img src={tomatoes} alt="" className = 'tomatoes'/>
                                <p className = 'text-xs font-semi-bold'>
                                    97%
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                Action, Adventure, Horror
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-images-container ml-8 flex">
                <div className = 'container1 flex flex-col'>
                    <div className = 'w-full'>
                        <img src={rnm} alt="" className = 'stranger' />
                    </div>
                    <div className="container1-text">
                        <div>
                            <p className = 'release-date text-xs font-semibold text-gray-400 mt-2'>
                                USA,2017
                            </p>
                            <h1 className = 'font-semibold text-lg mt-2 mb-2'>
                                Dunkirk
                            </h1>
                        </div>
                        <div className="container1-rating flex mb-2">
                            <div className = 'flex items-center'>
                                <img src= {imdb} alt="" className = 'mr-2' />
                                <p className = 'text-xs font-semibold'>
                                    86.0 / 100
                                </p>
                            </div>
                            <div className = 'flex items-center'>
                                <img src={tomatoes} alt="" className = 'tomatoes'/>
                                <p className = 'text-xs font-semi-bold'>
                                    97%
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className = 'movie-genre text-gray-400 text-xs font-semibold'>
                                Action, Adventure, Horror
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="moviebox-footer-wrapper flex items-center justify-center p-4 flex-col">
            <div className="footer-container flex items-center m-8 flex">
                <div className="social-wrapper pl-6">
                   <img src= {face} alt="" />
                </div>
                <div className="social-wrapper pl-6">
                   <img src= {twit} alt="" />
                </div>
                <div className="social-wrapper pl-6">
                   <img src= {tube} alt="" />
                </div>
                <div className="social-wrapper pl-6">
                   <img src= {insta} alt="" />
                </div>
            </div>
            <div className="footer-terms text-xs font-semibold flex p-2">
                <p className = 'ml-4'>Conditions of Use</p>
                <p className = 'ml-4'>Privacy & Policy</p>
                <p className = 'ml-4'>Press Room</p>
            </div>
            <div className="developer-tag text-xs font-semibold p-2 text-gray-400">
                <p>2023 MovieBox by ASTROO</p>
            </div>
        </div>
    </div>
  )
}

export default MainComponent
