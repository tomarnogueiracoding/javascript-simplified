const MAPBOX_ACESS_TOKEN =
  'pk.eyJ1IjoibWlndWVsdG9tYXJub2d1ZWlyYSIsImEiOiJjbHc0dHBjZXIxNTNlMmtsY3k3MjczNHVsIn0.bV6zOktf0w2uksUYpJx1bQ'

navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  })
  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACESS_TOKEN,
  })
  map.addControl(directionControls, 'top-left')
}

function sucessLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap(-2.24, 53.48)
}
