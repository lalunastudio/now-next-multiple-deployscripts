import { Component } from 'react';
import Link from 'next/link';
import Header from '../components/header';
import withEnvAndCookies from '../lib/withEnvAndCookies';

class AboutPage extends Component {
	render() {
		return (
			<main>
				<Header />
				<h3>Test: {this.props.shop}</h3>
				<section>
					<p>
						This is another page of the SSR example, you accessed it{' '}
						<strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
					</p>
					<p>You can reload to see how the page change.</p>
					<Link href="/">
						<a>Go to Home</a>
					</Link>
				</section>
				<pre>{JSON.stringify(this.props, null, 2)}</pre>
			</main>
		);
	}
}

export default withEnvAndCookies(AboutPage);
