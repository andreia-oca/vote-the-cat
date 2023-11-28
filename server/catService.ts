import { GenezioDeploy } from "@genezio/types";
import pg from 'pg'
const { Pool } = pg

export type Cat = {
    id: string,
    url: string;
    likes: number;
    dislikes: number;
};

@GenezioDeploy()
export class CatBackendService {
    pool = new Pool({
        connectionString: process.env.NEON_POSTGRES_URL,
        ssl: true,
      });

    async likeCat(catUrl: string): Promise<boolean> {
        console.log(`Trying to like the cat: ${catUrl}`)
        await this.pool.query(
            "CREATE TABLE IF NOT EXISTS cats (id serial PRIMARY KEY,url VARCHAR(255) UNIQUE, likes INT, dislikes INT)"
        );

        // Increment the likes column if the cat already exists
        await this.pool.query(
            "INSERT INTO cats (url, likes, dislikes) VALUES ($1, 1, 0) ON CONFLICT (url) DO UPDATE SET likes = cats.likes + 1",
            [catUrl]
        );
        console.log(`Liked the cat: ${catUrl}`)
        return true
    }

    async getCat(catUrl: string): Promise<Cat> {
        console.log(`Trying to get the cat: ${catUrl}`)
        const res = await this.pool.query(
            "SELECT id, url, likes, dislikes FROM cats WHERE url = $1",
            [catUrl]
        );
        console.log(`Got the cat: ${catUrl}`)
        if (res.rows.length === 0) {
            throw new Error(`Cat not found: ${catUrl}`)
        }
        return res.rows[0]
    }

    async getLikes(catUrl: string): Promise<number> {
        console.log(`Trying to get the likes of the cat: ${catUrl}`)
        const res = await this.pool.query(
            "SELECT likes FROM cats WHERE url = $1",
            [catUrl]
        );
        console.log(`Got the likes of the cat: ${catUrl}`)
        if (res.rows.length === 0) {
            return 0
        }
        return res.rows[0].likes
    }

    async getDislikes(catUrl: string): Promise<number> {
        console.log(`Trying to get the dislikes of the cat: ${catUrl}`)
        const res = await this.pool.query(
            "SELECT dislikes FROM cats WHERE url = $1",
            [catUrl]
        );
        console.log(`Got the dislikes of the cat: ${catUrl}`)
        if (res.rows.length === 0) {
            return 0
        }
        return res.rows[0].dislikes
    }

    async dislikeCat(catUrl: string): Promise<boolean> {
        console.log(`Trying to dislike the cat: ${catUrl}`)

        await this.pool.query(
            "CREATE TABLE IF NOT EXISTS cats (id serial PRIMARY KEY,url VARCHAR(255) UNIQUE, likes INT, dislikes INT)"
        );

        // Increment the dislikes column if the cat already exists
        await this.pool.query(
            "INSERT INTO cats (url, likes, dislikes) VALUES ($1, 0, 1) ON CONFLICT (url) DO UPDATE SET dislikes = cats.dislikes + 1",
            [catUrl]
        );
        return true
    }

    async getAllCats(): Promise<Cat[]> {
        console.log(`Trying to get all cats`)
        const res = await this.pool.query(
            "SELECT id, url, likes, dislikes FROM cats"
        );
        console.log(`Got all cats`)
        return res.rows
    }
}

