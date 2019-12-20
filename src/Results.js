import React from 'react';
import pf from 'petfinder-client';
import Pet from './Pet';
import SearchBox from './SearchBox';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props); // always use super, if constructor is used

    this.state = {
      loading: true,
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: 'full', location: 'Seattle, WA' })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          /*
           * If response only give ONE pet back, its gonna be an Object, so we have to make an Array out of it.
           * Else its gonna get an Array back.
           * */
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          loading: false,
          pets // write `pets` instead of `pets: pets` (javascript shorthand)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    return (
      <div className="search">
        <SearchBox />
        {this.state.pets.map(pet => {
          let breed = Array.isArray(pet.breeds.breed)
            ? pet.breeds.breed.join(', ')
            : pet.breeds.breed;

          return (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
