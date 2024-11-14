function Button({classBtn, childBtn}) {
    return (
        <button className={classBtn}>
            {childBtn}
        </button>
    )
}
export default Button;