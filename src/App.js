import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './app.css';

function App() {
    let initialText = '# Heading 1 \n';
    initialText += '## Heading 2 \n';
    initialText += '### Heading 3 \n';
    initialText += '#### Heading 4 \n';
    initialText += '- list item 1\n';
    initialText += '- list item 2\n';
    initialText += '- list item 3\n';
    initialText += '\n> This is a blockquote\n\n';
    initialText += `Lorem ipsum dolor sit amet **this is bold text** elit. 
    Voluptatibus neque nemo dolor pariatur *this is italicized text* aspernatur, 
    iure adipisci consectetur voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Deleniti iste incidunt quis eligendi id vel debitis ratione sit dolore aliquid, 
    asperiores nam eveniet dolorum beatae tempora enim dolor nesciunt a.`;
    initialText += '\n\n\n **!! remove content to start new !!**';

    const [markdown, setMarkdown] = useState(initialText);

    function handleTextChange(e) {
        setMarkdown(e.target.value);
    }

    return (
        <div className="app">
            <textarea
                className="text-area"
                onChange={handleTextChange}
                value={markdown}
            />
            <ReactMarkdown className="preview-area" source={markdown} />
        </div>
    );
}

export default App;
