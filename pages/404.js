import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NoPage = () => {
    // This function takes the user back to the Home page after 3 seconds
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="no-page">
            <h1>Uh..oh! We're out of our comfort zone...</h1>
            <h2>404 - Page Not Found</h2>
            <p>Well...we could head <Link href="/"><a className="underline">home</a></Link> or check out some <Link href="/strains"><a className="underline">cool strains</a></Link>.</p>
        </div>
     );
}
 
export default NoPage;