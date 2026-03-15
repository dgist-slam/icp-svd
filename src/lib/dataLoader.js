/**
 * Data Loader — loads viz_data.json only
 * ICP is now computed in the browser via src/lib/icp.js
 */
export async function loadVizData() {
  const res = await fetch(import.meta.env.BASE_URL + 'viz_data.json');
  return res.json();
}
