import { menu } from "../../lib/items";
export default async function handler(req, res) {
  try {
    const result = await menu;

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
