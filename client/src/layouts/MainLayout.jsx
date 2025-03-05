import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div>
            <Header />
            <main>
                <Outlet />
                {showScroll && (
                    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                        <i className="bi bi-arrow-up"></i>
                    </a>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;