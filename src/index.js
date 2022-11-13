import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

function Reason() {
    return (
        <div>
            <img src="./logo192.png" alt="Brand logo" width={40} height={40} />
            <h1>Why I am excited to learn React?</h1>
            <ol>
                <li>React is easy to learn.</li>
                <li>React makes web development time conservative.</li>
                <li>It has a large community, and it is maintained by Meta.</li>
                <li>It is a demanding skill in IT industry.</li>
            </ol>
        </div>
    )
}

createRoot(document.getElementById("root")).render(<Reason />);