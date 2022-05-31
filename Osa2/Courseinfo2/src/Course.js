const Header = ({ course }) => <h2>{course}</h2>
  // Tätä kutsutaan Contentissa ja tämä ei kerro muuta kuin, että otsikko on muotoa h2

const Course = ({ course }) => {
  // course.map avulla luodaan taulukko joissa alkioina on kurssin nimi
  // ja kurssin osat, part => part.parts kerrotaan, että 'part' on 'parts' alkioita
  const courseName = course.map(name => name.name)
  const courseParts = course.map(part => part.parts)
  // paluu arvoina Header, jonka arvo on 0 indeksi ja Content, jonka arvot tulevat kanssa 0 indeksin
  // omaavan kurssin nimen sisältä
  
  return <>
    
    <h1>Web development curriculum</h1>
    <Header course={courseName[0]} />
    <Content course={courseParts[0]} />
    <Header course={courseName[1]} />
    <Content course={courseParts[1]} />
 
  </>
}

const Content = ({ course }) => {
  // Part ja Total saa arvonsa coursesta
  return (
    <div>
      <Part part={course}/>
      <Total course={course}/>
    </div>
  )
}


const Part = ({ part }) => {
  // ensin mapataan kurssin osat kurssin nimen alta
  // alla kerrotaan miten tuloste luodaan
  // <p> key={name.id} map-metodilla luoduilla elementeillä on uniikki avain eli key
  // kun jokainen rivi tulostetaan niin name alta haetaan name (osion nimi) ja nimen alta haetaan
  // exercises (harjoitusten lkm)
  return (
    <>
    {part.map(name =>
      <p key={name.id}>
        {name.name} {name.exercises}
      </p>
      )}
  </>
  )
  
}

const Total = ({ course }) => {
  // courseExercises saa arvonsa kun course mapataan ja sieltä kerätään exercises arvot
  // käytetään .reduce jossa luodun taulukon alkioita käydään läpi
  const courseExercises = course.map(exercises => exercises.exercises)
  const courseTotal = courseExercises.reduce((previousValue, currentValue) => previousValue + currentValue)

  return (
    <h4>total of {courseTotal} exercises</h4>
  )
}

export default Course