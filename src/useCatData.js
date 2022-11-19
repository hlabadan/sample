import { useEffect, useState } from 'react';

export function useCatBreeds() {

    const [breeds, setBreeds] = useState({});

    useEffect(() => {
        const load = async () => {
            await fetch('https://api.thecatapi.com/v1/breeds', {
              method: 'GET',
            }).then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setBreeds(data);
                return data;
            })
            
        };
        load();
      }, []);

      return breeds;
}
