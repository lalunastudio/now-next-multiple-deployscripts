import { Component } from 'react';
import Link from 'next/link';
import Header from '../components/header';
import withEnvAndCookies from '../lib/withEnvAndCookies';

class HomePage extends Component {
	render() {
		return (
			<main>
				<Header />
				<h3>Test: {process.env.SHOP_SLUG}</h3>
				<section>
					<p>
						This is another page of the SSR example, you accessed it{' '}
						<strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
					</p>
					<p>You can reload to see how the page change.</p>
					<Link href="/about">
						<a>Go to About Me</a>
					</Link>
				</section>
				<pre>{JSON.stringify(this.props, null, 2)}</pre>
				<p>test browser: {process.browser ? 'ja' : 'nej'}</p>
			</main>
		);
	}
}

export default withEnvAndCookies(HomePage);
