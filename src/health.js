export default function isHelthty(obj) {
  if (obj?.health > 50) {
    return 'healthy';
  } if (obj?.health <= 50 && obj.health >= 15) {
    return 'wounded';
  } if (obj?.health > 0) {
    return 'critical';
  }
  return '';
}
