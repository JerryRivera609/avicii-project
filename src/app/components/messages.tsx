'use client';

import { useEffect, useState, FormEvent } from "react";

interface Comment {
    nickname: string;
    message: string;
    createdAt: Date;
}

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [nickname, setNickname] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // Cargar comentarios al iniciar
    useEffect(() => {
        fetch("/api/comments")
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);

    // Enviar comentario a la API
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!nickname.trim() || !message.trim()) return;

        const res = await fetch("/api/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nickname, message }),
        });

        if (res.ok) {
            const newComment: Comment = await res.json();
            setComments([...comments, newComment]); // Actualizar la lista
            setNickname("");
            setMessage("");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Comentarios</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <input 
                    type="text" 
                    placeholder="Tu Nickname" 
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                />
                <textarea
                    placeholder="Escribe tu mensaje..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Enviar
                </button>
            </form>

            <div className="space-y-2">
                {comments.map((comment, index) => (
                    <div key={index} className="p-2 bg-white border rounded">
                        <p className="text-sm font-semibold">{comment.nickname}:</p>
                        <p>{comment.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
