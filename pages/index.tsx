import React from 'react';
import Link from 'next/link';

export default () => (
    <main>
        <h1>Hello from Preact</h1>
        <ul className="flex">
            <li className="mr-6">
                <Link href="/about">
                    <a className="text-blue-500 hover:text-blue-800" href="#">About</a>
                </Link>
            </li>
            <li className="mr-6">
                <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li>
        </ul>
    </main>
);
