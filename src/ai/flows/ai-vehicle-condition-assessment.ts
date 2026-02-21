'use server';
/**
 * @fileOverview This flow assesses a vehicle's condition based on a natural language description.
 *
 * - assessVehicleCondition - A function that interprets a user's description of a vehicle's condition and issues.
 * - VehicleConditionAssessmentInput - The input type for the assessVehicleCondition function.
 * - VehicleConditionAssessmentOutput - The return type for the assessVehicleCondition function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const VehicleConditionAssessmentInputSchema = z.object({
  description: z
    .string()
    .describe("A natural language description of the vehicle's condition and any specific issues or reasons for scrapping."),
});
export type VehicleConditionAssessmentInput = z.infer<typeof VehicleConditionAssessmentInputSchema>;

const VehicleConditionAssessmentOutputSchema = z.object({
  isRunning: z
    .boolean()
    .describe('True if the vehicle starts and runs, false otherwise. Infer this from the description.'),
  hasMajorMechanicalIssues: z
    .boolean()
    .describe('True if there are significant engine, transmission, or other major mechanical failures. Infer this from the description.'),
  hasBodyDamage: z
    .boolean()
    .describe('True if there is significant crash damage, extensive rust, or major dents. Infer this from the description.'),
  issueSummary: z
    .string()
    .describe('A concise summary of all identified issues and problems from the description.'),
  reasonForScrap: z
    .string()
    .describe(
      'The primary reason the owner is looking to scrap the vehicle (e.g., "MOT failure", "accident damaged", "unwanted", "too old", "expensive repairs").'
    ),
  overallConditionRating: z
    .enum(['excellent', 'good', 'fair', 'poor', 'scrap-only'])
    .describe('An overall categorical rating of the vehicle\u0027s condition based on the description.'),
});
export type VehicleConditionAssessmentOutput = z.infer<typeof VehicleConditionAssessmentOutputSchema>;

export async function assessVehicleCondition(input: VehicleConditionAssessmentInput): Promise<VehicleConditionAssessmentOutput> {
  return vehicleConditionAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessVehicleConditionPrompt',
  input: { schema: VehicleConditionAssessmentInputSchema },
  output: { schema: VehicleConditionAssessmentOutputSchema },
  prompt: `You are an AI assistant specialized in assessing vehicle conditions for scrapping purposes. Your task is to analyze the provided description of a vehicle's condition and extract key information into a structured format.

Here is the vehicle's description:
"""{{{description}}}"""

Based on this description, accurately determine the following:
- Whether the vehicle is currently running or not.
- If there are any major mechanical issues (engine, transmission, etc.).
- If there is significant body damage (crash damage, extensive rust, or major dents).
- Provide a concise summary of all identified problems.
- Identify the main reason the owner wants to scrap the vehicle.
- Assign an overall condition rating from 'excellent', 'good', 'fair', 'poor', or 'scrap-only'.

Respond strictly in JSON format according to the output schema.`,
});

const vehicleConditionAssessmentFlow = ai.defineFlow(
  {
    name: 'vehicleConditionAssessmentFlow',
    inputSchema: VehicleConditionAssessmentInputSchema,
    outputSchema: VehicleConditionAssessmentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
