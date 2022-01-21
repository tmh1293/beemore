import React from "react";
import { useLocation, useParams } from 'react-router'
import {useEffect, useState, useContext} from 'react'
import Navbar from "../../components/Navbar";
import axios from 'axios';
import {Link } from 'react-router-dom'
import {Context} from '../../context/Context'

export default function About() {
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];

  const {state, dispatch, user} = useContext(Context);
  const [username, setUsername] = useState();
  const [picture, setPicture] = useState();
  const [background, setBackground] = useState();
  const [updateMode, setUpdateMode] = useState(false);

  const PF = "http://localhost:5000/images/";


  // console.log(user)
  // console.log(user.user._id);

  return (

    <>
      <Navbar />

      
        <div>
        {/* userModel background */}
      
          <img
          alt="profile"
          src={PF + user.user.background}
          class="object-cover h-60 w-full "
        />

        
       
        {/* userModel picture */}
        <div class="flex flex-col items-center justify-center p-4 -mt-16">
          <img
            alt="profil"
            src={PF + user.picture}
            class="mx-auto object-cover rounded-full h-30 w-30  border-2 border-white dark:border-gray-800"
          />
            <i class="fas fa-edit"></i>

          {/* userModel username */}
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-2xl font-bold my-1 mr-1">
              Charlie
               
            </span>

           

            <svg
              class="stroke-current stroke-1 text-blue-600 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
            
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="text-gray-400 text-xs mb-4">Nantes</p>

          <div class="rounded-lg w-80 mt-2">
            <div class="flex items-center justify-between text-lg text-gray-600 dark:text-gray-200">
              <p class="flex flex-col">
                Posts

                {/* userModel postsOfUser */}
                <span class="text-black dark:text-white font-bold">34</span>
              </p>
              <p class="flex flex-col">
                Followers

                {/* userModel followers */}
                <span class="text-black dark:text-white font-bold">455</span>
              </p>
              <p class="flex flex-col">
                Upvote

                {/* userModel rating */}
                <span class="text-black dark:text-white font-bold">28</span>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between gap-4 mt-6">
            <button
              type="button"
              class="px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* List Post */}

      {/* <div class="mb-4">
        <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
              Mar 10, 2019
            </span>
            <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              Design
            </a>
          </div>

          <div class="mt-2">
            <a
              href="#"
              class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              Accessibility tools for designers and developers
            </a>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>

          <div class="flex items-center justify-between mt-4">
            <a
              href="#"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </a>

            <div class="flex items-center">
              <im/g
                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                Khatab wedaa
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
              Mar 10, 2019
            </span>
            <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              Design
            </a>
          </div>

          <div class="mt-2">
            <a
              href="#"
              class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              Accessibility tools for designers and developers
            </a>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>

          <div class="flex items-center justify-between mt-4">
            <a
              href="#"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </a>

            <div class="flex items-center">
              <im/g
                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                Khatab wedaa
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 dark:text-gray-400">
              Mar 10, 2019
            </span>
            <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              Design
            </a>
          </div>

          <div class="mt-2">
            <a
              href="#"
              class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              Accessibility tools for designers and developers
            </a>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>

          <div class="flex items-center justify-between mt-4">
            <a
              href="#"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </a>

            <div class="flex items-center">
              <im/g
                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                Khatab wedaa
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <section className="bg-coolGray-100 text-coolGray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/481x361"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 21, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/482x362"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 22, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/483x363"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 23, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/484x364"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 24, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/485x365"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 25, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-coolGray-500"
                src="https://source.unsplash.com/random/486x366"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-coolGray-600">
                  January 26, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-3 text-sm rounded-md hover:underline bg-coolGray-50 text-coolGray-600">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
      </>
    
  );
}
