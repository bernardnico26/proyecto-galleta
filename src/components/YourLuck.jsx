const Yourluck = ({data}) => {

    return(
        <section className="your-luck">
            <div className="phrase-info">
                <h3>{data.phrase}</h3>
                <h4><i className='bx bxs-pen'></i> {data.author}</h4>
            </div>
        </section>
    )
}


export default Yourluck