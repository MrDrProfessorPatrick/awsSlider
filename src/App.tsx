import { useState } from 'react'

import { CommentsSlider } from './CommentsSlider'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'
// import bgImage from '../assets/bgTheme.jpg'

const mockedComments = [
    {
        id: 1,
        companyName: 'This is a great comment!',
        companyLogo: '/companyLogo1.jpg',
        text: 'User1',
        authorName: 'User1',
        authorLogoImg: '/author1.jpg',
        authorJobTitle: 'CEo',
    },
    {
        id: 2,
        companyName: 'I love this product!',
        companyLogo: '/companyLogo2.jpg',
        text: 'User2',
        authorName: 'User2',
        authorLogoImg: '/author2.jpg',
        authorJobTitle: 'CTO',
    },
    {
        id: 3,
        companyName: 'Thanks for sharing your thoughts.',
        companyLogo: '/companyLogo3.jpg',
        text: 'User1',
        authorName: 'User1',
        authorLogoImg: '/author3.jpg',
        authorJobTitle: 'CFO',
    },
]

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-[url('/bgTheme.jpg')] bg-cover bg-center h-[755px] w-19/20 mt-20 flex justify-center mx-auto">
            <div className="flex flex-col justify-center h-[663.31px]">
                <h1 className="mb-20">Voices of Success with Sales Fortuna</h1>
                <div className="flex justify-between items-center">
                    <button className="flex items-center justify-center border border-[#B6B1B1] rounded-4xl w-[68px] h-[68px]">
                        <ChevronLeft size={48} color="#B6B1B1" fill="#FFFFFF" />
                    </button>
                    <CommentsSlider comments={mockedComments} />
                    <button className="flex items-center justify-center border border-[#B6B1B1] rounded-4xl w-[68px] h-[68px]">
                        <ChevronRight
                            size={48}
                            color="#B6B1B1"
                            fill="#FFFFFF"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
