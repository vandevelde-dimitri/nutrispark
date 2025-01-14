import { foods } from "@/app/data";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ name: string }> }
) {
    try {
        const { name } = await params;

        const index = foods.findIndex(
            (food) => food.name.toLowerCase().replace(/ /g, "-") === name
        );

        if (index !== -1) {
            return new Response(JSON.stringify(foods[index]));
        } else {
            return new Response("Food not found", { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }));
    }
}
