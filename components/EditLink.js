import React from 'react'
import { useGithubEditing } from 'react-tinacms-github'

export default function EditLink({ isEditing }) {
	const github = useGithubEditing()

	return (
		<button onClick={isEditing ? github.exitEditMode : github.enterEditMode}>
			{isEditing ? 'Exit Edit Mode' : 'Edit This Site'}
		</button>
	)
}
