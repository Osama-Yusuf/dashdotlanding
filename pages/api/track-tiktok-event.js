import axios from 'axios';

const TIKTOK_API_URL = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';
const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;
const PIXEL_ID = process.env.TIKTOK_PIXEL_ID;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { eventName, eventParams } = req.body;

        const payload = {
            pixel_code: PIXEL_ID,
            event: eventName,
            timestamp: Math.floor(Date.now() / 1000),
            ...eventParams
        };

        try {
            const response = await axios.post(TIKTOK_API_URL, payload, {
                headers: {
                    'Access-Token': ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                }
            });
            res.status(200).json({ message: 'Event sent successfully', data: response.data });
        } catch (error) {
            console.error('Error sending event to TikTok:', error);
            res.status(500).json({ message: 'Error sending event to TikTok' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}