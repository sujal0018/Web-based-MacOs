import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({ windowname, setwindowState }) => {
	const [noteContent, setNoteContent] = useState("");
	const [savedNotes, setSavedNotes] = useState([]);

	
	useEffect(() => {
		const stored = localStorage.getItem("notes");
		if (stored) {
			setSavedNotes(JSON.parse(stored));
		}
	}, []);

	 
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(savedNotes));
	}, [savedNotes]);

	const handleAddNote = () => {
		if (noteContent.trim() === "") {
			alert("Please write something before saving!");
			return;
		}
		const newNote = {
			id: Date.now(),
			content: noteContent,
			createdAt: new Date().toLocaleString(),
		};
		setSavedNotes([newNote, ...savedNotes]);
		setNoteContent("");
	};

	const handleDeleteNote = (id) => {
		setSavedNotes(savedNotes.filter((note) => note.id !== id));
	};

	const handleClear = () => {
		setNoteContent("");
	};

	return (
		<MacWindow windowname={windowname} setwindowState={setwindowState}>
			<div className="note-window">
				<div className="note-input-section">
					<textarea
						placeholder="Write your note here..."
						value={noteContent}
						onChange={(e) => setNoteContent(e.target.value)}
						className="note-textarea"
					/>
					<div className="note-buttons">
						<button onClick={handleAddNote} className="save-btn">
							Save Note
						</button>
						<button onClick={handleClear} className="clear-btn">
							Clear
						</button>
					</div>
				</div>

				<div className="notes-list-section">
					<h3>Saved Notes</h3>
					{savedNotes.length === 0 ? (
						<p className="no-notes">
							No notes yet. Write and save your first note!
						</p>
					) : (
						<div className="notes-list">
							{savedNotes.map((note) => (
								<div key={note.id} className="note-item">
									<div className="note-content-section">
										<p className="note-content">
											{note.content}
										</p>
										<span className="note-date">
											{note.createdAt}
										</span>
									</div>
									<button
										onClick={() =>
											handleDeleteNote(note.id)
										}
										className="delete-btn"
									>
										Delete
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</MacWindow>
	);
};

export default Note;
