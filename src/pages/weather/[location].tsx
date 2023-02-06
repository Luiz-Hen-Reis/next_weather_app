import { GetServerSideProps } from "next";
import Home from "templates/Home";

interface Props {
    location: string;
}

const Location = ({ location }: Props) => {
    return (
        <Home location={location} />
    )
}

export default Location;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { location } = context.params;

    return {
        props: {
            location
        }
    }
}