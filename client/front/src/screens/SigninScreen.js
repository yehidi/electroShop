import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch } from 'react-redux';

export default function SigninScreen(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch(signin(email, password));  
    }

    return(
            <div>
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label />
                  <button className="primary" type="submit">
                    Sign In
                  </button>
                </div>
                <div>
                  <label />
                  <div>
                    New customer?{' '}
                    <Link to={`/register?redirect=${redirect}`}>
                      Create your account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
    )
}