import L from 'leaflet'
import iconUrl from './images/marker-icon.png'
import shadowUrl from './images/marker-shadow.png'

const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltipAnchor } =
  L.Marker.prototype.options.icon.options;

export const defaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize,
  shadowSize,
  iconAnchor,
  popupAnchor,
  tooltipAnchor,
});

