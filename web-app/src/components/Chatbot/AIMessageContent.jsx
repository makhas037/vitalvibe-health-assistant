import React from 'react';

// This component receives the detailed 'data' object from the API
const AIMessageContent = ({ data, onFollowUpClick }) => {
    if (!data || !data.response) {
        return <p>Sorry, an error occurred.</p>;
    }

    const { message, recommendations, warnings, followUp } = data.response;

    return (
        <div className="ai-message-card">
            <p className="ai-main-message">{message}</p>

            {recommendations && recommendations.length > 0 && (
                <div className="ai-section recommendations">
                    <h4>Recommendations</h4>
                    <ul>
                        {recommendations.map((rec, index) => <li key={index}>{rec}</li>)}
                    </ul>
                </div>
            )}

            {warnings && warnings.length > 0 && (
                <div className="ai-section warnings">
                    <h4>⚠️ Important</h4>
                    <ul>
                        {warnings.map((warn, index) => <li key={index}>{warn}</li>)}
                    </ul>
                </div>
            )}
            
            {followUp && followUp.length > 0 && (
                <div className="ai-section follow-up">
                    <h4>Next Steps</h4>
                    <div className="follow-up-buttons">
                        {followUp.map((fu, index) => (
                            <button key={index} onClick={() => onFollowUpClick(fu)}>
                                {fu}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIMessageContent;