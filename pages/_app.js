import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import { GithubClient } from 'react-tinacms-github'

export default class Site extends App {
	constructor() {
		super()
		const REPO_FULL_NAME = process.env.REPO_FULL_NAME

		this.cms = new TinaCMS({
			apis: {
				github: new GithubClient('/api/proxy-github', REPO_FULL_NAME),
			},
			sidebar: {
				position: 'overlay',
				hidden: true,
			},
			toolbar: {
				hidden: true,
			},
		})
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<TinaProvider cms={this.cms}>
				<Component {...pageProps} />
			</TinaProvider>
		)
	}
}
