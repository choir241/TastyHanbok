import Navigation from './navigation.tsx';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Button from './button.tsx';

const Header = () => {
    return (
        <header>
            <h1>TastyHanbok</h1>
            <Navigation />
            <CiSearch />
            <CiShoppingCart />
            <Button
                classNames = ''
                text = 'Sign In'
                onClick = { () => '' }
            />
        </header>
    );
}

