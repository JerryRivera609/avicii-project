import { db, collection, addDoc, getDocs } from "@/lib/firebase";

export default async function handler(req, res) {
    if (req.method === "GET") {
        // Obtener todos los comentarios
        const querySnapshot = await getDocs(collection(db, "Avicii-messages"));
        const comments = querySnapshot.docs.map(doc => doc.data());
        return res.status(200).json(comments);
    }

    if (req.method === "POST") {
        // Guardar un nuevo comentario
        const { nickname, message } = req.body;
        if (!nickname || !message) {
            return res.status(400).json({ error: "Nickname y mensaje son obligatorios" });
        }

        const newComment = { nickname, message, createdAt: new Date() };
        await addDoc(collection(db, "Avicii-messages"), newComment);
        return res.status(201).json(newComment);
    }

    res.status(405).json({ error: "Método no permitido" });
}
