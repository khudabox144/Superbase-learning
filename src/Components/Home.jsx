import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';
import SmoothieCard from './SmoothieCard';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select('*'); // Select all columns

      if (error) {
        setFetchError('Could not fetch smoothies');
        setSmoothies(null);
        console.error(error);
      } else {
        setSmoothies(data);
        setFetchError(null);
        console.log('Smoothies:', data);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="p-4 bg-base-200 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Smoothies List</h1>

      {fetchError && <p className="text-red-500">{fetchError}</p>}

      {smoothies && smoothies.length > 0 ? (
        <ul className="space-y-2 grid grid-cols-4 gap-5  ">
          {smoothies.map((smoothie) => <SmoothieCard key={smoothie.id} smoothie={smoothie} ></SmoothieCard> )}
        </ul>
      ) : (
        !fetchError && <p>No smoothies found.</p>
      )}
    </div>
  );
};

export default Home;
