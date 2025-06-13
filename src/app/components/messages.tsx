'use client';

import { useEffect, useState, FormEvent } from "react";

interface Comment {
    nickname: string;
    message: string;
    createdAt: Date;
}

export default function CommentSection() {

    return (
        <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Comentarios</h2>

            <form  className="mb-4">
                <input 
                    type="text" 
                    placeholder="Tu Nickname" 
                    className="w-full p-2 mb-2 border rounded"
                />
                <textarea
                    placeholder="Escribe tu mensaje..."
                    className="w-full p-2 mb-2 border rounded"
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Enviar
                </button>
            </form>

            <div className="space-y-2">
            </div>
        </div>
    );
}
