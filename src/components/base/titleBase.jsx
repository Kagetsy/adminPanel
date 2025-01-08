import { Helmet } from 'react-helmet-async';

export default function TitleBase({title}) {
    return (
    <Helmet>
        <title>{title}</title>
    </Helmet>);
}