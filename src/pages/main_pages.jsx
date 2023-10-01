import { useState, useEffect } from 'react'
import Side_Layout from '../components/Layout/Side_Layout'
import Content from '../components/Layout/Main_layout'
import Preload from '../components/Element/Preload';

const Home = () => {
    const [loading , setLoading ] = useState(true);
    
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 3000)
        
        return () => {
            clearTimeout(loadingTimeout);
        }
    }, []);
    
    if (loading) {
        return <Preload />;
    }

  return (
    <div className='flex min-h-screen  bg-[url(images/bg.png)] bg-no-repeat bg-cover bg-center'>
      <div className='bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 h-full w-full'>
        <div className='flex justify-center gap-20'>
            <Side_Layout />
            <Content />
        </div>
      </div>
    </div>
  )
}

export default Home