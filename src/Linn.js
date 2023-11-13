const Linn = (props) => (
    <div >
        <h1>{ props.andmed.nimi }</h1>
        <img src={ props.andmed.pilt } className="pilt" />
        <div className="Linn_sisu" style={{display:'inline', 'verticalAlign':'top'}}>{ props.andmed.kirjeldus }</div>
    </div>
)

export default Linn;