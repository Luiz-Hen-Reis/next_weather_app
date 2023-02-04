import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
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

interface IParams extends ParsedUrlQuery {
    location: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { location } = context.params as IParams;

    return {
        props: {
            location
        }
    }
}