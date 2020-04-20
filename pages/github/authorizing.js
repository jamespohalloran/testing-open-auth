import React from 'react'
import { useGithubAuthRedirect } from 'react-tinacms-github'

export default function Authorizing() {
	// Let the main app know, that we receieved an auth code from the Github redirect
	useGithubAuthRedirect()
	return <h2>Authorizing with Github, Please wait...</h2>
}
