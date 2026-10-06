import experiences from "../data/experiences.js"
import dotenv from "dotenv"
import pg from "pg"

dotenv.config();

const {Pool} = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
async function seedExperiences() {
  try {
    for (const experience of experiences) {
      await pool.query(
        `
        INSERT INTO experiences (
          slug,
          title,
          location,
          region,
          country,
          category,
          description,
          long_description,
          activities,
          image,
          image_credit,
          price,
          price_info,
          rating,
          rating_source,
          opening_info,
          address,
          bookable,
          official_url,
          latitude,
longitude
        )
        VALUES (
          $1, $2, $3, $4, $5,
          $6, $7, $8, $9, $10,
          $11, $12, $13, $14, $15,
          $16, $17, $18, $19, $20,
$21
        )

        ON CONFLICT (slug)
        DO UPDATE SET
          title = EXCLUDED.title,
          location = EXCLUDED.location,
          region = EXCLUDED.region,
          country = EXCLUDED.country,
          category = EXCLUDED.category,
          description = EXCLUDED.description,
          long_description = EXCLUDED.long_description,
          activities = EXCLUDED.activities,
          image = EXCLUDED.image,
          image_credit = EXCLUDED.image_credit,
          price = EXCLUDED.price,
          price_info = EXCLUDED.price_info,
          rating = EXCLUDED.rating,
          rating_source = EXCLUDED.rating_source,
          opening_info = EXCLUDED.opening_info,
          address = EXCLUDED.address,
          bookable = EXCLUDED.bookable,
          official_url = EXCLUDED.official_url,
latitude = EXCLUDED.latitude,
longitude = EXCLUDED.longitude
        `,
        [
          experience.slug,
          experience.title,
          experience.location,
          experience.region,
          experience.country,
          experience.category,
          experience.description,
          experience.longDescription,
          experience.activities,
          experience.image,
          experience.imageCredit,
          experience.price,
          experience.priceInfo,
          experience.rating,
          experience.ratingSource,
          experience.openingInfo,
          experience.address,
          experience.bookable,
          experience.officialUrl,
          experience.latitude,
          experience.longitude
        ]
      );

      console.log(`Seeded: ${experience.title}`);
    }

    console.log("All experiences seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await pool.end();
  }
}

seedExperiences();