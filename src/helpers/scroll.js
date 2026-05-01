import {useEffect} from "react"

//Part 2 of 2
const secondHalf = "31TWOYuv"
//Not everything needs decoding. Sometimes you just need to know where to go."

function useScroll(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    console.log(entry)
                    entry.target.classList.add("show")
                }
            })
        }, {
            threshold: 0.3
        })
        const itemElements = document.querySelectorAll(".item")
        itemElements.forEach((el) => observer.observe(el))

        return () => {
        observer.disconnect()
        }
    }, []);
}

export default useScroll;