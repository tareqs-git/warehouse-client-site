import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from './Social';

const Signup = () => {
    return (
        <div>
            <Form className='w-25 mx-auto border mt-5 rounded bg-dark text-white'>
                <h2 className='text-bold mt-3'>Sign up</h2>
                <Form.Group className="mb-3 mx-5 mt-5" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='mb-3' variant="danger rounded-pill px-5" type="submit">
                    Submit
                </Button><br />
                <div className=''>
                    <p className='text-bold'>Or</p>
                    <p className='text-muted'>Sign up with</p>
                    <Social></Social>
                </div>
            </Form>
        </div>
    );
};

export default Signup;