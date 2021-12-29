import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image 
                width={128}
                height={128}
                src="/strain-scholars-logo.svg"
                />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/strains"><a>Strains</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;