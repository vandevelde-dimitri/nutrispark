import { foods } from "../../../data";

//! Recupere toute les foods a l'url /api/foods/all

export async function GET() {
    try {
        return new Response(JSON.stringify(foods), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching foods:", error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch foods" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }
}
