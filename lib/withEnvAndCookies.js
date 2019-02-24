import React, { Component } from 'react';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import uuid from 'uuid/v4';

const BASKET_TOKEN_KEY = 'TEST_TOKEN';

export default WrappedComponent =>
	class EnvAndCookiesHOC extends Component {
		static displayName = 'withEnvAndCookies(App)';

		static async getInitialProps(context) {
			const { query, req, res } = context;
			// res.cookies = 'test=hello';
			// cookieParser(req);
			const isServer = typeof window === 'undefined';

			let token = '';
			if (isServer) {
				const cookies = cookie.parse(req.headers.cookie || '');
				if (!cookies[BASKET_TOKEN_KEY]) {
					token = uuid();
				} else {
					token = cookies[BASKET_TOKEN_KEY];
				}
			} else {
				token = Cookies.get(BASKET_TOKEN_KEY);
				if (!token) {
					console.log('We have a problem here...');
				}
			}

			return {
				isServer,
				token,
				shop: process.env.SHOP_SLUG,
			};
		}

		constructor(props) {
			super(props);
			if (props.token) {
				Cookies.set(BASKET_TOKEN_KEY, props.token, { expires: 30 });
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
