import { NextResponse } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const maxDuration = 30; // Limite à 30 secondes pour le streaming

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Vérification des paramètres
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "Invalid request: 'messages' must be an array" }, { status: 400 });
    }

    // Vérifier si la clé API OpenAI est bien configurée
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 });
    }

    // Envoi de la requête à OpenAI avec streaming
    const result = await streamText({
      model: openai("gpt-4o"),
      messages: body.messages,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("Error in chat API:", error.message || error);
    return NextResponse.json({ error: error.message || "Failed to get response from OpenAI" }, { status: 500 });
  }
}
