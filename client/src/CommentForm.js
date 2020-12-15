
import React from 'react'
import { Formik, Field, Form } from 'formik';
import {Button, CommentFormStyle} from "./CommentStyle"

const CommentForm = () => {
    return (
        <CommentFormStyle>
        <h1>Send Your Message</h1>
        <Formik
          initialValues={{
            firstName: '',
            message: '',
            
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="Name">Your Name</label>
            <Field id="Name" name="Name" placeholder="Your name" />
    
            <label htmlFor="Message">Message</label>
            <Field id="Message" name="Message" placeholder="Your message" />
    
            
         
            <Button  type="submit">Send</Button>
          </Form>
        </Formik>
      </CommentFormStyle>
    )
}

export default CommentForm;
