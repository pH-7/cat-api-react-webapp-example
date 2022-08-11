import Cats from "./Cats";

const Home = ({ greeting}) => {
    return (
        <div className='mt-4'>
            <p className='text-center'>{greeting}</p>
            <Cats />
        </div>
    )
};

export default Home;
