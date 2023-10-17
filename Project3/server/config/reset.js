import { pool } from './database.js'

import './dotenv.js'

import eventsByPlace from '../data.js'

const createTableQuery = `
  DROP TABLE IF EXISTS Event;

  CREATE TABLE IF NOT EXISTS Event (
    id SERIAL PRIMARY KEY,
    place_name TEXT,
    place_image TEXT,
    event_id INT,
    event_image TEXT,
    event_title TEXT,
    ticket_price TEXT,
    event_overview TEXT,
    event_learn TEXT,
    event_date DATE,
    event_time TEXT,
    event_location TEXT,
    event_features TEXT[],
    event_speaker JSONB[] 
  )
`

async function createEventTable() {
  try {
    await pool.query(createTableQuery)
    console.log('Table created successfully.')
  } catch (error) {
    console.error('Error creating table:', error)
  }
}

async function seedEventData() {
  await createEventTable()
  try {
    for (const place of eventsByPlace) {
      const { name: placeName, events } = place

      for (const event of events) {
        const {
          id,
          image: eventImage,
          title: eventTitle,
          ticketPrice,
          eventDetail,
        } = event

        const insertEventQuery = {
          text: `
            INSERT INTO Event
            (place_name, place_image, event_id, event_image, event_title, ticket_price, event_overview, event_learn, event_date, event_time, event_location, event_features, event_speaker)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          `,
          values: [
            placeName,
            place.placeImage,
            id,
            eventImage,
            eventTitle,
            ticketPrice,
            eventDetail.overview,
            eventDetail.learn,
            eventDetail.date,
            eventDetail.time,
            eventDetail.location,

            eventDetail.features,
            [JSON.stringify(eventDetail.speaker)],
          ],
        }

        await pool.query(insertEventQuery)
      }
    }
    console.log('Event data seeded successfully.')
  } catch (error) {
    console.error('Error seeding event data:', error)
  } finally {
    // Note: Do not call pool.end() here
  }
}

// Call the function to seed event data
seedEventData()
