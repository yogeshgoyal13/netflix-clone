import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// If user is logged in, redirect to loggedInPath
// Otherwise, return children(signin/signup)
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

// If user is logged in, then redirect to children i.e. browse page, if not, redirect to signin page
export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
