import React, { useState } from 'react';

const Ai = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('http://localhost:5000/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question, answer })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await res.json();
            setResponse(result.response);
        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">AI Evaluator - Ask and get feedback</h1>
            <form 
                id="evaluation-form" 
                onSubmit={handleSubmit} 
                className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
            >
                <div className="mb-4">
                    <label 
                        htmlFor="question" 
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Question:
                    </label>
                    <input
                        type="text"
                        id="question"
                        name="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        htmlFor="answer" 
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Answer:
                    </label>
                    <textarea
                        id="answer"
                        name="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="w-full max-w-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Response</h2>
                {loading ? (
                    <p className="text-gray-700">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <pre 
                        id="response" 
                        className="bg-gray-400 shadow-md rounded p-4 overflow-x-auto w-full h-52" 
                        style={{ minWidth: '50rem' }} 
                    >
                        {response && JSON.stringify(response, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
};

export default Ai;
