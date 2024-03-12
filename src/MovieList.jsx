// src/components/MovieList.js
import React from 'react';

function MovieList({ movies }) {
	return (
		<div className='overflow-x-scroll '>

			<div className='flex w-[6500px] justify-between p-8'>


				{movies.map((movie) => (


					<div key={movie.id} className=' bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center text-center max-w-[300px]' >
						<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie' className='rounded-t-lg max-h-[450px]'></img>
						<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-3'>{movie.title}</h2>
						{/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{movie.overview}</p> */}
						<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Read more

							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />

						</a>
					</div>
				))}
			</div>
		</div>


	);
}

export default MovieList;
