// ai-controller.js

const AiData = require('../models/ai-model');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Set up your Google Generative AI key
const genAI = new GoogleGenerativeAI("AIzaSyCWLYsKOrf6U7Mb8sjfLRTWeXhwD-oZsK8"); // Replace with your actual API key

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(question, answer) {
    const prompt = `You are a university professor. I want you to evaluate this question, "${question}" and this is the answer "${answer}". Give marks as well as feedback. Give me the response as a JavaScript object with marks and feedback as the only two fields. Do not include any symbols in the response.`;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Return the text content as a string
    return text.trim(); // Trim any extra whitespace
}

const aiForm = async (req, res) => {
    const { question, answer } = req.body;
    console.log(`Received request: question="${question}", answer="${answer}"`);

    try {
        const responseText = await run(question, answer);
        console.log(`Generated response: ${responseText}`);

        // Save data to database
        const newData = new AiData({
            question,
            answer,
            response: responseText // Store the text response directly
        });
        await newData.save();

        // Respond with the generated result
        res.json({ response: responseText });
    } catch (error) {
        console.error(`Error processing request: ${error.message}`);
        res.status(500).json({ error: 'An error occurred while processing your request. Please try again later.' });
    }
};

module.exports = aiForm;
