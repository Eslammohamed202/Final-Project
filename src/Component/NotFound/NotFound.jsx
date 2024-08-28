import error from '../../assets/photo/error.svg'

export default function NotFound() {
  return (
    <div>

      <div className="py-32">
        <img className='m-auto' src={error} alt="" />
      </div>
    </div>
  )
}
