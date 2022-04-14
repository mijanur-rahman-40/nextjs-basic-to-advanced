import Meta from '../components/Meta';
import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/List'),
    { loading: () => <p>Loading...</p> }
)


const contact = ({ username }) => {
    console.log(username)

    const [name, setName] = React.useState('');


    return <div>
        <Meta title='Contact' />
        <h1>contact</h1>
        <h2>{name}</h2>
        <img src='/images/audio.png' alt='Audio' />
        <input onChange={e => setName(e.target.value)} />
        <DynamicComponentWithCustomLoading />
    </div>
}

contact.layout = 'L1';
export default contact;

export const getStaticProps = async () => {

    return {
        props: {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
        },
    }
}

