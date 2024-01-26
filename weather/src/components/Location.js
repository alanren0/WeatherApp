
function Location({location}) {
  return (
    <>
      <h1>{location.name}</h1>
      <h2>{location.region}, {location.country}</h2>
    </>
  )
}

export default Location;