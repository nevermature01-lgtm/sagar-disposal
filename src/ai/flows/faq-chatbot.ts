'use server';
/**
 * @fileOverview An AI chatbot that answers natural language questions about the vehicle scrapping process based on provided FAQ.
 *
 * - faqChatbot - A function that handles answering questions about vehicle scrapping.
 * - FAQChatbotInput - The input type for the faqChatbot function.
 * - FAQChatbotOutput - The return type for the faqChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQChatbotInputSchema = z
  .string()
  .describe('The natural language question about vehicle scrapping.');
export type FAQChatbotInput = z.infer<typeof FAQChatbotInputSchema>;

const FAQChatbotOutputSchema = z
  .string()
  .describe('The answer to the user\'s question about vehicle scrapping.');
export type FAQChatbotOutput = z.infer<typeof FAQChatbotOutputSchema>;

export async function faqChatbot(input: FAQChatbotInput): Promise<FAQChatbotOutput> {
  return faqChatbotFlow(input);
}

const faqChatbotPrompt = ai.definePrompt({
  name: 'faqChatbotPrompt',
  input: {schema: FAQChatbotInputSchema},
  output: {schema: FAQChatbotOutputSchema},
  prompt: `You are an AI assistant for a vehicle scrapping service named ScrapMyRide.
Your task is to answer user questions about the vehicle scrapping process based ONLY on the following Frequently Asked Questions (FAQ) information.
If a question cannot be answered from the provided FAQ, politely state that you cannot find the answer in the provided information.

--- FAQ ---

Q: What documents do I need to scrap my vehicle?
A: You primarily need the V5C logbook. If you don't have it, we can still scrap your vehicle, but we'll need proof of identity and ownership. We handle the DVLA notification for you so you're legally cleared.

Q: How and when will I get paid?
A: By law, scrap vehicle payments must be made via bank transfer or cheque (not cash). We provide instant bank transfers at the point of collection, so the funds are in your account immediately.

Q: Do you collect non-running or damaged vehicles?
A: Yes! We specialize in collecting vehicles in all conditions—crashed, failed MOT, non-starters, or just old. Our recovery trucks are equipped to handle any situation.

Q: What is a Certificate of Destruction (CoD)?
A: A CoD is an official DVLA document issued by an Authorized Treatment Facility (ATF) like us. it proves your vehicle has been recycled legally and you are no longer responsible for it.

--- End of FAQ ---

User Question: {{{this}}}`,
});

const faqChatbotFlow = ai.defineFlow(
  {
    name: 'faqChatbotFlow',
    inputSchema: FAQChatbotInputSchema,
    outputSchema: FAQChatbotOutputSchema,
  },
  async (input) => {
    const {output} = await faqChatbotPrompt(input);
    return output!;
  }
);
