const Button = (props: {text: string}) => {
  return (
    <button className="border border-secondary rounded-3xl px-6 hover:bg-secondary/10 cursor-pointer select-none">
        {props.text}
    </button>
  )
}

export default Button